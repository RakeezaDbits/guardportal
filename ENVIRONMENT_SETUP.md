# Environment Setup Guide

یہ Asset & Title Protection Portal کے لیے environment variables کا مکمل گائیڈ ہے۔

## Required Environment Variables

### 1. Database Configuration (ضروری)
```
DATABASE_URL=postgresql://username:password@hostname:5432/database_name
```
- Replit میں database provision کرنے کے بعد یہ automatically set ہو جاتا ہے

### 2. Authentication & Sessions (ضروری)
```
JWT_SECRET=your-super-secret-jwt-key-here-min-32-chars
SESSION_SECRET=your-session-secret-key-here-min-32-chars
```
- یہ random strings ہونے چاہیئے، کم از کم 32 characters

### 3. Replit Auth Configuration (Replit deployment کے لیے ضروری)
```
REPLIT_DOMAINS=your-repl-domain.replit.app
REPL_ID=your-repl-id-here
ISSUER_URL=https://replit.com/oidc
```

## Optional Integrations

### 4. Square Payment Integration
Development (Sandbox) کے لیے:
```
SQUARE_SANDBOX_ACCESS_TOKEN=your-square-sandbox-access-token
SQUARE_SANDBOX_LOCATION_ID=your-square-sandbox-location-id
VITE_SQUARE_APPLICATION_ID=your-square-application-id
VITE_SQUARE_LOCATION_ID=your-square-location-id
VITE_SQUARE_ENVIRONMENT=sandbox
```

Production کے لیے:
```
SQUARE_ACCESS_TOKEN=your-square-production-access-token
SQUARE_LOCATION_ID=your-square-production-location-id
SQUARE_ENVIRONMENT=production
```

### 5. DocuSign Integration
```
DOCUSIGN_ACCOUNT_ID=your-docusign-account-id
DOCUSIGN_INTEGRATION_KEY=your-docusign-integration-key
DOCUSIGN_USER_ID=your-docusign-user-id
DOCUSIGN_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nyour-private-key-here\n-----END RSA PRIVATE KEY-----"
```

### 6. Email Service (Gmail/SMTP)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@yourdomain.com
```

## Setup Instructions

1. `.env.example` کو copy کر کے `.env` نام سے save کریں
2. اپنی actual values کے ساتھ placeholder values کو replace کریں
3. Gmail کے لیے App Password بنائیں (2FA enable کرنا ہوگا)
4. Square Developer Dashboard سے API keys حاصل کریں
5. DocuSign Developer Account بنا کر integration keys حاصل کریں

## Security Notes

- کبھی بھی `.env` فائل کو repository میں commit نہ کریں
- Production میں strong, unique secrets استعمال کریں
- Third-party APIs کے لیے sandbox mode استعمال کریں development میں

## Testing Without External Services

Application بغیر Square/DocuSign/Email کے بھی چل سکتی ہے:
- Payments: Mock mode میں چلے گی
- DocuSign: Disabled رہے گی
- Emails: Console میں log ہوں گے

صرف DATABASE_URL, JWT_SECRET, اور SESSION_SECRET required ہیں basic functionality کے لیے۔