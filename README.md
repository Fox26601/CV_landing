# Daniil Gorlov — Portfolio

Personal landing page for Daniil Gorlov: intro, About, experience strip, curated GitHub projects, WEB_exibition case study, PDF resume, and a contact form.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- GitHub API for public repositories
- Contact API via Resend in production (local file store in development)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4317](http://localhost:4317).

## Resume

The PDF resume lives at `public/resume/Daniil_Gorlov_CV.pdf`.

The **View resume** button opens a modal with an embedded PDF preview and a PDF download.

## Contact form backend

`POST /api/contact` validates the payload with Zod. A hidden honeypot field (`website`) is silently discarded when filled (basic bot filter), plus a per-IP in-memory rate limit (5 requests per 10 minutes per serverless instance).

- **Development:** messages are saved to `data/messages.json`. Resend is optional.
- **Production (Vercel):** `RESEND_API_KEY` is required. Messages are emailed; they are not written to disk (serverless filesystem is ephemeral).

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_xxx
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=
```

`CONTACT_TO_EMAIL` defaults to the address in `src/lib/site.ts` when left empty.

## GitHub projects

Featured projects are curated in `src/lib/featured-projects.ts`. The GitHub API enriches language / updated dates for those repos (username `Fox26601` by default).

Override with:

```env
GITHUB_USERNAME=Fox26601
GITHUB_TOKEN=optional_personal_access_token
```

## Open Graph

`src/app/opengraph-image.tsx` generates the share image. `metadataBase` in `src/app/layout.tsx` points at `https://cvgorlov.vercel.app`.

## Deploy free on Vercel

Best free host for this Next.js app (API routes + server-side resume preview).

### 1. Push to GitHub

Create a public GitHub repository for this project (Cursor: **Create repo** if you have not yet), then push `main`.

### 2. Create a Resend API key

1. Sign up at [resend.com](https://resend.com) (free).
2. Create an API key.
3. Until you verify a custom domain, keep `CONTACT_FROM_EMAIL=onboarding@resend.dev`. Resend will deliver to the inbox you registered with / `CONTACT_TO_EMAIL`.

### 3. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New… → Project** and import this repository.
3. Framework preset: **Next.js** (auto-detected). Leave build settings default (`npm run build`).
4. Under **Environment Variables**, add for Production (and Preview if you want):

| Name | Value |
| --- | --- |
| `RESEND_API_KEY` | your Resend key (`re_…`) |
| `CONTACT_TO_EMAIL` | optional — defaults to `site.email` |
| `CONTACT_FROM_EMAIL` | `onboarding@resend.dev` |
| `GITHUB_USERNAME` | `Fox26601` (optional if matching `site.ts`) |

5. Click **Deploy**. You get a URL like `https://your-project.vercel.app`.

### 4. Smoke-check after deploy

- Open the site and confirm the hero + GitHub projects load.
- **View resume** opens the modal and **Download PDF** works.
- Submit the contact form — you should receive an email. Without `RESEND_API_KEY`, the form returns an error in production on purpose.

Later deploys: every push to `main` redeploys automatically.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (port 4317) |
| `npm run build` | Production build |
| `npm run start` | Start production server (port 4317) |
| `npm run lint` | ESLint |
