# Glow AI Website

A simple, elegant website for Glow AI featuring an infinite scrolling carousel and essential pages.

## Files Included

- `index.html` - Main homepage with infinite scrolling carousel
- `privacy.html` - Privacy Policy page
- `terms.html` - Terms of Service page
- `contact.html` - Contact page
- `styles.css` - All styling for the website
- `script.js` - JavaScript for the infinite carousel
- `app-icon.png` - Glow AI app icon

## Features

- Dark black background (#000000)
- Glow AI branding with app icon at the top
- Large centered heading "Create Anything with Just Text"
- Infinite horizontal scrolling carousel (similar to onboarding flow)
- Footer with Privacy Policy, Terms of Service, and Contact links
- Fully responsive design
- Self-contained and ready to deploy

## How to Deploy

### Option 1: Netlify (Recommended - Free & Easy)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop the entire `glow-website` folder onto Netlify
4. Your site will be live in seconds!
5. You can customize the domain name in settings

### Option 2: Vercel (Free & Fast)

1. Go to [vercel.com](https://vercel.com/)
2. Sign up or log in
3. Click "Add New Project"
4. Upload the `glow-website` folder
5. Click "Deploy"

### Option 3: GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload all files from `glow-website` folder
3. Go to repository Settings > Pages
4. Select main branch as source
5. Your site will be live at `username.github.io/repository-name`

### Option 4: Any Web Host

Simply upload all files in the `glow-website` folder to your web hosting provider via FTP or their file manager. Make sure `index.html` is in the root directory.

## Customization

### Update Content

- **Privacy Policy**: Edit `privacy.html` - update the text inside the `<div class="page-content">` section
- **Terms of Service**: Edit `terms.html` - update the text inside the `<div class="page-content">` section
- **Contact**: Edit `contact.html` - update the text inside the `<div class="page-content">` section

### Update Carousel Cards

Edit the carousel cards in `index.html` by modifying the card labels:

```html
<div class="card-label">Your Text Here</div>
```

### Change Colors

Edit `styles.css`:
- Background color: Change `background-color: #000000;` in the `body` selector
- Heading gradient: Modify the `linear-gradient` in `.main-heading`
- Card colors: Update the `background` in `.carousel-card`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved - Glow AI
