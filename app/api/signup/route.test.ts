import { NextRequest } from 'next/server'
import { POST } from './route'
import '@testing-library/jest-dom'

// Mock the municipality validator
jest.mock('@/lib/municipality-validator', () => ({
  isValidGovEmail: jest.fn(() => true)
}))

// Mock the fetch function
global.fetch = jest.fn()

// Helper functions for cleaner tests
const mockFetch = global.fetch as jest.Mock

const createMockTenants = (tenants: Array<{id: string, name: string, display_name: string}>) => ({
  json: () => Promise.resolve({ items: tenants })
})

const createMockResponse = (ok = true, data = {}) => ({
  ok,
  json: () => Promise.resolve(data)
})

const createSignupRequest = (email: string, techEmail: string, orgName: string) => {
  return new NextRequest('http://localhost:3000/api/signup', {
    method: 'POST',
    body: JSON.stringify({ email, techEmail, orgName })
  })
}

const mockFetchSequence = (...responses: any[]) => {
  responses.forEach(response => {
    mockFetch.mockResolvedValueOnce(response)
  })
}

describe('Signup Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    // Mock environment variables
    process.env.ENEO_BACKEND_URL = 'http://test-backend'
    process.env.ENEO_API_KEY_HEADER_NAME = 'X-API-Key'
    process.env.ENEO_SUPER_API_KEY = 'test-super-key'
    process.env.ENEO_PREDEFINED_OWNER_ROLE_ID = 'owner-role-id'
    process.env.RESEND_FROM_EMAIL = 'test@example.com'
    process.env.RESEND_RECIPIENT = 'recipient@example.com'
    process.env.RESEND_API_KEY = 'test-resend-key'
  })

  it('should assign users with same orgName to the same tenant', async () => {
    const initialTenants = [
      { id: 'tenant-1', name: 'demo-pool-1', display_name: 'Demo Pool 1' },
      { id: 'tenant-2', name: 'demo-pool-2', display_name: 'Demo Pool 2' }
    ]

    const updatedTenants = [
      { id: 'tenant-1', name: 'demo-pool-1', display_name: 'Test Kommun' },
      { id: 'tenant-2', name: 'demo-pool-2', display_name: 'Demo Pool 2' }
    ]

    // Mock fetch sequence for both requests
    mockFetchSequence(
      // First request
      createMockTenants(initialTenants),  // Get tenants
      createMockResponse(),               // Update tenant
      createMockResponse(),               // Create user
      // Second request
      createMockTenants(updatedTenants),  // Get tenants (updated)
      createMockResponse()                // Create user
    )

    // First signup request
    const request1 = createSignupRequest('user1@kommun.se', 'tech1@kommun.se', 'Test Kommun')
    const response1 = await POST(request1)
    expect(response1.status).toBe(200)

    // Second signup request with same orgName
    const request2 = createSignupRequest('user2@kommun.se', 'tech2@kommun.se', 'Test Kommun')
    const response2 = await POST(request2)
    expect(response2.status).toBe(200)

    // Verify that the tenant update was called only once (for the first user)
    expect(mockFetch).toHaveBeenCalledTimes(5) // 3 calls for first user, 2 for second
  })

  it('should handle case-insensitive orgName matching', async () => {
    const existingTenants = [
      { id: 'tenant-1', name: 'demo-pool-1', display_name: 'Test Kommun' }
    ]

    mockFetchSequence(
      createMockTenants(existingTenants),  // Get tenants
      createMockResponse()                 // Create user
    )

    // Signup request with different case
    const request = createSignupRequest('user@kommun.se', 'tech@kommun.se', 'TEST KOMMUN')
    const response = await POST(request)
    expect(response.status).toBe(200)

    // Verify that no tenant update was called (existing tenant found)
    expect(mockFetch).toHaveBeenCalledTimes(2) // Only get tenants and create user
  })

  it('should create new tenant for new organization', async () => {
    const availableTenants = [
      { id: 'tenant-1', name: 'demo-pool-1', display_name: 'Demo Pool 1' }
    ]

    mockFetchSequence(
      createMockTenants(availableTenants),  // Get tenants
      createMockResponse(),                 // Update tenant
      createMockResponse()                  // Create user
    )

    const request = createSignupRequest('user@neworg.se', 'tech@neworg.se', 'New Organization')
    const response = await POST(request)
    expect(response.status).toBe(200)

    // Verify tenant update was called
    expect(mockFetch).toHaveBeenCalledWith(
      'http://test-backend/api/v1/sysadmin/tenants/tenant-1/',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ display_name: 'New Organization' })
      })
    )
  })
})
