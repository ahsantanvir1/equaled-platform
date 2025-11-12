# EqualEd - Tutoring Platform

A comprehensive tutoring platform focused on educational equity, connecting Pennsylvania students with vetted tutors and offering free tutoring sessions for under-privileged learners through community donations.

## 🎯 Mission

EqualEd is a hybrid tutoring platform with four core goals:
1. **Mission-driven impact** – Ensure no student misses out on tutoring because of cost
2. **Affordable sustainability** – Generate revenue through low-cost packages to support operations
3. **Accessible, inclusive design** – WCAG 2.1 compliant interfaces for all users
4. **Transparency** – Clear pricing and impact reporting for donors and parents

## 🚀 Features

### For Students & Parents
- **Tutor Marketplace**: Search, compare, and book tutors by subject, grade level, and availability
- **Flexible Scheduling**: Calendar integration, automatic reminders, timezone handling
- **Affordable Packages**: Starter ($40/mo), Support ($75/mo), Growth ($150/mo)
- **Free Tutoring**: Available for eligible under-privileged students

### For Tutors
- **Profile Management**: Showcase qualifications, set availability, manage bookings
- **Flexible Earnings**: Set your own rates, track earnings
- **Quality Support**: Training resources and community of educators

### For Donors
- **Easy Donations**: One-time, recurring, or sponsor-a-student options
- **Impact Transparency**: See exactly where your money goes
- **Donor Recognition**: Optional donor wall listing

### For Administrators
- **User Management**: Manage tutors, students, parents, and donors
- **Financial Reporting**: Track donations, sessions, and revenue
- **Tutor Verification**: Background check integration and approval workflow

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (JWT + OAuth)
- **API**: RESTful API routes

### Integrations
- **Payments**: Stripe (subscriptions & donations)
- **Email**: SendGrid
- **SMS**: Twilio (reminders)
- **Scheduling**: Custom + Calendar integrations

### Accessibility
- **Standards**: WCAG 2.1 Level AA compliant
- **Testing**: ESLint jsx-a11y plugin, axe-core
- **Features**: Keyboard navigation, screen reader support, high contrast mode

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Stripe account (for payments)
- SendGrid account (for emails)
- Twilio account (optional, for SMS)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd EqualEd
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/equaled"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
SENDGRID_API_KEY="SG..."
# ... other variables
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Run unit tests
```bash
npm test
```

### Run tests with coverage
```bash
npm run test:coverage
```

### Run E2E tests
```bash
npm run test:e2e
```

### Type checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
EqualEd/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── tutors/            # Tutor marketplace
│   │   ├── packages/          # Subscription packages
│   │   ├── donate/            # Donation page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── home/              # Home page components
│   │   ├── layout/            # Layout components
│   │   └── providers/         # Context providers
│   ├── lib/                   # Utility functions
│   │   ├── auth.ts            # Authentication config
│   │   ├── prisma.ts          # Prisma client
│   │   ├── utils.ts           # Helper functions
│   │   └── constants.ts       # App constants
│   └── types/                 # TypeScript types
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0284c7) - Primary actions, links
- **Success**: Green (#22c55e) - Success states
- **Warning**: Yellow (#f59e0b) - Warnings
- **Error**: Red (#ef4444) - Errors

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 700 weight
- **Body**: Regular, 400 weight

### Accessibility Features
- Focus indicators on all interactive elements
- Sufficient color contrast (WCAG AA)
- Screen reader labels
- Keyboard navigation support
- Skip to main content link
- Reduced motion support

## 🔒 Security

- HTTPS required in production
- Secure headers (CSP, HSTS, X-Frame-Options)
- Input sanitization
- SQL injection prevention (Prisma ORM)
- XSS protection
- CSRF tokens
- Rate limiting on API routes
- PCI DSS compliant payment processing (via Stripe)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t equaled .
docker run -p 3000:3000 equaled
```

### Environment Variables
Ensure all production environment variables are set:
- Database connection
- Authentication secrets
- API keys (Stripe, SendGrid, Twilio)
- OAuth credentials

## 📊 Monitoring & Analytics

- **Error Tracking**: Sentry (recommended)
- **Analytics**: Google Analytics / Matomo
- **Performance**: Vercel Analytics / Lighthouse
- **Uptime**: UptimeRobot / Pingdom

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Write accessible HTML (WCAG 2.1)
- Add tests for new features
- Update documentation

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

- **Email**: support@equaled.org
- **Phone**: (555) 123-4567
- **Documentation**: [docs.equaled.org](https://docs.equaled.org)

## 🙏 Acknowledgments

- Built with love by the EqualEd team
- Inspired by the need for educational equity in Pennsylvania
- Special thanks to all our donors and community supporters

---

**EqualEd** - Making quality education accessible to everyone 🎓

