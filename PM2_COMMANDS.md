# PM2 Commands Quick Reference

## Basic Commands

```bash
# Start application using ecosystem config
pm2 start ecosystem.config.mjs --env production

# View all running processes
pm2 status

# View real-time logs
pm2 logs guardportal

# View real-time monitoring
pm2 monit

# Restart application
pm2 restart guardportal

# Stop application
pm2 stop guardportal

# Delete application from PM2
pm2 delete guardportal
```

## Cluster Mode (Multiple Instances)

```bash
# Start multiple instances (edit ecosystem.config.mjs to set instances: 'max')
pm2 start ecosystem.config.mjs --env production

# Scale to specific number of instances
pm2 scale guardportal 4

# Reload all instances with zero downtime
pm2 reload guardportal
```

## Advanced Commands

```bash
# Show detailed process information
pm2 show guardportal

# Reset restart count and memory usage
pm2 reset guardportal

# Flush all logs
pm2 flush

# Save current PM2 configuration
pm2 save

# Resurrect saved configuration
pm2 resurrect

# Setup auto-start on boot
pm2 startup

# Disable auto-start
pm2 unstartup
```

## Log Management

```bash
# View last 200 lines of logs
pm2 logs guardportal --lines 200

# View only error logs
pm2 logs guardportal --err

# View only output logs
pm2 logs guardportal --out

# Rotate logs
pm2 install pm2-logrotate
```

## Environment Management

```bash
# Start with development environment
pm2 start ecosystem.config.mjs

# Start with production environment
pm2 start ecosystem.config.mjs --env production

# Update environment variables
pm2 restart guardportal --update-env
```