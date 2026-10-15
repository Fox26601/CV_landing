# Daniil Gorlov — Portfolio

Personal landing page for Daniil Gorlov: short intro, resume viewer/download, latest GitHub projects, and a working contact form.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- GitHub API for public repositories
- Contact API that stores messages locally (and optionally emails via Resend)

## Run locally

```bash
npm install
npm run dev -- --port 4317
```

Open [http://localhost:4317](http://localhost:4317).

## Resume

The DOCX resume lives at `public/resume/Daniil_Gorlov_CV.docx`.

The **View resume** button opens it in a modal (HTML preview via Mammoth) and offers a DOCX download.

## Contact form backend

`POST /api/contact` validates the payload with Zod and always persists messages to `data/messages.json`.

Optional email delivery with Resend:

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_xxx
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=danila.foxman@gmail.com
```

Without `RESEND_API_KEY`, submissions still succeed and are saved on disk.

## GitHub projects

Repositories are fetched for `Jogeer` by default (`https://github.com/Jogeer`).

Override with:

```env
GITHUB_USERNAME=Jogeer
GITHUB_TOKEN=optional_personal_access_token
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
