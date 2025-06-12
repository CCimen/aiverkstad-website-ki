#!/usr/bin/env python3
"""
Eneo Demo Setup Script

This script creates a complete demo environment for the Eneo AI platform.
It handles tenant creation and AI model configuration in a single command.

Features:
- Automatic .env file loading
- Comprehensive error handling
- Progress feedback with colored output
- Detailed validation and diagnostics
- JSON-based API communication

Prerequisites:
- Python 3.7+
- Eneo backend running and accessible
- Valid sysadmin API key in .env file

Usage:
    python setup_demo.py

Author: AI Verkstad
License: AGPL v3
"""

import os
import sys
import json
import time
from pathlib import Path
from typing import Dict, List, Optional, Tuple
import urllib.parse
import urllib.request
import urllib.error
from dataclasses import dataclass

# Try to import optional dependencies
try:
    from dotenv import load_dotenv
    HAS_DOTENV = True
except ImportError:
    HAS_DOTENV = False

try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False


# Configuration dataclass
@dataclass
class Config:
    backend_url: str
    api_key: str
    api_key_header: str
    tenant_count: int
    quota_limit: int
    completion_model: str
    embedding_model: str
    transcription_model: str


# Color codes for terminal output
class Colors:
    RESET = '\033[0m'
    BOLD = '\033[1m'
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    PURPLE = '\033[95m'
    CYAN = '\033[96m'
    WHITE = '\033[97m'


def colored_print(message: str, color: str = Colors.WHITE, bold: bool = False):
    """Print colored text to terminal."""
    prefix = Colors.BOLD if bold else ""
    print(f"{prefix}{color}{message}{Colors.RESET}")


def print_info(message: str):
    """Print info message with blue color."""
    colored_print(f"ℹ️  {message}", Colors.BLUE)


def print_success(message: str):
    """Print success message with green color."""
    colored_print(f"✅ {message}", Colors.GREEN)


def print_warning(message: str):
    """Print warning message with yellow color."""
    colored_print(f"⚠️  {message}", Colors.YELLOW)


def print_error(message: str):
    """Print error message with red color."""
    colored_print(f"❌ {message}", Colors.RED)


def print_header(message: str):
    """Print header with bold cyan color."""
    print()
    colored_print(f"🚀 {message}", Colors.CYAN, bold=True)
    colored_print("=" * (len(message) + 3), Colors.CYAN)


def load_environment() -> Config:
    """Load and validate environment configuration."""
    print_header("Loading Configuration")
    
    # Try to load .env file
    env_file = Path(".env")
    if env_file.exists():
        if HAS_DOTENV:
            load_dotenv()
            print_success("Loaded .env file using python-dotenv")
        else:
            # Manual .env loading
            print_info("Loading .env file manually (python-dotenv not available)")
            with open(env_file) as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#') and '=' in line:
                        key, value = line.split('=', 1)
                        os.environ[key.strip()] = value.strip()
            print_success("Loaded .env file manually")
    else:
        print_warning("No .env file found, using environment variables")
    
    # Load configuration with defaults
    config = Config(
        backend_url=os.getenv("ENEO_BACKEND_URL", "http://localhost:8123"),
        api_key=os.getenv("INTRIC_SUPER_API_KEY", ""),
        api_key_header=os.getenv("ENEO_API_KEY_HEADER_NAME", "X-API-Key"),
        tenant_count=int(os.getenv("DEMO_TENANT_COUNT", "20")),
        quota_limit=int(os.getenv("DEMO_QUOTA_LIMIT", "1073741824")),
        completion_model=os.getenv("DEMO_COMPLETION_MODEL", "gpt-4o-mini"),
        embedding_model=os.getenv("DEMO_EMBEDDING_MODEL", "text-embedding-ada-002"),
        transcription_model=os.getenv("DEMO_TRANSCRIPTION_MODEL", "whisper-1")
    )
    
    # Validate required configuration
    if not config.api_key:
        print_error("INTRIC_SUPER_API_KEY environment variable is required")
        print_info("Please set it in your .env file or environment")
        sys.exit(1)
    
    # Display configuration
    print_info(f"Backend URL: {config.backend_url}")
    print_info(f"API Key Header: {config.api_key_header}")
    print_info(f"Tenants to create: {config.tenant_count}")
    print_info(f"Quota per tenant: {config.quota_limit:,} bytes")
    print_info(f"Models: {config.completion_model}, {config.embedding_model}, {config.transcription_model}")
    
    return config


