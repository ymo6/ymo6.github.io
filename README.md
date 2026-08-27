# ymo6.github.io

Personal academic homepage for **Yanyan Alexandra Mo** — Computational Research Associate,
Department of Genetics, Stanford University.

Plain static HTML + CSS. No build step, no Jekyll, no dependencies.

## Structure

```
index.html                          # entire site (single page, anchored sections)
assets/style.css                    # all styling
assets/profile.jpg                  # profile photo (drop yours in; falls back to initials)
assets/Yanyan_Alexandra_Mo_CV.pdf   # linked CV
.nojekyll                           # tell GitHub Pages to serve files as-is
```

## Local preview

```bash
python3 -m http.server 8777
```

Then open <http://localhost:8777>.

## Publishing to GitHub Pages

The repo must be named `ymo6.github.io` (user site) to be served at
`https://ymo6.github.io`. Create it on GitHub, then:

```bash
git remote add origin https://github.com/ymo6/ymo6.github.io.git
git push -u origin main
```

In **Settings → Pages**, set the source to the `main` branch, root folder.
The site is live within a minute or two.

## Editing

Everything is in `index.html`. Each section is a `<section id="...">` matching a
link in the top nav — add a section, add the nav link, done.
