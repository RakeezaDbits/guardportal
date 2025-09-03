# Linux Server Deployment Guide

## Prerequisites

1. **Database Setup**: You need a PostgreSQL database running on your Linux server
2. **Environment Variables**: Configure the `.env` file with your production values
3. **PM2**: Process manager for Node.js applications

## Step 1: Database Setup

Create a PostgreSQL database on your Linux server:

```bash
# Connect to PostgreSQL
sudo -u postgres psql

# Create database and user
CREATE DATABASE guardportal;
CREATE USER admin WITH PASSWORD 'guardportal123';
GRANT ALL PRIVILEGES ON DATABASE guardportal TO admin;
\q
```

## Step 2: Environment Configuration

1. Copy `.env.example` to `.env`
2. Update the `.env` file with your server-specific values:
   ```
   DATABASE_URL=postgresql://admin:guardportal123@localhost:5432/guardportal
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   SQUARE_ACCESS_TOKEN=your_square_token
   DOCUSIGN_ACCOUNT_ID=your_docusign_account_id
   # ... other variables
   ```

## Step 3: Production Build and Deploy

```bash
# Install dependencies
npm install

# Run database migrations
npm run db:push

# Build the application for production
npm run build

# Create logs directory for PM2
mkdir -p logs
```

## Step 4: PM2 Process Manager with ecosystem.config.mjs

The project includes a comprehensive PM2 configuration file `ecosystem.config.mjs` for easy deployment.

### Install PM2 globally:
```bash
npm install -g pm2
```

### Deploy using PM2 configuration:

#### For Development:
```bash
pm2 start ecosystem.config.mjs
```

#### For Production:
```bash
pm2 start ecosystem.config.mjs --env production
```

### PM2 Management Commands:

```bash
# View application status
pm2 status

# View logs
pm2 logs guardportal

# Monitor resources
pm2 monit

# Restart application
pm2 restart guardportal

# Stop application
pm2 stop guardportal

# Delete application from PM2
pm2 delete guardportal

# Save current PM2 processes
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Step 5: Auto-Start on Server Boot

```bash
# Generate startup script
pm2 startup

# Save current PM2 configuration
pm2 save
```

## ecosystem.config.mjs Features

The configuration includes:
- **Environment Management**: Separate development and production environments
- **Process Monitoring**: Auto-restart on crashes
- **Memory Management**: Restart if memory usage exceeds 1GB
- **Log Management**: Separate error, output, and combined logs
- **File Watching**: Automatically restart on file changes (development)
- **Clustering**: Easily scalable to multiple instances

## Common Issues

1. **Database Connection Error**: Ensure your DATABASE_URL is correct and the database is accessible
2. **Port Issues**: Make sure port 5000 is open in your firewall
3. **Authentication Issues**: Verify your Replit Auth credentials are correct for production

## Security Notes

- Never commit your `.env` file to version control
- Use strong passwords for your database
- Keep your dependencies updated
- Configure SSL certificates for HTTPS in production