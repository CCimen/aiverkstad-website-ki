# Eneo Demo Tenant Setup Guide

Complete setup guide for creating demo tenants and configuring the user registration system for the Eneo AI platform.

## Prerequisites

1. **Eneo backend running** on `localhost:8123`
2. **Sysadmin API key** from your Eneo configuration
3. **Python 3.7+**
4. **Resend API key** for email functionality (optional)

## Step 1: Backend Environment Setup

```bash
# Copy backend environment template
cp .env.example .env

# Edit .env with your actual values
nano .env
```

**Required changes in `.env`:**
- `INTRIC_SUPER_API_KEY` - Set to your actual sysadmin API key
- `ENEO_BACKEND_URL` - Verify backend URL (default: http://localhost:8123)
- `ENEO_API_KEY_HEADER_NAME` - Must match backend config (default: X-API-Key)

## Step 2: Frontend Environment Setup

```bash
# Navigate to your website directory (aiverkstad-website-ki)
cd ../

# Copy frontend environment template
cp .env.local.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

**Required changes in `.env.local`:**
- `ENEO_BACKEND_URL` - Same as backend (http://localhost:8123)
- `ENEO_SUPER_API_KEY` - Same sysadmin API key from backend
- `ENEO_PREDEFINED_OWNER_ROLE_ID` - UUID of the "Owner" predefined role from your Eneo backend
- `RESEND_API_KEY` - Your Resend email service API key
- `RESEND_FROM_EMAIL` - Email address for sending credentials (e.g., demo@yourdomain.com)
- `RESEND_RECIPIENTS` - Comma-separated list of admin emails for notifications

**To find your predefined role ID:**
```bash
# Query your Eneo backend for predefined roles
curl -H "X-API-Key: YOUR_SUPER_API_KEY" \
     "http://localhost:8123/api/v1/sysadmin/predefined-roles/"
# Look for the role with name "Owner" and copy its "id" field
```

## Step 3: Install Dependencies (Optional)

```bash
# Install optional dependencies for better experience
pip install -r requirements.txt
```

**Note:** The script works without these dependencies using fallback implementations.

## Step 4: Run Backend Setup Script

```bash
# Single command setup - creates tenants and configures models
python setup_demo.py
```

**What this does:**
- ✅ Automatically loads `.env` file (no export needed!)
- ✅ Creates 20 pre-configured demo tenants  
- ✅ Enables AI models for all tenants
- ✅ Provides colored progress feedback
- ✅ Comprehensive error handling and validation

## Step 5: Start Frontend Application

```bash
# Navigate to the website directory
cd ../

# Install frontend dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm run dev
```

## Step 6: Verify Complete Setup

1. **Backend verification**: The Python script will automatically verify the setup and show you a success summary with tenant count and configured models.

2. **Frontend verification**: 
   - Navigate to `http://localhost:3000/activate` (or your configured port)
   - Try registering with a valid Swedish government email (e.g., `test@sundsvall.se`)
   - Verify that credentials are displayed and email is sent

## Troubleshooting

### "Cannot connect to backend"
- Verify Eneo backend is running
- Check `ENEO_BACKEND_URL` in `.env`
- Ensure API key is correct

### "Authentication failed" 
- Verify `INTRIC_SUPER_API_KEY` matches backend configuration
- Check `ENEO_API_KEY_HEADER_NAME` matches backend expectations

### "Model not found"
- The script will list available models if any are missing
- Update model names in `.env` if needed

### Python Dependencies
- Install optional dependencies: `pip install -r requirements.txt`
- Script works without them but with fewer features

## Success Indicators

- ✅ 20 tenants created with names `demo-pool-01` to `demo-pool-20`
- ✅ Each tenant has completion, embedding, and transcription models enabled
- ✅ Frontend signup flow can assign tenants from the pool

## Next Steps

After successful setup:
1. Test frontend signup at `/activate` page
2. Use valid Swedish government email (e.g., `test@sundsvall.se`)
3. Verify credentials are displayed and email is sent
4. Confirm login works on the platform

## Quick Reference

```bash
# Complete setup in one command
python setup_demo.py
```

## Python Script Advantages

- ✅ **No environment export needed** - automatically loads .env
- ✅ **Better error messages** - clear validation and troubleshooting
- ✅ **Progress feedback** - colored output with status indicators  
- ✅ **Comprehensive validation** - tests connectivity before proceeding
- ✅ **Single command** - creates tenants and configures models
- ✅ **Robust JSON handling** - native parsing with error handling