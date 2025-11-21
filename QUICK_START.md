# Quick Start: Adding Wedding Albums

## Step 1: Add Your Photos

1. Navigate to `public/images/recent-work/`
2. Create a new folder with your album name:
   ```
   Sarah & John Wedding - Ceremony
   ```
   Or simply:
   ```
   Sarah & John Wedding
   ```

3. Add your wedding photos to the folder (JPG, PNG, WEBP supported)

## Step 2: Generate Gallery Data

Run this command:
```bash
npm run gallery:generate
```

Or just restart your dev server (it auto-generates):
```bash
npm start
```

## Step 3: Done!

Your albums will automatically appear in:
- ✅ Gallery page (`/gallery`)
- ✅ Recent Works section on Home page
- ✅ NEW badge for albums less than 30 days old

## Example Folder Structure

```
public/images/recent-work/
├── Sarah & John Wedding - Ceremony/
│   ├── 001.jpg
│   ├── 002.jpg
│   └── 003.jpg
├── Emma & Michael - Reception/
│   └── photos...
└── Garden Wedding - Venue/
    └── photos...
```

## Features

- 🎨 **Automatic Cover**: First image becomes the album cover
- 🆕 **NEW Badge**: Shows on recent albums (last 30 days)
- 📱 **Responsive**: Works perfectly on mobile and desktop
- 🖼️ **Album Slider**: Click any album to view full gallery with navigation
- 🔍 **Category Filter**: Filter albums by category in Gallery page
- ⚡ **Auto-Sort**: Albums sorted by date (newest first)

## Tips

- Keep image sizes under 500KB for best performance
- Use descriptive folder names
- The first image (alphabetically) will be the cover photo
- Categories are auto-detected from folder names (e.g., "Wedding Name - Category")

For more details, see `GALLERY_README.md`
