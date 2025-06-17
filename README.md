# Kommuna

A Next.js application that serves as the frontend for the Eneo AI platform, enabling Swedish municipalities to register for AI services and access a national library of AI tools.

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

Kommuna (formerly AI-verkstaden) provides a registration portal for Swedish municipalities and government agencies to access AI services through the Eneo platform. The application validates government email addresses and provides automated tenant provisioning.

## Features

- **Municipality Email Validation**: Validates 296 Swedish municipality domains and 84+ government agency domains
- **Automated Tenant Provisioning**: Integrates with Eneo backend API for tenant management
- **Nordic Design System**: Custom design system with Nordic color palette
- **Secure Registration Flow**: Email validation, tenant allocation, and credential management
- **Responsive Design**: Built with Tailwind CSS and shadcn/ui components

## Technology Stack

- Next.js 15.2.4 with App Router
- React 19 with TypeScript
- Tailwind CSS with custom Nordic design system
- shadcn/ui components with Radix UI primitives
- Resend for email functionality
- Jest with Testing Library for testing

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test
```
