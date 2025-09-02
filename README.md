## A modern full-stack web application built with Next.js, featuring Clerk authentication, Inngest for background jobs, Neon Postgres database for scalable data storage, Prisma ORM for database access, and shadcn/ui for a polished UI. 🔥🔥


### Features:

```
- 🔐 Authentication & Authorization with Clerk

- ⚡ Event-driven workflows & background jobs using Inngest

- 🗄️ Scalable & serverless PostgreSQL database with Neon

- 🛠️ Database modeling & migrations with Prisma ORM

- 🎨 Beautiful and accessible UI components via shadcn/ui + TailwindCSS

- 🌐 Deployed on Vercel for fast, reliable hosting
```


### Tech Stack
```

- Frontend: Next.js, React, TailwindCSS, shadcn/ui

- Backend: Next.js API routes, Inngest event handlers

- Database: Neon (Serverless PostgreSQL) + Prisma ORM

- Authentication: Clerk (User sign-in, sign-up, session management)

- Hosting: Vercel

```

### Core Integrations
```
1. Clerk (Authentication)

Clerk handles all user authentication and session management.

Email/password & OAuth login options

Secure sessions with middleware

Role-based access control

Example: Only logged-in users can create or view notes.
```

### Inngest (Event-driven jobs)

```

- Inngest is used for reliable background tasks and workflows.

- Handles async processes (e.g., notifications, scheduled jobs)

- Event-driven architecture integrated with Next.js API routes

- Example: When a new user signs up, an Inngest function initializes their profile.
```

### Neon Database + Prisma (Data layer)

```

- Neon provides a serverless PostgreSQL database, while Prisma simplifies database access.

- Prisma ORM for type-safe queries

- Neon for branching, autoscaling, and reliability

- Easy migrations with Prisma CLI

- Example: User data, notes, and app records are modeled with Prisma and stored in Neon DB.
```

### shadcn/ui (UI Components)
```

- shadcn/ui
 provides pre-built, accessible, and themeable components.

- TailwindCSS powered

- Consistent design system

- Used for forms, modals, buttons, navigation

- Example: Login forms and dashboard UI are built using shadcn/ui components.
```

### ⚙️ Setup Instructions

#### 1. Clone the repository
```
git clone https://github.com/Sumit-Kushwaha62/AI-Career-Coach.git
cd AI-Career-Coach

```
#### 2. Install dependencies

```
npm install
```


### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```
### 📬 Contact
For any queries, feedback, or collaboration opportunities, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/sumit-kushwaha-83b608357/).

### Live Demo
[AI-Career-Coach](ai-career-coach-eta-sable.vercel.app).