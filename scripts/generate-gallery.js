const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const RECENT_WORK_DIR = path.join(__dirname, '../public/images/recent-work');
const OPTIMIZED_DIR = path.join(__dirname, '../public/images/optimized');
const OUTPUT_FILE = path.join(__dirname, '../public/gallery-data.json');

// Days to consider an album as "new"
const NEW_ALBUM_DAYS = 30;

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
    thumbnail: { width: 400, quality: 80 },      // For grid thumbnails
    medium: { width: 1200, quality: 85 },        // For lightbox display
    cover: { width: 800, quality: 85 }           // For album covers
};

async function optimizeImage(inputPath, outputPath, size) {
    try {
        const { width, quality } = OPTIMIZATION_SETTINGS[size];

        await sharp(inputPath)
            .resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({ quality, progressive: true })
            .toFile(outputPath);

        return true;
    } catch (error) {
        console.error(`  ⚠️  Error optimizing ${path.basename(inputPath)}:`, error.message);
        return false;
    }
}

async function processAlbumImages(folderName, images) {
    const albumOptimizedDir = path.join(OPTIMIZED_DIR, folderName);

    // Create optimized directories
    ['thumbnail', 'medium', 'cover'].forEach(size => {
        const dir = path.join(albumOptimizedDir, size);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    const optimizedImages = [];

    for (let i = 0; i < images.length; i++) {
        const imageName = images[i];
        const inputPath = path.join(RECENT_WORK_DIR, folderName, imageName);
        const baseName = path.parse(imageName).name;

        // Generate optimized versions
        const thumbnail = path.join(albumOptimizedDir, 'thumbnail', `${baseName}.jpg`);
        const medium = path.join(albumOptimizedDir, 'medium', `${baseName}.jpg`);
        const cover = path.join(albumOptimizedDir, 'cover', `${baseName}.jpg`);

        // Only optimize if files don't exist or source is newer
        const needsOptimization = !fs.existsSync(medium) ||
            fs.statSync(inputPath).mtime > fs.statSync(medium).mtime;

        if (needsOptimization) {
            process.stdout.write(`  📸 Optimizing ${i + 1}/${images.length}: ${imageName}...`);

            await Promise.all([
                optimizeImage(inputPath, thumbnail, 'thumbnail'),
                optimizeImage(inputPath, medium, 'medium'),
                i === 0 ? optimizeImage(inputPath, cover, 'cover') : Promise.resolve()
            ]);

            process.stdout.write(' ✓\n');
        }

        optimizedImages.push({
            original: `/images/recent-work/${folderName}/${imageName}`,
            thumbnail: `/images/optimized/${folderName}/thumbnail/${baseName}.jpg`,
            medium: `/images/optimized/${folderName}/medium/${baseName}.jpg`,
            cover: i === 0 ? `/images/optimized/${folderName}/cover/${baseName}.jpg` : null
        });
    }

    return optimizedImages;
}

async function generateGalleryData() {
    try {
        console.log('🎨 Starting gallery generation with image optimization...\n');

        // Ensure output directory exists
        const outputDir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Ensure optimized directory exists
        if (!fs.existsSync(OPTIMIZED_DIR)) {
            fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
        }

        // Check if recent-work directory exists
        if (!fs.existsSync(RECENT_WORK_DIR)) {
            console.log('Creating recent-work directory...');
            fs.mkdirSync(RECENT_WORK_DIR, { recursive: true });

            const albums = [];
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(albums, null, 2));
            console.log('✅ Created empty gallery data. Add folders to public/images/recent-work/');
            return;
        }

        const albums = [];
        const folders = fs.readdirSync(RECENT_WORK_DIR);

        for (const folderName of folders) {
            const folderPath = path.join(RECENT_WORK_DIR, folderName);
            const stats = fs.statSync(folderPath);

            // Skip if not a directory or hidden folder
            if (!stats.isDirectory() || folderName.startsWith('.')) {
                continue;
            }

            // Read all image files from the folder
            const files = fs.readdirSync(folderPath);
            const images = files.filter(file => {
                const ext = path.extname(file).toLowerCase();
                return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
            }).sort(); // Sort alphabetically

            if (images.length === 0) {
                console.log(`⚠️  Skipping "${folderName}" - no images found`);
                continue;
            }

            console.log(`\n📁 Processing album: ${folderName}`);
            console.log(`   Found ${images.length} image(s)`);

            // Optimize images
            const optimizedImages = await processAlbumImages(folderName, images);

            // Get folder creation/modification time
            const folderStats = fs.statSync(folderPath);
            const createdDate = folderStats.birthtime;
            const modifiedDate = folderStats.mtime;
            const latestDate = modifiedDate > createdDate ? modifiedDate : createdDate;

            // Check if album is new (within last 30 days)
            const daysSinceCreation = (Date.now() - latestDate.getTime()) / (1000 * 60 * 60 * 24);
            const isNew = daysSinceCreation <= NEW_ALBUM_DAYS;

            // Parse folder name for metadata (optional format: "Wedding Name - Category")
            const parts = folderName.split(' - ');
            const albumName = parts[0].trim();
            const category = parts[1] ? parts[1].trim() : 'Wedding';

            // Create album object
            const album = {
                id: folderName.toLowerCase().replace(/\s+/g, '-'),
                name: albumName,
                folderName: folderName,
                category: category,
                coverImage: optimizedImages[0].cover || optimizedImages[0].medium,
                coverThumbnail: optimizedImages[0].thumbnail,
                images: optimizedImages.map(img => img.medium),
                thumbnails: optimizedImages.map(img => img.thumbnail),
                imageCount: images.length,
                createdAt: latestDate.toISOString(),
                isNew: isNew
            };

            albums.push(album);
            console.log(`   ✅ Album processed successfully`);
        }

        // Sort albums by date (newest first)
        albums.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Write to JSON file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(albums, null, 2));

        console.log('\n' + '='.repeat(60));
        console.log('✅ Gallery generation complete!');
        console.log('='.repeat(60));
        console.log(`📁 Total albums: ${albums.length}`);

        if (albums.length > 0) {
            console.log('\n📋 Album Summary:');
            albums.forEach(album => {
                const newTag = album.isNew ? ' 🆕 NEW' : '';
                console.log(`   • ${album.name} - ${album.imageCount} photos (${album.category})${newTag}`);
            });
        }

        console.log('\n💡 Optimized images saved to: public/images/optimized/');
        console.log('💡 Gallery data saved to: src/data/gallery-data.json\n');

    } catch (error) {
        console.error('❌ Error generating gallery data:', error);
        process.exit(1);
    }
}

generateGalleryData();
