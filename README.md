# Guardian AI Hero Section

A modern, emotionally impactful hero section built with React, featuring a dark futuristic aesthetic inspired by Shield AI.

## Features

- ✨ Dark gradient background with grid pattern overlay
- 🎨 Neon cyan (#23D2E2) and purple (#7B6CF6) accent colors
- 🎭 Floating particle animation effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌟 Smooth entrance animations
- ✨ Glassmorphism effects on navigation
- 🎯 Interactive hover effects with glow
- 🎪 Two-column layout (content + hero image)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Important Notes

### Hero Image
The component references `/hero-image.jpg`. You'll need to:

1. **Option 1: Use a placeholder service**
   - Replace the `src` in `HeroSection.jsx` with: `https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800`

2. **Option 2: Add your own image**
   - Place your hero image in the `public` folder as `hero-image.jpg`
   - Image should show: Parent and child with tablet/device, warm emotional moment
   - Recommended dimensions: 1920x1080 or similar 16:9 aspect ratio

### AI Image Generation Prompt
To generate the perfect hero image using AI (DALL-E, Midjourney, etc.):
```
Professional lifestyle photography: Mother and young child (8-10 years old) sitting 
together on modern couch, both smiling warmly while looking at tablet device, natural 
window lighting, contemporary home interior, emotional connection and trust, educational 
moment, technology as bridge not barrier, shallow depth of field, warm color tones with 
subtle blue-purple lighting accent, high quality documentary style, protective and 
nurturing atmosphere, 16:9 composition
```

## Customization

### Colors
Main colors used:
- Background gradient: `#0F1B2A` to `#162333`
- Primary accent (cyan): `#23D2E2`
- Secondary accent (purple): `#7B6CF6`
- Text gray: `#A9B3C1`

### Typography
- Font: Space Grotesk (loaded from Google Fonts)
- Headline: 72px (desktop), responsive on mobile
- Subheadline: 20px

### Layout
- Two-column grid: 45% content, 55% image
- Stacks vertically on mobile with image first
- Max width: 1400px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
# Guardian-AI
