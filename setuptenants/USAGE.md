# Kommuna Demo Tenant Setup Guide

Complete setup guide for creating demo tenants and configuring the Kommuna user registration system for production deployment.

## Overview

This script automatically creates demo tenants on the Kommuna platform and configures them with the correct AI models and embedding settings. It's designed to work with both local development and production Portainer deployments.

## Prerequisites

1. **Kommuna backend running** on `https://plattform.kommuna.se`
2. **Sysadmin API key** from your Kommuna backend configuration
3. **Python 3.7+**
4. **Resend API key** for email functionality

## Environment Setup

### For Production (Portainer Deployment)

The script uses the `.env` file in the `setuptenants/` directory, which is already configured for production:

```bash
# Production environment (setuptenants/.env)
ENEO_BACKEND_URL=https://plattform.kommuna.se
ENEO_SUPER_API_KEY=sk-super-7f8e9d2a3b4c5e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5
ENEO_API_KEY_HEADER_NAME=X-API-Key
ENEO_PREDEFINED_OWNER_ROLE_ID=f590099f-da44-4bf2-a38d-8fa6402a28a3
DEMO_EMBEDDING_MODEL=text-embedding-ada-002
```

### For Frontend (Root Directory)

Create `.env` from template for Portainer deployment:

```bash
# Root directory .env (for frontend in Portainer)
ENEO_BACKEND_URL=http://backend:8000  # Internal Docker network
ENEO_SUPER_API_KEY=sk-super-7f8e9d2a3b4c5e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5
ENEO_PREDEFINED_OWNER_ROLE_ID=f590099f-da44-4bf2-a38d-8fa6402a28a3
RESEND_API_KEY=re_GsRAmuwn_BQv4SrWMfqJ5WnNuMbcKP1yA
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_RECIPIENTS=aiverkstad@sundsvall.se
```

## Running the Setup Script

### Single Command Setup

```bash
cd setuptenants
python setup_demo.py
```

### What the Script Does (Automatically)

1. **✅ Loads Configuration**
   - Reads `.env` file from setuptenants directory
   - Validates all required environment variables
   - Tests backend connectivity

2. **✅ Creates Demo Tenants**
   - Creates 20 demo tenants named `demo-pool-01` through `demo-pool-20`
   - Sets quota limit to 1GB per tenant
   - Configures active state

3. **✅ Configures AI Models**
   - Enables completion model (gpt-4o-mini)
   - Enables embedding model (text-embedding-ada-002)
   - Enables transcription model (whisper-1)

4. **✅ Configures Tenant-Specific Embedding Models**
   - **Enables** `text-embedding-ada-002` for all demo tenants
   - **Disables** `text-embedding-3-small` for all demo tenants
   - Applies to all existing demo tenants (not just newly created ones)

## User Registration Configuration

The frontend automatically:
- **User Quota**: 1GB per user (1,073,741,824 bytes)
- **Login URL**: Users receive `https://plattform.kommuna.se` in welcome emails
- **Backend Communication**: Uses `http://backend:8000` for internal Docker network calls

## Deployment Workflow

### 1. Create Demo Tenants (Local Computer)
```bash
# Run from your local computer to create tenants on production
cd setuptenants
python setup_demo.py
```

### 2. Deploy Frontend (Portainer)
- Create `.env` file in root directory with Docker network settings
- Push changes to GitHub
- Portainer will auto-deploy with new environment

### 3. Verify Setup
- Test user registration at `https://plattform.kommuna.se/activate`
- Use valid Swedish government email (e.g., `test@sundsvall.se`)
- Verify credentials are displayed and email is sent

## Architecture Details

### Environment URLs
- **Production Backend**: `https://plattform.kommuna.se` (external access)
- **Docker Internal**: `http://backend:8000` (container-to-container)
- **Frontend URL**: `https://plattform.kommuna.se` (user access)

### Embedding Model Configuration
- **Enabled**: `text-embedding-ada-002` (ID: a7aa95de-5c16-4bff-a3d9-f391232b0436)
- **Disabled**: `text-embedding-3-small` (ID: 57e514ed-fc31-4bc1-a611-ced01441c3ee)

### Tenant Pool Management
- **Naming**: `demo-pool-01` to `demo-pool-20`
- **Display Names**: Updated to organization name during registration
- **Allocation**: First available pool tenant assigned to new organizations

## Troubleshooting

### "Cannot connect to backend"
- Verify backend is running at `https://plattform.kommuna.se`
- Check API key is correct in setuptenants/.env
- Test with curl:
```bash
curl -X 'GET' \
  'https://plattform.kommuna.se/api/v1/sysadmin/tenants/' \
  -H 'X-API-Key: YOUR_API_KEY'
```

### "Authentication failed"
- Verify `ENEO_SUPER_API_KEY` matches backend configuration
- Ensure API key has sysadmin permissions

### "Model not found"
- Script will automatically list available models
- Check backend has required AI models installed

### Frontend Issues
- Verify root `.env` uses `http://backend:8000` for Portainer
- Check all environment variables are set correctly
- Ensure GitHub deployment triggered Portainer rebuild

## Success Indicators

- ✅ 20 tenants created with names `demo-pool-01` to `demo-pool-20`
- ✅ Each tenant has completion, embedding, and transcription models enabled
- ✅ `text-embedding-ada-002` enabled for all demo tenants
- ✅ `text-embedding-3-small` disabled for all demo tenants
- ✅ Frontend registration flow works with 1GB user quotas
- ✅ Users receive correct `kommuna.se` URL in welcome emails

## Quick Reference Commands

```bash
# Complete tenant setup (run locally)
cd setuptenants && python setup_demo.py

# Test API connectivity
curl -X 'GET' 'https://plattform.kommuna.se/api/v1/sysadmin/tenants/' \
  -H 'X-API-Key: sk-super-7f8e9d2a3b4c5e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5'

# Test user registration
# Visit: https://plattform.kommuna.se/activate
```

## Script Features

- ✅ **Production Ready**: Connects directly to `https://plattform.kommuna.se`
- ✅ **Automated Configuration**: Handles all model setup automatically
- ✅ **Embedding Model Control**: Ensures correct embedding models are enabled/disabled
- ✅ **Comprehensive Validation**: Tests connectivity and validates responses
- ✅ **Colored Progress Output**: Clear visual feedback during execution
- ✅ **Error Handling**: Detailed error messages and troubleshooting guidance
- ✅ **Rate Limiting**: Prevents API overload with appropriate delays
- ✅ **Idempotent**: Safe to run multiple times without duplicating tenants