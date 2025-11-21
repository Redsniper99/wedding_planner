# 🎉 Dynamic Gallery System - Complete!

## What's New

Your wedding planner website now has a **fully dynamic gallery system** that automatically updates when you add new wedding photos!

## ✨ Features

### 1. **Automatic Album Detection**
- Simply add a folder to `public/images/recent-work/`
- Add your photos
- Run `npm run gallery:generate` (or restart the dev server)
- Your album appears automatically!

### 2. **NEW Badge System**
- Albums created within the last 30 days get a "NEW" badge
- Appears in both Gallery page and Recent Works section
- Automatically calculated based on folder creation date

### 3. **Full-Screen Album Slider**
- Click any album to open a beautiful full-screen slider
- Navigate with arrow keys or on-screen buttons
- Thumbnail strip at the bottom for quick navigation
- Press ESC to close

### 4. **Category Filtering**
- Filter albums by category on the Gallery page
- Categories are auto-detected from folder names
- Format: `Album Name - Category` (e.g., "Sarah & John - Ceremony")

### 5. **Automatic Image Optimization** 🆕
- Original high-res photos automatically optimized
- Creates 3 versions: thumbnail (400px), medium (1200px), cover (800px)
- 95% reduction in file size for faster loading
- Progressive JPEGs for better user experience
- See `IMAGE_OPTIMIZATION.md` for details

### 6. **Responsive Design**
- Works perfectly on mobile, tablet, and desktop
- Touch-friendly navigation
- Optimized grid layouts

## 📁 File Structure

```
wedding-planner/
├── public/images/
│   ├── recent-work/                    # Add your original album folders here
│   │   ├── Sarah & John - Ceremony/
│   │   │   ├── photo1.jpg (5MB original)
│   │   │   ├── photo2.jpg
│   │   │   └── ...
│   │   └── Emma & Michael - Reception/
│   │       └── ...
│   └── optimized/                      # Auto-generated optimized versions
│       ├── Sarah & John - Ceremony/
│       │   ├── thumbnail/              # 400px, ~30KB each
│       │   ├── medium/                 # 1200px, ~150KB each
│       │   └── cover/                  # 800px, ~80KB
│       └── ...
├── src/data/gallery-data.json          # Auto-generated album data
├── scripts/generate-gallery.js         # Album scanner + optimizer
├── IMAGE_OPTIMIZATION.md               # Optimization guide
├── QUICK_START.md                      # Quick reference guide
└── GALLERY_README.md                   # Detailed documentation
```

## 🚀 How to Use

### Adding a New Album

1. **Create a folder** in `public/images/recent-work/`
   ```
   Sarah & John Wedding - Ceremony
   ```

2. **Add photos** to the folder (JPG, PNG, WEBP, GIF supported)

3. **Generate gallery data**:
   ```bash
   npm run gallery:generate
   ```
   Or just restart the dev server:
   ```bash
   npm start
   ```

4. **Done!** Your album appears in:
   - Gallery page with category filtering
   - Recent Works section on Home page
   - With a NEW badge if it's recent

### Folder Naming

- **Simple**: `Wedding Name` → Category: "Wedding"
- **With Category**: `Wedding Name - Category` → Custom category

**Examples:**
- `Sarah & John Wedding - Ceremony`
- `Emma & Michael - Reception`
- `Garden Wedding - Venue`
- `Romantic Couple Shoot - Couple`

## 🎨 Where Albums Appear

### 1. Gallery Page (`/gallery`)
- Full album grid with all your albums
- Category filter buttons
- Click any album to open the slider
- NEW badges on recent albums

### 2. Recent Works Section (Home Page)
- Shows the 6 most recent albums
- Masonry grid layout
- NEW badges on recent albums
- Click to navigate to full gallery

## 🔧 Technical Details

### Auto-Generation
The `prestart` script in `package.json` automatically runs the gallery generator before starting the dev server. You can also run it manually:

```bash
npm run gallery:generate
```

### Data Format
Albums are stored in `src/data/gallery-data.json`:

```json
[
  {
    "id": "sarah-john-wedding-ceremony",
    "name": "Sarah & John Wedding",
    "folderName": "Sarah & John Wedding - Ceremony",
    "category": "Ceremony",
    "coverImage": "/images/recent-work/Sarah & John Wedding - Ceremony/001.jpg",
    "images": [...],
    "imageCount": 25,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "isNew": true
  }
]
```

### NEW Badge Logic
Albums are marked as "new" if they were created within the last 30 days. This is calculated based on the folder's creation/modification time.

## 📝 Tips

1. **Image Optimization**: Keep images under 500KB for best performance
2. **Cover Photo**: The first image (alphabetically) becomes the album cover
3. **Naming**: Use descriptive folder names for better organization
4. **Categories**: Use consistent category names (Ceremony, Reception, Decor, Couple, Venue)
5. **Empty Folders**: Delete empty folders before generating to avoid warnings

## 🎯 Next Steps

1. Add your first album to `public/images/recent-work/`
2. Run `npm run gallery:generate`
3. Check the Gallery page to see your albums
4. Share with clients!

## 📚 Documentation

- **Quick Start**: See `QUICK_START.md`
- **Detailed Guide**: See `GALLERY_README.md`
- **Image Optimization**: See `IMAGE_OPTIMIZATION.md` 🆕
- **Script**: See `scripts/generate-gallery.js`

---

**Enjoy your new dynamic gallery system!** 🎊