def make_api_request(config: Config, method: str, endpoint: str, data: Optional[Dict] = None) -> Tuple[int, Dict]:
    """Make an API request to the Eneo backend."""
    url = f"{config.backend_url.rstrip('/')}/{endpoint.lstrip('/')}"
    headers = {
        config.api_key_header: config.api_key,
        "Content-Type": "application/json"
    }
    
    if HAS_REQUESTS:
        # Use requests library if available
        try:
            if method.upper() == "GET":
                response = requests.get(url, headers=headers, timeout=30)
            elif method.upper() == "POST":
                response = requests.post(url, headers=headers, json=data, timeout=30)
            else:
                raise ValueError(f"Unsupported method: {method}")
            
            try:
                response_data = response.json()
            except json.JSONDecodeError:
                response_data = {"error": "Invalid JSON response", "text": response.text}
            
            return response.status_code, response_data
            
        except requests.exceptions.RequestException as e:
            print_error(f"Request failed: {e}")
            return 0, {"error": str(e)}
    
    else:
        # Fallback to urllib
        try:
            req_data = None
            if data:
                req_data = json.dumps(data).encode('utf-8')
            
            request = urllib.request.Request(url, data=req_data, headers=headers, method=method.upper())
            
            with urllib.request.urlopen(request, timeout=30) as response:
                response_text = response.read().decode('utf-8')
                try:
                    response_data = json.loads(response_text)
                except json.JSONDecodeError:
                    response_data = {"error": "Invalid JSON response", "text": response_text}
                
                return response.status, response_data
                
        except urllib.error.HTTPError as e:
            try:
                error_text = e.read().decode('utf-8')
                error_data = json.loads(error_text)
            except:
                error_data = {"error": f"HTTP {e.code}", "text": error_text if 'error_text' in locals() else str(e)}
            
            return e.code, error_data
            
        except Exception as e:
            print_error(f"Request failed: {e}")
            return 0, {"error": str(e)}


def test_backend_connection(config: Config) -> bool:
    """Test connection to the Eneo backend."""
    print_header("Testing Backend Connection")
    
    print_info("Checking backend connectivity...")
    status_code, response = make_api_request(config, "GET", "api/v1/sysadmin/tenants/")
    
    if status_code in [200, 201]:
        print_success("Backend connection successful")
        tenants = response.get("items", response.get("data", []))
        print_info(f"Found {len(tenants)} existing tenants")
        return True
    else:
        print_error("Cannot connect to backend")
        print_error(f"Status: {status_code}")
        print_error(f"Response: {response}")
        print_info("Please verify:")
        print_info("  1. Backend is running")
        print_info(f"  2. URL is correct: {config.backend_url}")
        print_info("  3. API key is valid")
        return False


def create_tenants(config: Config) -> List[Dict]:
    """Create demo tenant pool."""
    print_header("Creating Demo Tenant Pool")
    
    created_tenants = []
    
    for i in range(1, config.tenant_count + 1):
        tenant_name = f"demo-pool-{i:02d}"
        display_name = f"Demo Pool {i:02d}"
        
        print_info(f"Creating {tenant_name}...")
        
        tenant_data = {
            "name": tenant_name,
            "display_name": display_name,
            "quota_limit": config.quota_limit,
            "state": "active"
        }
        
        status_code, response = make_api_request(config, "POST", "api/v1/sysadmin/tenants/", tenant_data)
        
        if status_code in [200, 201]:
            print_success(f"Created {tenant_name}")
            tenant_id = response.get("id")
            if tenant_id:
                print_info(f"   Tenant ID: {tenant_id}")
                created_tenants.append({"id": tenant_id, "name": tenant_name})
            else:
                print_warning(f"   Could not extract tenant ID from response")
        else:
            print_error(f"Failed to create {tenant_name} (Status: {status_code})")
            print_error(f"   Response: {response}")
        
        # Rate limiting
        time.sleep(0.5)
    
    print()
    print_success(f"Successfully created {len(created_tenants)} tenants")
    if len(created_tenants) < config.tenant_count:
        print_warning(f"Failed to create {config.tenant_count - len(created_tenants)} tenants")
    
    return created_tenants


def get_model_id(config: Config, model_type: str, model_name: str) -> Optional[str]:
    """Get model ID by name and type."""
    print_info(f"Looking up {model_type} model: {model_name}")
    
    status_code, response = make_api_request(config, "GET", f"api/v1/sysadmin/{model_type}-models/")
    
    if status_code not in [200, 201]:
        print_error(f"Failed to fetch {model_type} models")
        return None
    
    models = response.get("items", response.get("data", []))
    
    for model in models:
        if model.get("name") == model_name:
            model_id = model.get("id")
            print_success(f"Found {model_name} ID: {model_id}")
            return model_id
    
    print_error(f"Model '{model_name}' not found in {model_type} models")
    print_info("Available models:")
    for model in models:
        print_info(f"   - {model.get('name', 'Unknown')}")
    
    return None


