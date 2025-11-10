# Quick Start Guide

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Hero Image** (Choose one option):

   **Option A: Use Unsplash placeholder**
   
   Open `HeroSection.jsx` and replace line 70:
   ```jsx
   src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800"
   ```

   **Option B: Use your own image**
   
   - Create a `public` folder in the project root
   - Add your image as `public/hero-image.jpg`
   - Image should be 1920x1080 or similar 16:9 ratio

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to `http://localhost:3000`

## What You'll See

✅ Dark futuristic hero section with gradient background
✅ Animated floating particles
✅ Glassmorphism navigation bar
✅ Two-column layout (text + image)
✅ Glowing CTA buttons with hover effects
✅ Scroll indicator at bottom
✅ Fully responsive on all devices

## Next Steps

- Replace placeholder image with actual parent-child photo
- Customize colors in `HeroSection.css`
- Update text content in `HeroSection.jsx`
- Connect CTAs to actual pages/forms

## Troubleshooting

**Issue**: Styles not loading
- Make sure `HeroSection.css` is in the same folder as `HeroSection.jsx`

**Issue**: Build errors
- Run `npm install` again
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Issue**: Image not showing
- Check that image path is correct
- Verify image is in `public` folder
- Try using the Unsplash URL as temporary solution
