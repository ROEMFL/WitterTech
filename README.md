# Witter Tech — Homepage

The marketing homepage for Witter Tech (WitterTech.com). This is a plain, static
website (one HTML page plus images) — no build step, nothing to compile. Vercel
serves it as-is.

## What's in here

```
index.html        ← the homepage
vercel.json       ← Vercel settings (caching for images) — leave as-is
assets/           ← logo, favicon, and the photos used on the page
  logo.png
  favicon.png
  hero.jpg
  hands.jpg
  bench.jpg
  living.jpg
  network.jpg
README.md         ← this file
```

## Put it on GitHub

1. Go to https://github.com/new and create a new repository
   (e.g. `witter-tech-site`). Leave it empty — don't add a README from GitHub.
2. On the new repo page, click **Add file → Upload files**.
3. Drag in **index.html**, **vercel.json**, **README.md**, and the **assets**
   folder (drag the whole folder so the images keep their `assets/` path).
4. Click **Commit changes** (commit to the `main` branch).

## Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New… → Project**, then **Import** the repo you just created.
3. Framework Preset will say **Other** (correct — it's a static site).
   Leave Build & Output settings empty. Click **Deploy**.
4. In ~20 seconds you'll get a live `*.vercel.app` link to preview.

## Point WitterTech.com at it (when ready)

1. In the Vercel project: **Settings → Domains → Add** `wittertech.com`.
2. Vercel shows the DNS records to set. Add them at your domain registrar
   (an A record and/or CNAME as shown). It can take a little while to go live.

## Updating the site later

Edit a file on GitHub (or re-upload via **Add file → Upload files**), commit to
`main`, and Vercel automatically redeploys within a minute.

## Note

The contact form is visual only right now — it doesn't send yet. Wiring it up
(so messages reach joe@wittertech.com) is a quick follow-up when you're ready.
