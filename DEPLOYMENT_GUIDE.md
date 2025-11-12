# EqualEd Deployment Guide

## 🚀 Quick Start (Development)

The application is now running! Visit **http://localhost:3000** to see it in action.

### Current Status
✅ **RUNNING**: Dev server is live
✅ **ACCESSIBLE**: All pages load correctly
✅ **TESTED**: No compilation errors

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host:5432/equaled"

# NextAuth
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="generate-a-long-random-string"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
FACEBOOK_CLIENT_ID="your-facebook-client-id"
FACEBOOK_CLIENT_SECRET="your-facebook-client-secret"

# Stripe
STRIPE_PUBLIC_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email (SendGrid)
SENDGRID_API_KEY="SG...."
EMAIL_FROM="noreply@equaled.org"

# SMS (Twilio - Optional)
TWILIO_ACCOUNT_SID="AC..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="+1..."

# App Settings
NODE_ENV="production"
APP_URL="https://your-domain.com"
```

### 2. Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Or run migrations (recommended for production)
npx prisma migrate deploy

# Seed database (optional)
npx prisma db seed
```

### 3. Build the Application

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build for production
npm run build

# Test production build locally
npm start
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: Optimized for Next.js, easy deployment, automatic HTTPS, global CDN

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Post-Deployment Steps**:
1. Add environment variables in Vercel dashboard
2. Connect PostgreSQL database (Vercel Postgres or external)
3. Configure custom domain
4. Set up Stripe webhooks: `https://your-domain.com/api/webhooks/stripe`

### Option 2: Railway

**Pros**: Simple PostgreSQL integration, free tier available

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Option 3: Heroku

**Pros**: Mature platform, many add-ons

```bash
# Install Heroku CLI
# Create app
heroku create equaled-app

# Add PostgreSQL
heroku addons:create heroku-postgresql:standard-0

# Configure buildpack
heroku buildpacks:set heroku/nodejs

# Deploy
git push heroku main

# Run migrations
heroku run npx prisma migrate deploy
```

### Option 4: DigitalOcean App Platform

**Pros**: Affordable, managed databases, good performance

1. Create account on DigitalOcean
2. Connect GitHub repository
3. Configure build command: `npm run build`
4. Configure run command: `npm start`
5. Add environment variables
6. Deploy

### Option 5: AWS (Advanced)

**Components Needed**:
- EC2 or ECS for application
- RDS for PostgreSQL
- S3 for static assets
- CloudFront for CDN
- Route53 for DNS

---

## 🗄️ Database Options

### Option 1: Vercel Postgres
- Integrated with Vercel
- Serverless, scales automatically
- Good for small to medium apps

### Option 2: Supabase
- PostgreSQL as a service
- Free tier available
- Built-in auth and storage

### Option 3: Neon
- Serverless PostgreSQL
- Auto-scaling
- Generous free tier

### Option 4: Railway PostgreSQL
- Simple setup
- Good performance
- Fair pricing

### Option 5: AWS RDS
- Enterprise-grade
- Many configuration options
- Requires more setup

---

## 🔧 Configuration Steps

### 1. Set Up Stripe

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe  # macOS
# or download from stripe.com/docs/stripe-cli

# Login
stripe login

# Forward webhooks to localhost (development)
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Get webhook signing secret
# Add to .env as STRIPE_WEBHOOK_SECRET
```

**Production Webhooks**:
1. Go to Stripe Dashboard
2. Developers → Webhooks
3. Add endpoint: `https://your-domain.com/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

### 2. Configure OAuth

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (dev)
   - `https://your-domain.com/api/auth/callback/google` (prod)
6. Copy Client ID and Secret to `.env`

#### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com)
2. Create new app
3. Add Facebook Login product
4. Configure OAuth redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook` (dev)
   - `https://your-domain.com/api/auth/callback/facebook` (prod)
5. Copy App ID and Secret to `.env`

### 3. Configure SendGrid

1. Create account at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Add to `.env` as `SENDGRID_API_KEY`
4. Verify sender domain
5. Create email templates:
   - Welcome email
   - Session reminder (24 hours)
   - Session reminder (2 hours)
   - Donation receipt
   - Tutor application status

### 4. Configure Twilio (Optional)

