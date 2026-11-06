# Fiona's Portfolio

A static rebuild of the Vzy portfolio — plain HTML, CSS and a little JavaScript. No build step, no dependencies.

```
index.html          the whole page (edit text here)
styles.css          design (colours are at the top under :root)
script.js           mobile menu + image fallback
404.html            not-found page
images/             your photos (see step 1)
vercel.json         Vercel settings
download-images.sh  pulls your images off Vzy
```

## 1. Get your images (once)

On a Mac or Linux terminal, from this folder:

```bash
bash download-images.sh
```

On Windows, open each URL listed in `download-images.sh` in your browser, save it, and put it in `images/` with the name shown (e.g. `images/fiona.png`).

If you skip this, the site still works: it loads the images straight from Vzy's servers. But those links may stop working if you close your Vzy account, so it's best to keep your own copies.

## 2. Fill in the placeholders

Search `index.html` for `TODO`:
- the **View Website** links for Gynocare Hub, Sarufi and Kuishismart
- your **LinkedIn** URL and **WhatsApp** link (e.g. `https://wa.me/2547XXXXXXXX`) in the footer

## 3. Deploy to Vercel

**Option A: drag and drop (no Git)**
1. Install the CLI: `npm i -g vercel`
2. In this folder run `vercel`, then `vercel --prod`.

**Option B: GitHub (auto-deploys on every change)**
1. Create a new GitHub repository and upload this folder's contents.
2. At vercel.com → **Add New → Project** → import the repository.
3. Framework preset: **Other**. Leave the build command and output directory empty. Click **Deploy**.

To use your own domain: Vercel project → **Settings → Domains**.

## Preview locally

```bash
npx serve .
```
