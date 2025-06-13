// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Add polyfills for web APIs
import { TextEncoder, TextDecoder } from 'util'
import { Request, Response, Headers } from 'node-fetch'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
global.Request = Request
global.Response = Response
global.Headers = Headers

// Mock NextResponse
jest.mock('next/server', () => ({
  NextRequest: jest.requireActual('next/server').NextRequest,
  NextResponse: {
    json: jest.fn((data, init) => {
      const response = new Response(JSON.stringify(data), {
        status: init?.status || 200,
        headers: {
          'Content-Type': 'application/json',
          ...init?.headers
        }
      })
      return response
    })
  }
}))

// Mock fetch globally
global.fetch = jest.fn()

// Mock Resend
jest.mock('resend', () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: {
        send: jest.fn().mockResolvedValue({})
      }
    }))
  }
})
