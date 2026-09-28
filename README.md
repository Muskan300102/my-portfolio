# Muskan Raghuvanshi — Portfolio

Personal site for Muskan Raghuvanshi, a software engineer working across software development, data analytics, and artificial intelligence.

The visual design is a dark editorial layout with a light theme, project case studies, and content that lives in typed data files so the site can be updated without rewriting components.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide icons
- React Router

## Run locally

Use Node.js 20.19 or newer, or Node.js 22.12 or newer. Older 20.x releases can still build, but Vite prints an engine warning.

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173`.

```bash
npm run build
npm run preview
```

`npm run build` typechecks the project and writes the production site to `dist/`.

## Before you publish

Three things are intentionally unfinished until you add them:

1. **Email.** Open `src/data/personal.ts` and set `email` to your address. The contact button and the form then use a `mailto:` link. Until that field has a value, the site points people to LinkedIn and GitHub instead of inventing an address.
2. **Resume.** Replace `public/resume.pdf` with your latest PDF. Keep the file name, or change `resumeUrl` in `src/data/personal.ts`.
3. **Portrait.** The hero uses `public/images/profile.jpg`. Replace that file if you want a different photo, and update `profileAlt` in `src/data/personal.ts` if the description should change.

Also set `siteUrl` in `src/data/personal.ts` after you know the public domain. That adds the canonical URL and Open Graph URL.

## Update the content

| What | File |
| --- | --- |
| Name, links, headline, about copy | `src/data/personal.ts` |
| Education | `src/data/education.ts` |
| Jobs | `src/data/experience.ts` |
| Skills and familiarity | `src/data/skills.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Learning topics | `src/data/learning.ts` |
| Highlights | `src/data/achievements.ts` |
| Navigation labels | `src/data/navigation.ts` |

Journey order is the `order` number on each education and experience entry. Lower numbers appear first.

### Projects

Copy an existing object in `src/data/projects.ts`. Each project needs a unique `slug`. The detail page is `/projects/your-slug`.

Add `githubUrl` or `demoUrl` only when the link is real. Empty links are omitted so the site never shows a dead repository or demo button.

The pharmacy project is described as workflow and prompt design. The SaaS entry is a set of concepts, not launched products. Keep that distinction if you extend either one.

### Skills

Each skill has a level:

- `core` — used regularly
- `working` — studied or applied
- `exploring` — still learning

Do not add proficiency percentages.

### Learning lab

Change `status` to `"Started"`, `"Practicing"`, or `"Applying"`. Leave `progress` as `null` unless you want to publish a percentage you set yourself. Add `repository` when a public learning repo exists.

### Logos

Company and institution marks live in `public/logos/`. They are monogram placeholders. Swap in a real logo file and keep the path in the timeline entry, or remove `logo` to fall back to the text mark.

## Contact form

There is no backend. When `email` is set, a valid form opens the visitor’s email app with the message filled in.

To use a hosted form later:

1. Create a form at [Formspree](https://formspree.io/) or a similar service.
2. In `src/components/Contact.tsx`, replace the `mailto` submit path with a `fetch` POST to that endpoint.
3. Keep the existing validation, and show the success or error text from the response.

[EmailJS](https://www.emailjs.com/) or a small serverless function are the same idea: the form UI can stay, and only the submit handler changes.

## Deploy on Vercel

1. Push the project to GitHub.
2. In Vercel, import the repository.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

`vercel.json` already rewrites every path to `index.html`, so project pages such as `/projects/g-scheme-bot` work on refresh.

## Deploy on GitHub Pages

For a user site at `https://username.github.io`:

1. Build with `npm run build`.
2. Publish the `dist` folder with GitHub Pages.
3. `public/404.html` is copied into the build and restores client-side routes.

For a project site at `https://username.github.io/repo-name`:

1. In `vite.config.ts`, set `base: "/repo-name/"`.
2. In `public/404.html`, set `pathSegmentsToKeep` to `1`.
3. Rebuild and publish `dist`.

Vercel is the simpler option if you do not need the site to live under a repository subpath.

## Accessibility

The site uses semantic landmarks, visible focus, labeled form fields, and a skip link. Animations stay off when the operating system asks for reduced motion. Skill familiarity is written in words, not as a fake score.
