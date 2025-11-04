# ClatterSite

A modern, responsive landing page for the Clatter game built with React, Vite, and Material-UI (MUI).

## Features

- 🎮 Unity WebGL game integration
- 📸 Interactive screenshot carousel and gallery
- 🎬 Video trailer support
- 📋 System requirements display
- ⭐ Reviews and testimonials section
- 🏆 Achievements showcase
- 🛒 Steam store integration with CTA buttons
- 📧 Newsletter signup
- 🔗 Social media links
- 📱 Fully responsive design
- ♿ Accessibility features (ARIA labels, keyboard navigation)
- 🔍 SEO optimized (meta tags, Open Graph, structured data)
- 📊 Google Analytics integration

## Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/clatterthegame/ClatterSite.git
cd ClatterSite
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory (optional, for custom configuration):

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_STEAM_APP_ID=YOUR_APP_ID
VITE_STEAM_URL=https://store.steampowered.com/app/YOUR_APP_ID
VITE_TRAILER_URL=https://www.youtube.com/watch?v=YOUR_VIDEO_ID
VITE_GAME_PRICE=$9.99
VITE_RELEASE_DATE=2024
VITE_IS_AVAILABLE=true
```

## Development

Start the development server:

```bash
yarn dev
```

The site will be available at `http://localhost:3000`

## Building for Production

Build the production-ready files:

```bash
yarn build
```

The built files will be in the `dist/` directory.

Preview the production build:

```bash
yarn preview
```

## Project Structure

```
ClatterSite/
├── public/
│   ├── build/              # Unity WebGL build files
│   ├── assets/
│   │   └── images/         # Game screenshots and images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # React components
│   │   ├── HeroSection.jsx
│   │   ├── ScreenshotCarousel.jsx
│   │   ├── GameDescription.jsx
│   │   ├── GameTrailer.jsx
│   │   ├── SystemRequirements.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── SteamCTA.jsx
│   │   ├── SteamWidget.jsx
│   │   ├── AchievementsShowcase.jsx
│   │   ├── GenreTags.jsx
│   │   ├── ReleaseInfo.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── NewsletterSignup.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingStates.jsx
│   ├── hooks/
│   │   └── useUnity.js     # Unity WebGL integration hook
│   ├── theme/
│   │   └── theme.js         # MUI theme configuration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Configuration

### Game Information

Update game-specific information in `src/App.jsx`:

- Steam store URL
- Steam app ID (for widget)
- Video trailer URL
- Game price
- Release date
- Availability status

### Unity Integration

Unity WebGL build files should be placed in `public/build/`:

- `Web Build 1.loader.js`
- `Web Build 1.data.unityweb`
- `Web Build 1.framework.js.unityweb`
- `Web Build 1.wasm.unityweb`

The Unity game will automatically load when the page loads.

### Screenshots

Place game screenshots in `public/assets/images/`:

- `screenshot 1.png`
- `screenshot 2.png`
- `screenshot 3.png`
- `screenshot 4.png`
- `screenshot 5.png`

Update the screenshots array in `ScreenshotCarousel.jsx` and `ScreenshotGallery.jsx` if you have a different number of screenshots.

## Deployment

### Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Steps:**

1. **Enable GitHub Pages in your repository:**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

2. **Push to trigger deployment:**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the **Actions** tab in your GitHub repository
   - Watch the workflow run
   - Once complete, your site will be available at:
     `https://clatterorg.github.io/ClatterGame/`

**Test locally before deploying:**

```bash
yarn build
yarn preview:gh-pages
```

### Deploy to Other Static Hosting Services

The built `dist/` folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **Vercel**: Connect your repository and deploy
- **Traditional Web Hosting**: Upload the contents of `dist/` to your web server

### Important Notes for Deployment

1. Ensure Unity build files are accessible at `/build/` path
2. Update `robots.txt` and `sitemap.xml` with your actual domain
3. Set up environment variables in your hosting platform if using them
4. Configure Google Analytics if needed
5. For GitHub Pages, the base path is set to `/ClatterGame/` - update `vite.config.js` if your repository name differs

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Framer Motion** - Animations
- **React Player** - Video playback
- **React Helmet Async** - SEO management
- **React GA4** - Analytics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Support

For issues and questions, please open an issue on GitHub.
