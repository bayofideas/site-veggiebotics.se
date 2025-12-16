# Veggiebotics Marketing Website

Premium modular DIY kits for building automated hydroponic growing systems using robotics, sensors, and AI software.

**Live site:** [veggiebotics.se](https://veggiebotics.se)

---

## Overview

This is the marketing website for Veggiebotics - a company selling DIY hydroponic system kits. The site targets tech-savvy professionals who value precision, craftsmanship, and building things themselves.

### Brand Positioning
- "Build your own robotic food system"
- Engineering-first, precision-focused
- Premium, minimalist aesthetic
- Not an appliance, a system

---

## Project Structure

```
site-veggiebotics.se/
├── index.html          # Landing page with all sections
├── kits.html           # Product kits detail page
├── software.html       # Software platform page
├── how-it-works.html   # Step-by-step guide
├── about.html          # Company philosophy
├── community.html      # Community features
├── css/
│   └── styles.css      # Custom styles (alongside Tailwind)
├── js/
│   └── main.js         # JavaScript interactions
├── docs/
│   └── IMAGE_PROMPTS.md # AI image generation prompts
├── CNAME               # Custom domain configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## Technology Stack

- **HTML5** - Semantic, accessible markup
- **Tailwind CSS** (via CDN) - Utility-first styling
- **Custom CSS** - Additional animations and styling
- **Vanilla JavaScript** - Lightweight interactions
- **Google Fonts** - Inter & JetBrains Mono

No build step required. Pure static files served directly.

---

## Local Development

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/site-veggiebotics.se.git
   cd site-veggiebotics.se
   ```

2. Serve locally (choose one method):

   **Python:**
   ```bash
   python -m http.server 8000
   ```

   **Node.js (npx):**
   ```bash
   npx serve .
   ```

   **VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. Open [http://localhost:8000](http://localhost:8000)

### File Changes

Since there's no build step, simply edit files and refresh the browser:
- Edit HTML files for content/structure
- Edit `css/styles.css` for custom styling
- Edit `js/main.js` for interactions
- Tailwind utilities work via CDN (no compilation needed)

---

## Deployment

### GitHub Pages (Recommended)

The site is configured to deploy automatically to GitHub Pages.

1. **Push to Repository:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Save

3. **Custom Domain:**
   - The `CNAME` file is already configured for `veggiebotics.se`
   - Configure DNS with your domain registrar:
     ```
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     CNAME www   yourusername.github.io
     ```

4. **HTTPS:**
   - GitHub Pages provides free HTTPS
   - Enable "Enforce HTTPS" in repository settings

### Alternative Platforms

**Netlify:**
1. Connect repository to Netlify
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy

**Vercel:**
1. Import repository to Vercel
2. Framework preset: Other
3. Build command: (leave empty)
4. Output directory: `/`
5. Deploy

**Cloudflare Pages:**
1. Connect repository
2. Build command: (leave empty)
3. Build output directory: `/`
4. Deploy

---

## Image Assets

The website currently uses placeholder elements for images. To add real images:

1. **Generate Images:**
   - See `docs/IMAGE_PROMPTS.md` for AI generation prompts
   - Use tools like Midjourney, DALL-E, or Gemini

2. **Add Images:**
   - Create `images/` directory
   - Add generated images
   - Replace placeholder `div.img-placeholder` elements with `<img>` tags

3. **Image Format Recommendations:**
   - Use WebP for best compression
   - Provide 2x resolution for retina displays
   - Optimize all images (use tools like ImageOptim or Squoosh)

Example replacement:
```html
<!-- Before (placeholder) -->
<div class="img-placeholder aspect-[4/3] rounded-2xl">
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="text-center p-8">
      <div class="text-6xl mb-4">📦</div>
      <p class="text-neutral-500 text-sm">Description</p>
    </div>
  </div>
</div>

<!-- After (real image) -->
<img 
  src="images/hero-system.webp" 
  alt="Modular hydroponic system in modern apartment"
  class="aspect-[4/3] object-cover rounded-2xl"
  loading="lazy"
>
```

---

## Customization

### Colors

The accent color is lime green (`#a3e635`). To change:

1. Update Tailwind config in each HTML file:
   ```javascript
   tailwind.config = {
     theme: {
       extend: {
         colors: {
           accent: { DEFAULT: '#YOUR_COLOR', warm: '#YOUR_WARM_COLOR' }
         }
       }
     }
   }
   ```

2. Update CSS variables in `css/styles.css`:
   ```css
   :root {
     --color-accent: #YOUR_COLOR;
   }
   ```

### Fonts

Current fonts:
- **Inter** - Body text
- **JetBrains Mono** - Code/technical elements

To change, update the Google Fonts link in each HTML file and Tailwind config.

### Content

All content is directly in HTML files. Edit:
- Page copy and headlines
- Pricing information
- Feature descriptions
- Company information

---

## SEO Checklist

The site includes:
- [x] Semantic HTML structure
- [x] Meta descriptions on all pages
- [x] Open Graph meta tags
- [x] Descriptive page titles
- [x] Clean URL structure
- [x] Mobile-responsive design
- [x] Fast loading (no build step, CDN assets)

To improve:
- [ ] Add `sitemap.xml`
- [ ] Add `robots.txt`
- [ ] Add JSON-LD structured data
- [ ] Add real images with alt text
- [ ] Submit to Google Search Console

---

## Accessibility

The site follows WCAG guidelines:
- Semantic HTML elements
- Sufficient color contrast (especially for dark mode)
- Focus states for interactive elements
- Respects `prefers-reduced-motion`
- Keyboard navigable

---

## Browser Support

Tested and supported:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari
- Chrome for Android

---

## Performance

Current optimizations:
- No build step (minimal deployment complexity)
- CDN-hosted Tailwind CSS
- Minimal custom JavaScript
- System fonts fallback
- Lazy loading ready for images

Further optimizations when adding images:
- Use WebP format
- Implement lazy loading
- Add appropriate `srcset` for responsive images
- Consider image CDN (Cloudinary, Imgix)

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test locally
5. Submit a pull request

---

## License

See [LICENSE](LICENSE) file.

---

## Contact

- Website: [veggiebotics.se](https://veggiebotics.se)
- Email: (add contact email)
- Twitter/X: (add social links)

---

Built with precision and care in Stockholm, Sweden.
