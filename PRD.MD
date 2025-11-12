Product Requirements Document (PRD) – EqualEd
Tutoring Platform
Date: 4 November 2025 (America/Chicago)
Prepared by: Product Team
1 Overview
EqualEd is a hybrid tutoring platform focused on educational equity. The service connects Pennsylvania
students with vetted tutors and offers free tutoring sessions for under‑privileged learners through
community donations. For families who do not qualify for free help but still need affordable support,
EqualEd sells low‑cost subscription packages. This PRD describes the product’s objectives, scope, features,
technical stack, and testing strategy. It targets mid‑career web developers familiar with industry‑standard
tools and expects delivery through a water‑fall project execution model where each phase feeds into the
next and regression tests are run before moving forward.
1.1 Goals
1.
2.
3.
4.
Mission‑driven impact – ensure no student misses out on tutoring because of cost.
Affordable sustainability – generate revenue through low‑cost packages to support operations and
scale free services.
Accessible, inclusive design – implement WCAG 2.1 compliant interfaces so all users can
participate. WCAG’s success criteria are testable and technology‑agnostic 1
, which helps us design
cross‑platform experiences for users with disabilities.
Transparency – provide donors and parents with clear pricing (e.g., $15 = one free tutoring session;
$50 covers a month; $150 covers a semester) and show where donations go.
1.2 Scope
•
•
•
•
Tutoring marketplace: search, compare and book tutors by subject, grade level and availability.
Scheduling & booking: integrate calendar tools; handle time‑zones, email/SMS reminders and
group‑size limits. Doodle’s 2025 analysis notes that effective booking systems integrate calendar
services (Google Calendar), Zoom, LMS integration, time‑zone handling, reminders, payment
gateways, attendance records, group‑size limits and an open API to save tutors and parents
2
significant administrative time .
Payment & donation: integrate payment gateways (Stripe, PayPal) for packages and donations.
Nonprofits receive discounted fees: Donorbox notes that Stripe charges ~2.2 % + $0.30 per donation
and PayPal charges ~1.99 % + $0.49 3
, and Givebutter offers 100 % free platforms with optional
4
donor‑covered tips .
Donor engagement: allow one‑time, recurring or “sponsor a student” donations; offer donor
recognition with anonymity options. Provide a donor wall.
1
•
•
Low‑cost plans: offer subscription packages (e.g., Starter, Support, Growth) for families not
qualifying for free tutoring.
Admin & reporting: provide dashboards for administrators to manage tutors, donations, sessions
and packages.
2 Target Users & Stakeholders
User Needs
Students Access vetted tutors, schedule sessions, track progress, join free
sessions (if qualified).
Parents/guardians Find affordable or free tutoring, understand package pricing,
manage bookings, make donations.
Tutors List services, manage availability, receive bookings & payments, track
earnings.
Donors (individuals, families,
businesses)
Donate easily (one‑time, monthly, or sponsor a student), see the
impact of their gifts, optionally receive recognition.
Administrators Verify tutors, manage content, process donations, monitor usage
and financial reports.
3 Competitive & Technical Landscape
3.1 Web Frameworks
A modern tutoring platform requires a responsive, component‑driven front end and a secure, scalable back
end. Research on web frameworks highlights several options:
•
•
•
•
React.js – An open‑source JavaScript library often considered a framework. Its declarative syntax and
component‑based architecture promote reusable UI elements and maintainability 5
. React uses a
virtual DOM for fast rendering and provides a rich ecosystem (Redux for state, React Router for
routing, Material‑UI) 6 7
. It also extends to mobile with React Native, maximizing code reuse .
Angular – A full‑fledged TypeScript‑based framework offering two‑way data binding, dependency
injection and robust routing 8 9
. It is powerful but adds complexity and a larger codebase .
Vue.js – A lightweight framework with MVVM architecture and reactive data binding; ideal for
10
dynamic SPAs .
Back‑end frameworks: Express.js provides a minimalist Node.js framework with a fast routing
mechanism and middleware support 11
. Django (Python) delivers a “batteries‑included” approach
with an ORM, URL routing and an admin interface, while emphasizing security against SQL injection
and cross‑site scripting 12
. Laravel (PHP) and Ruby on Rails offer MVC patterns and rapid
13
development .
Recommendation: Use React.js (or Next.js) for the front end due to its modularity, performance, and large
ecosystem. Pair it with Node.js + Express or Django on the back end. Node.js/Express is a good fit when
building microservices and integrating multiple payment providers, whereas Django offers integrated ORM
and admin panel. Use TypeScript to improve maintainability. Deploy on AWS, Google Cloud Platform
2
(GCP) or Azure using managed services (Elastic Beanstalk, Cloud Run, or App Service). PostgreSQL
(relational) or MongoDB (NoSQL) can serve as the database, depending on data model preferences.
3.2 Donation Platforms & Payment Processing
Recent comparisons of donation tools show the following options:
Tool/
Platform Key features & costs (2025) Evidence
Stripe +
PayPal
Both process payments for donations and packages. Donorbox notes
nonprofit fees around 2.2 % + $0.30 for Stripe and 1.99 % + $0.49 for
PayPal 14 3
. ACH transfers via Stripe cost 0.8 % (max $5) .
3
Givebutter
Free fundraising tool (donors can add tips). Supports event ticketing,
livestreams, team fundraising and campaign thermometers; modern UI
and fast setup 4
. Ideal for giving days, school drives and team events;
15
recognized for raising six‑figure campaigns .
16
Donorbox
Budget‑conscious platform with recurring donations, crowdfunding,
membership tiers and support for Apple Pay, Google Pay and PayPal .
17 17
Easy integration.
Calendly /
Doodle
Scheduling tools that integrate with calendar services, Zoom and payment
gateways. Doodle’s research indicates that effective booking systems
should include calendar integration, time‑zone handling, reminders (email
& optional SMS), payment gateways, attendance records and open APIs
2
. Calendly and Doodle also provide self‑service booking links and seat
caps 18
. Use these features or build similar functionality in‑house.
2 18
Recommendation: Integrate Stripe for payment and subscription processing (packages and one‑time
donations). For dedicated fundraising campaigns and donor management, embed Givebutter widgets or
API because it is free to use and includes event support 16
. Provide donors the option to cover processing
fees. Use Calendly or Doodle (via their API) to handle scheduling, or implement a custom scheduling
module replicating features such as calendar sync, reminders, seat caps, payment collection and
2
compliance with GDPR/CCPA .
3.3 Regulatory & Accessibility Requirements
•
•
•
WCAG 2.1 compliance: Guidelines emphasise accessible content for people with disabilities,
including text alternatives, captioning, keyboard navigation and more 1
. Success criteria are
19
testable and technology‑agnostic .
Legal frameworks: U.S. laws such as Section 504 of the Rehabilitation Act, the Americans with
Disabilities Act (ADA) and Section 508 require digital content to be accessible. UPCEA notes that more
than 20 % of undergraduate students report having at least one disability 20
, underscoring the
need for accessible course materials and websites.
Data privacy: Compliance with GDPR and CCPA for users’ personal data. Scheduling tools should
2
integrate data protection features .
3
•
Payment security: PCI DSS compliance, HTTPS and secure tokenization for payments.
4 User Flows & Functional Requirements
4.1 Sign‑Up and Authentication
•
•
•
•
•
User roles: Student, Parent/Guardian, Tutor, Donor, Administrator.
Requirement: Provide email/password and social log‑in (Google, Facebook, Apple).
Acceptance tests:
User registration: Input valid details → account created; invalid details → error message.
Role assignment: When a user selects “Tutor,” system prompts for tutor onboarding details (bio,
subjects, background check).
4.2 Tutor Discovery & Booking
•
•
•
•
•
•
•
•
Search & filter: Students or parents can filter tutors by subject (e.g., math, science), grade level,
language, price, location and availability. The search results show tutor profiles (photo, bio, ratings,
number of sessions).
Tutor profile: Contains biography, qualifications, schedule availability, hourly rate, location/online
status, ratings & reviews.
Booking & scheduling:
User selects a tutor and chooses a time slot from the tutor’s available calendar.
Integration with calendar services ensures real‑time availability; the system handles time‑zone
21
conversion and prevents double booking .
Option to schedule recurring sessions (weekly, monthly) and group sessions with seat caps (max 6 to
22
maintain quality ).
Automated email reminders (24‑hour before) and optional SMS reminders (2‑hour before) reduce
23
no‑shows .
Payment method is stored securely (card‑on‑file). OECD research notes that charging the parent’s
24
card immediately after the lesson protects cash flow .
Acceptance tests:
Test Scenario Expected result
Search filter User filters tutors by “Math” and “Grade 8” Only tutors matching
subject & grade appear.
Real‑time
availability
Two users try to book the same slot; second user
receives “Unavailable” message Prevent double booking.
Reminder
notification
24 hours before session, the system sends email;
2 hours before, sends SMS (if opted) Reminders sent.
Payment
capture
After session ends, card on file is charged; receipt
emailed
Payment processed and
receipts stored.
4
4.3 Subscription Packages
•
•
•
•
•
•
Plans:
Starter Plan – ~$40/month for 2 sessions.
Support Plan – ~$75/month for 4 sessions.
Growth Plan – ~$150/month for 8 sessions.
Purchase flow: Parent/guardian chooses a plan, enters payment details, confirms purchase and can
schedule sessions. Allow autopay each month; users can upgrade or cancel at any time.
Discounts: Provide scholarship codes or financial aid adjustments for low‑income families.
Acceptance tests:
- Plan selection displays correct number of sessions and price.
- Payment processed via Stripe; subscription created and linked to user.
- Session count decrements after each booking; if zero sessions remain, display prompt to purchase more
or wait until next month.
4.4 Donation Page & Sponsor Program
•
•
•
•
•
Donation amounts: Predefined amounts ($15, $50, $150) with ability to enter a custom amount.
Show an impact statement next to each amount (e.g., $15 = 1 free session).
Donation methods: One‑time, monthly recurring and “Sponsor a Student” (covers monthly or
semester sessions for one student).
Payment gateway: Use Stripe for secure processing; optional donor‑covered fees. Provide
integration with Givebutter for campaign pages/events; Givebutter is free and includes event
4
ticketing, livestreaming and team fundraising .
Donor recognition: Allow donors to choose anonymity or be listed on a donor wall. Display
community sponsors on a dedicated page.
Impact transparency: Show “Where the money goes” breakdown: free tutoring hours, support for
local schools/libraries, educational resources.
Acceptance tests:
- Donation form loads and displays pre‑set amounts and custom input.
- Selecting “Sponsor a Student” prompts for duration (month/semester) and assigns sponsorship code to a
student.
- Payment is processed and recorded; donor receives confirmation email and optional tax receipt.
- Donor wall updates with new donor (if not anonymous).
4.5 Tutor On‑boarding & Management
•
•
•
•
Application form: Tutors complete profile information (subjects, degrees), upload credentials, sign
background‑check consent and set hourly rates (for paid sessions).
Verification: Admin reviews documents; once approved, account status changes to “Active.”
Scheduling: Tutors integrate their calendar; set availability blocks; can create open or private
sessions; seat caps for group sessions.
Earnings dashboard: Tutors view completed sessions, upcoming bookings and payouts. Payments
from subscription packages and per‑session bookings are aggregated; commission percentage is
deducted for platform sustainability.
5
Acceptance tests:
- Tutor cannot accept bookings until admin approval.
- Calendar integration correctly blocks unavailable times.
- Earnings dashboard shows accurate total based on completed sessions.
4.6 Admin & Reporting
•
•
•
•
User management: CRUD operations for users, tutors and donors.
Content management: Manage tutor profiles, packages, donation campaigns, blog posts.
Reporting: View statistics on sessions delivered, number of free sessions sponsored by donations,
total donations, donor conversion rates, package subscriptions and tutor performance.
Financial reconciliation: Export donation and payment data for accounting; integrate with
QuickBooks or other accounting software.
5 Non‑Functional Requirements
1.
2.
3.
4.
5.
6.
7.
Accessibility: Conform to WCAG 2.1 Level AA; all images need alt text, forms must have labels,
keyboard navigation should be possible, colour contrast should meet minimum ratios. Provide
captions/transcripts for multimedia. Following WCAG 2.1 ensures content is testable and usable
1
across devices .
Usability: Keep sign‑up and booking flows under three steps; research shows parents abandon
complex sign‑ups 25
. Use clear CTAs (“Find a Tutor,” “Become a Tutor,” “Affordable Plans,” “Donate”).
Performance: Pages should load within 2 seconds on broadband and degrade gracefully on slower
connections. Use CDN (e.g., CloudFront) and caching.
Security: Use HTTPS, secure headers, input sanitization, and regularly run OWASP vulnerability
scans. Comply with PCI DSS for payment information. Employ multi‑factor authentication for
administrators.
Scalability: Use microservices or modular architecture; horizontally scale the application. Deploy on
cloud infrastructure with auto‑scaling. Use asynchronous job queues for sending emails/SMS and
processing reports.
Data privacy: Store user data in encrypted databases; comply with GDPR and CCPA; provide
transparent privacy policy and allow data deletion requests.
Reliability: Achieve 99.9 % uptime; implement health checks and monitoring; maintain backups and
disaster recovery plan.
6 Technical Architecture & Tooling
6.1 Recommended Stack
•
•
•
•
Front‑End: React.js with TypeScript and Next.js for server‑side rendering. Use Material‑UI or Tailwind
CSS for responsive design.
Back‑End: Choose Node.js + Express (RESTful API) or Python + Django. Node/Express offers flexibility
with microservices 11 12
, while Django provides built‑in admin and ORM .
Database: PostgreSQL for relational data (users, tutors, sessions, donations). Use Redis for caching
and queueing tasks.
Authentication: JSON Web Tokens (JWT) with refresh tokens; integrate OAuth for social log‑in.
6
•
•
•
•
•
•
Scheduling service: Integrate Calendly or Doodle via API to handle booking links, reminders and
seat caps 2 18
. Alternatively, build a custom scheduling module using open-source calendar
libraries (e.g., FullCalendar) and Cron jobs for reminders.
Payment & Donations: Use Stripe (Checkout & Billing) for packages, one‑time and recurring
donations, plus ACH payments; integrate Givebutter or Donorbox for fundraising campaigns (free
platform with optional donor tips 4
). Use webhooks to update payment status in the system.
Email & SMS: Use SendGrid or Amazon SES for email; Twilio for SMS reminders.
Hosting & CI/CD: Deploy on AWS (Elastic Beanstalk, ECS or Lambda) or GCP (Cloud Run). Use GitHub
Actions or GitLab CI for continuous integration, linting, testing and deployment. Use Terraform for
infrastructure as code.
Monitoring: Use AWS CloudWatch / GCP Operations (Stackdriver) or Datadog for logs and metrics;
set up alerts for errors and performance degradation.
Analytics: Integrate Google Analytics or Matomo; track user behaviour to optimize features and
conversion.
7 Project Execution Plan (Waterfall)
7.1 Phases
1.
Requirements (Week 1‑2) – Gather and finalize requirements; create wireframes; define data
2.
3.
4.
5.
6.
7.
models.
Design (Week 3‑4) – Design UI (high‑fidelity prototypes), decide on architecture, database schema
and API contracts.
Implementation (Week 5‑12) – Develop front‑end and back‑end modules; integrate payment and
scheduling services; implement database.
Integration & System Testing (Week 13‑15) – Assemble modules, run integration tests, fix bugs;
conduct accessibility testing, performance testing and security scans.
User Acceptance Testing (UAT) (Week 16) – Deploy to staging environment; selected stakeholders
test flows; collect feedback.
Deployment & Launch (Week 17) – Deploy to production; monitor metrics; finalize documentation.
Maintenance & Enhancements (ongoing) – Bug fixes, security updates, feature improvements; run
regression tests after each change.
7.2 Testing Strategy
General principles:
•
•
•
Phase‑gate testing: The next phase only starts after all tests in the current phase pass. Regression
tests run after each phase to ensure previous functionality remains intact.
Automated & manual tests: Use Jest/React Testing Library for front‑end, PyTest or Mocha for
back‑end; Selenium/Cypress for end‑to‑end tests; manual tests for usability and accessibility
(including screen readers, keyboard navigation).
Test environment: Use sandbox versions of Stripe and scheduling APIs; generate mock user data;
ensure no real payments are made.
7
7.2.1 Unit Tests
Module Key tests Tools
Authentication Validate JWT generation/expiration; password
hashing; role checks (student vs tutor vs admin)
Jest (Node) / PyTest
(Django)
Tutor search Query returns expected tutors based on filters
(subject, grade, availability); pagination and sorting Jest or PyTest
Scheduling service
wrapper
API endpoints return correct available slots; seat
caps enforced; booking creation; cancellation flows
Jest/PyTest with
mocked Calendly/
Doodle APIs
Payment gateway
Validate creation of payment intents; handle success,
failure and refund events; ensure donation amounts
correspond to selected options
Stripe’s official test
suite; use Stripe CLI for
webhooks
Package
management
Session count decrements properly; subscription
renewal triggers new allocation; upgrade/
downgrade flows
Jest/PyTest
Donation module Donation form validation; recurring donation logic;
sponsor assignment; donor anonymization Jest/PyTest
7.2.2 Integration Tests
•
•
•
•
•
User flows: Simulate full flows such as sign‑up → search → book tutor → checkout with
subscription; donation workflow (choose amount → pay → donor wall update). Use Cypress/
Selenium to run tests in a browser environment.
Third‑party services: Use sandbox credentials to test Stripe, scheduling APIs and email/SMS
integration. Validate that webhooks update local database.
Accessibility tests: Use axe-core and Lighthouse audits to verify compliance with WCAG 2.1;
manually test keyboard navigation and screen reader compatibility.
Performance & load tests: Use Locust or k6 to simulate concurrent users; ensure the platform
scales and responses remain < 500 ms on average.
Security tests: Run static analysis (e.g., SonarQube), dynamic application security testing (DAST),
and dependency vulnerability scans (e.g., Snyk). Test for SQL injection, XSS, CSRF and authentication
bypass.
7.2.3 Regression & Phase‑Gate Tests
•
•
Regression tests run after each phase to retest previously working modules. For example, after
implementing packages, rerun sign‑up, search and scheduling tests. Use a continuous integration
pipeline to execute the test suite automatically.
Phase‑gate review: At the end of each phase (Requirements, Design, Implementation, Integration),
hold a review meeting with stakeholders to ensure all tests pass and requirements are met. Only
then proceed to the next phase.
8
8 Success Metrics
•
•
•
•
•
•
Impact: Number of free sessions delivered; number of underprivileged students served; dollars
donated.
Adoption: Monthly active users (students, tutors, donors); number of sessions booked; package
subscriptions.
Conversion: Donation conversion rate (page visits → donations); booking conversion rate (profile
views → bookings).
Retention: Recurring donors and renewing package subscribers.
Accessibility: Score from automated accessibility tools and manual audits; number of reported
accessibility issues.
Performance: Average page load time; uptime percentage; error rate.
9 Risks & Mitigation
Risk Mitigation
Complexity of integrating
multiple external services
Use well‑documented APIs (Stripe, Calendly/Doodle, Givebutter).
Create abstraction layers to decouple the application from any single
service, easing future replacements.
Payment/donation
compliance
Employ Stripe’s PCI‑compliant hosted payment pages; keep sensitive
data out of our servers. Periodically review compliance requirements.
Data privacy regulations Implement consent management and data deletion flows; store
minimal personal data; encrypt data at rest and in transit.
Tutor quality & safety
Implement thorough screening and background checks; provide
rating and reporting mechanisms for students; quickly address
misconduct.
Accessibility
non‑conformance
Conduct regular audits using automated tools and manual testers;
allocate time in each phase to fix accessibility issues.
10 Future Enhancements (Post‑MVP)
•
•
•
•
•
Mobile apps (iOS/Android) using React Native or Flutter for better on‑the‑go experience.
Adaptive learning engine: recommend tutors based on learning styles and performance.
Gamification: provide badges and points for completing sessions or donating.
Integration with school systems: share tutoring reports with teachers (with parental consent).
Peer‑to‑peer fundraising campaigns: enable supporters to run their own mini‑fundraisers,
4
leveraging Givebutter’s team fundraising tools .
Conclusion: EqualEd aims to democratize learning by blending mission‑driven free tutoring with
affordable subscription plans and modern, accessible technology. By leveraging state‑of‑the‑art web
frameworks, secure payment and scheduling services, and rigorous testing practices, the platform can scale
sustainably while ensuring every student has the support they deserve.
9
1 19
Web Content Accessibility Guidelines (WCAG) 2.1
https://www.w3.org/TR/WCAG21/
2 18 21 22 23 24 25
Top scheduling tools for tutors in 2025 | Doodle
https://doodle.com/en/top-scheduling-tools-for-tutors-in-2025/
3 14
12 Best Online Fundraising Platforms for Nonprofits (2025) - Neon One
https://neonone.com/resources/blog/online-fundraising-platforms/
4 15 16 17
Best Online Donation Tools in 2025: The Ultimate Guide for Nonprofits | Donately
https://www.donately.com/blog/online-donation-tools
5 6 7 8 9 10 11 12 13
10 Best Web Development Frameworks in 2025 | SaM Solutions
https://sam-solutions.com/blog/web-development-frameworks/
20
Digital Accessibility Requirements for Online Learning - UPCEA
https://upcea.edu/news/government-affairs/digital-accessibility-requirements-for-online-learning/
10