def configure_models(config: Config, tenants: List[Dict]) -> bool:
    """Configure AI models for all demo tenants."""
    print_header("Configuring AI Models")
    
    # Get model IDs
    print_info("Retrieving model IDs...")
    
    completion_model_id = get_model_id(config, "completion", config.completion_model)
    embedding_model_id = get_model_id(config, "embedding", config.embedding_model)
    transcription_model_id = get_model_id(config, "transcription", config.transcription_model)
    
    if not completion_model_id or not embedding_model_id:
        print_error("Required models not found. Cannot continue.")
        return False
    
    if not transcription_model_id:
        print_warning(f"Transcription model '{config.transcription_model}' not found, skipping")
    
    # Configure models for each tenant
    print_info("Configuring models for demo tenants...")
    print()
    
    success_count = 0
    
    for tenant in tenants:
        tenant_id = tenant["id"]
        tenant_name = tenant["name"]
        
        print_info(f"Configuring models for {tenant_name} ({tenant_id})")
        
        tenant_success = 0
        tenant_total = 0
        
        # Enable completion model
        tenant_total += 1
        endpoint = f"api/v1/sysadmin/tenants/{tenant_id}/completion-models/{completion_model_id}/"
        status_code, response = make_api_request(config, "POST", endpoint, {"is_org_enabled": True})
        
        if status_code in [200, 201]:
            print_success(f"   Enabled {config.completion_model}")
            tenant_success += 1
        else:
            print_error(f"   Failed to enable {config.completion_model}")
        
        # Enable embedding model
        tenant_total += 1
        endpoint = f"api/v1/sysadmin/tenants/{tenant_id}/embedding-models/{embedding_model_id}/"
        status_code, response = make_api_request(config, "POST", endpoint, {"is_org_enabled": True})
        
        if status_code in [200, 201]:
            print_success(f"   Enabled {config.embedding_model}")
            tenant_success += 1
        else:
            print_error(f"   Failed to enable {config.embedding_model}")
        
        # Enable transcription model if available
        if transcription_model_id:
            tenant_total += 1
            endpoint = f"api/v1/sysadmin/tenants/{tenant_id}/transcription-models/{transcription_model_id}/"
            payload = {"is_org_enabled": True, "is_org_default": True}
            status_code, response = make_api_request(config, "POST", endpoint, payload)
            
            if status_code in [200, 201]:
                print_success(f"   Enabled {config.transcription_model}")
                tenant_success += 1
            else:
                print_error(f"   Failed to enable {config.transcription_model}")
        
        if tenant_success == tenant_total:
            print_success(f"All models configured for {tenant_name}")
            success_count += 1
        else:
            print_warning(f"Partial configuration for {tenant_name} ({tenant_success}/{tenant_total} models)")
        
        print()
        time.sleep(0.5)  # Rate limiting
    
    print_success(f"Successfully configured {success_count} tenants")
    return success_count > 0


def main():
    """Main execution function."""
    print_header("Eneo Demo Setup Script")
    
    # Check dependencies
    if not HAS_DOTENV:
        print_warning("python-dotenv not installed. Manual .env parsing will be used.")
        print_info("Install with: pip install python-dotenv")
    
    if not HAS_REQUESTS:
        print_warning("requests library not installed. Using urllib fallback.")
        print_info("Install with: pip install requests")
    
    try:
        # Load configuration
        config = load_environment()
        
        # Test backend connection
        if not test_backend_connection(config):
            sys.exit(1)
        
        # Create tenants
        tenants = create_tenants(config)
        if not tenants:
            print_error("No tenants were created. Exiting.")
            sys.exit(1)
        
        # Configure models
        if not configure_models(config, tenants):
            print_error("Model configuration failed.")
            sys.exit(1)
        
        # Success summary
        print_header("Setup Complete!")
        print_success(f"Successfully created {len(tenants)} demo tenants")
        print_success("All tenants configured with AI models")
        print()
        print_info("Configured Models:")
        print_info(f"   ✅ {config.completion_model} (completion model)")
        print_info(f"   ✅ {config.embedding_model} (embedding model)")
        if config.transcription_model:
            print_info(f"   ✅ {config.transcription_model} (transcription model)")
        print()
        print_success("🚀 Demo tenants are ready for signup!")
        print()
        print_info("💡 Next: Test the signup flow at your frontend application")
        
    except KeyboardInterrupt:
        print()
        print_warning("Setup interrupted by user")
        sys.exit(1)
    except Exception as e:
        print_error(f"Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()