# kylehuender.com — single-page personal site

A lightweight, dependency-free portfolio site built with HTML, CSS and vanilla JavaScript.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

### Netlify
Drag this folder into Netlify Drop, or connect a Git repository. No build command is required.

### Vercel
Create a new project from the folder/repository and deploy as a static site. No build command is required.

### GitHub Pages
Push the contents to a repository, enable Pages, and publish from the root branch.

## Updating project tiles

Open `script.js` and edit the `projects` array at the top. Each project can use:

- `title`
- `tag`
- `description`
- `status`
- `size`: `wide`, `medium`, `half`, `small`, or `tall`
- `tone`: `ink`, `blue`, `baby`, `red`, or `paper`
- `visual`: `network`, `signal`, `quarterback`, `qa`, `festival`, `resort`, `band`, `music`, `topo`, or `race`
- optional `href` to make the whole tile link externally
- optional `links` array for buttons inside a tile (used by Kyle Huender Music)

The grid automatically reflows as projects are added, removed or reordered.

## Updating the brands section

The “Brands I’ve worked with” wall is generated from the `brands` array in `script.js`. Add, remove or reorder names there and the wall will reflow automatically.

The current build uses typography-based wordmarks so the section remains lightweight and visually consistent. If you want exact official brand logos later, add SVG/PNG logo files to `assets/brands/` and replace the brand tile text with images. Keeping those assets local is preferable to hotlinking external logo CDNs.

## Brand system

The site is based on the provided Uprise Creative Group style guide:

- Baby Blue: `#6CB5E4`
- Navy: `#0059A9`
- Midnight Blue: `#00192F`
- White: `#FFFFFF`
- Typography direction: Proxima Nova

Because Proxima Nova is a licensed commercial font and no font file is bundled here, the CSS uses a Proxima Nova-first system stack with close fallbacks. If you own a webfont license, add your `.woff2` file separately and wire it up with `@font-face` in `styles.css`.

## Headshot

The provided red/blue gel portrait is included as both JPEG and optimized WebP in `/assets`.

## Contact

The default CTA links to LinkedIn. Add an email address or additional social links in `index.html` when ready.