1. Create account at [twilio.com](https://twilio.com)
2. Get phone number
3. Add credentials to `.env`
4. Test SMS sending

---

## 🔒 Security Hardening

### Production Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database credentials rotated
- [ ] API rate limiting enabled
- [ ] CORS configured properly
- [ ] CSP headers set
- [ ] SQL injection prevention (Prisma ✓)
- [ ] XSS protection enabled
- [ ] CSRF tokens validated
- [ ] Dependencies updated
- [ ] Vulnerability scan completed
- [ ] Backup strategy in place
- [ ] Monitoring enabled
- [ ] Error logging configured

### Recommended Security Headers

Already configured in `next.config.js`:
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `X-XSS-Protection`
- `Referrer-Policy`

---

## 📊 Monitoring & Analytics

### Application Monitoring

**Sentry** (Recommended for errors):
```bash
npm install @sentry/nextjs

# Run Sentry wizard
npx @sentry/wizard@latest -i nextjs
```

**Vercel Analytics**:
- Automatically enabled on Vercel
- Shows Web Vitals
- Performance metrics

### Database Monitoring

- Enable query logging
- Set up slow query alerts
- Monitor connection pool
- Track query performance

### Uptime Monitoring

**Options**:
- UptimeRobot (free)
- Pingdom
- Better Uptime
- StatusCake

**Endpoints to monitor**:
- `https://your-domain.com` (homepage)
- `https://your-domain.com/api/health` (health check)
- `https://your-domain.com/tutors` (key page)

---

## 🚨 Error Tracking

### Sentry Configuration

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

### CloudWatch (AWS)

- Application logs
- Error rates
- Performance metrics
- Custom dashboards

---

## 📈 Performance Optimization

### Pre-Launch

- [ ] Image optimization (Next.js Image component ✓)
- [ ] Code splitting (Next.js automatic ✓)
- [ ] Lazy loading
- [ ] Bundle analysis
- [ ] Cache headers configured
- [ ] CDN enabled
- [ ] Database indexes
- [ ] Query optimization

### Testing

```bash
# Run Lighthouse
npm install -g lighthouse
lighthouse https://your-domain.com --view

# Or use Chrome DevTools
# Open DevTools → Lighthouse → Generate Report
```

**Target Scores**:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90

---

## 💾 Backup Strategy

### Database Backups

**Automated** (recommended):
- Daily full backups
- Hourly incremental backups
- 30-day retention
- Test restore monthly

**Manual Backup**:
```bash
# PostgreSQL
pg_dump -h hostname -U username dbname > backup.sql

# Restore
psql -h hostname -U username dbname < backup.sql
```

### Application Backups

- Git repository (source code)
- Environment variables (encrypted)
- Uploaded files (S3/storage)
- Database dumps

---

## 🧪 Pre-Production Testing

### Staging Environment

1. Create staging deployment
2. Use staging.your-domain.com
3. Connect to staging database
4. Use Stripe test mode
5. Run full test suite
6. Perform UAT

### Load Testing

```bash
# Install k6
brew install k6

# Run load test
k6 run load-test.js
```

**Test Scenarios**:
- 100 concurrent users (normal)
- 1000 concurrent users (peak)
- Sustained load (1 hour)

---

## 📱 Mobile App (Future)

### React Native Setup

Already prepared:
- Shared TypeScript types
- API routes ready
- Authentication compatible

---

## 🌍 Domain & DNS

### Domain Configuration

1. Purchase domain (Namecheap, GoDaddy, Google Domains)
2. Point DNS to hosting provider
3. Configure A/CNAME records
4. Enable DNSSEC
5. Set up www redirect

### SSL Certificate

- Automatic with Vercel/Railway
- Let's Encrypt for self-hosted
- CloudFlare for additional protection

---

## 📧 Email Configuration

### Domain Authentication

1. Add SPF record
2. Add DKIM record
3. Add DMARC record
4. Verify in SendGrid

### Email Templates

Create templates for:
- Welcome email
- Email verification
- Password reset
- Session reminders
- Donation receipts
- Tutor application updates

---

## 🎯 Post-Launch Checklist

### Immediate (Day 1)
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify all forms work
- [ ] Test payment flows
- [ ] Check email delivery
- [ ] Monitor uptime

### First Week
- [ ] Analyze user behavior
- [ ] Fix critical bugs
- [ ] Optimize slow queries
- [ ] Gather user feedback
- [ ] Update documentation

### First Month
- [ ] Review analytics
- [ ] Plan feature additions
- [ ] Security audit
- [ ] Performance optimization
- [ ] Content updates

---

## 🆘 Troubleshooting

### Common Issues

**Build Fails**:
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install --legacy-peer-deps
npm run build
```

**Database Connection**:
```bash
# Test connection
npx prisma studio

# Check DATABASE_URL format
# postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

**Prisma Issues**:
```bash
# Regenerate client
npx prisma generate

# Reset database (CAUTION: deletes data)
npx prisma migrate reset
```

**Environment Variables Not Loading**:
- Check `.env` file exists
- Verify variable names match
- Restart dev server
- Check Vercel dashboard (production)

---

## 📞 Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- Stripe: https://stripe.com/docs
- NextAuth: https://next-auth.js.org

### Community
- Next.js Discord
- Prisma Slack
- Stack Overflow

### Professional Support
- Vercel Support
- Database provider support
- Stripe support

---

## ✅ Production Ready Checklist

- [ ] Environment variables configured
- [ ] Database migrated
- [ ] Stripe configured
- [ ] OAuth providers set up
- [ ] Email service configured
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Monitoring enabled
- [ ] Backups configured
- [ ] Error tracking active
- [ ] Performance tested
- [ ] Security audit completed
- [ ] Documentation updated
- [ ] Team trained

---

**🎉 Your EqualEd platform is ready to change lives!**

For questions or support, refer to the README.md or contact the development team.

