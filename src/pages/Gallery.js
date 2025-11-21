import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Helper to fix paths for GitHub Pages (or any subdirectory deployment)
    const getImagePath = (path) => {
        if (!path) return '';
        if (path.startsWith('http')) return path; // External URL
        // Remove leading slash if present to avoid double slashes with PUBLIC_URL
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${process.env.PUBLIC_URL}/${cleanPath}`;
    };

    // Load gallery data
    useEffect(() => {
        setLoading(true);
        // Fix fetch path for GitHub Pages
        fetch(`${process.env.PUBLIC_URL}/gallery-data.json`)
            .then(res => res.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading gallery data:', err);
                setAlbums([]);
                setLoading(false);
            });
    }, []);

    // Get unique categories
    const categories = [
        { id: 'all', label: 'All' },
        ...Array.from(new Set(albums.map(album => album.category)))
            .map(cat => ({ id: cat.toLowerCase(), label: cat }))
    ];

    // Filter albums
    const filteredAlbums = filter === 'all'
        ? albums
        : albums.filter(album => album.category.toLowerCase() === filter);

    // Album slider navigation
    const nextImage = () => {
        if (selectedAlbum) {
            setCurrentImageIndex((prev) =>
                prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedAlbum) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
            );
        }
    };

    const openAlbum = (album) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(0);
    };

    const closeAlbum = () => {
        setSelectedAlbum(null);
        setCurrentImageIndex(0);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedAlbum) return;
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeAlbum();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedAlbum]);

    // Hide Navbar and Block Scroll when album is open
    useEffect(() => {
        const navbar = document.querySelector('header'); // MUI AppBar renders as header
        if (selectedAlbum) {
            if (navbar) navbar.style.display = 'none';
            document.body.style.overflow = 'hidden'; // Block scroll
        } else {
            if (navbar) navbar.style.display = '';
            document.body.style.overflow = 'unset'; // Restore scroll
        }

        return () => {
            if (navbar) navbar.style.display = '';
            document.body.style.overflow = 'unset';
        };
    }, [selectedAlbum]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FDF5E6] to-white pt-32 pb-20">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <Typography
                        variant="h1"
                        className="font-playfair font-bold text-[#3E2723] mb-4"
                        style={{ fontSize: '3.5rem' }}
                    >
                        Our Gallery
                    </Typography>
                    <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-playfair text-center">
                        Explore our collection of beautiful weddings and celebrations we've had the honor to plan
                    </Typography>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${filter === category.id
                                ? 'bg-white text-[#8B4513] border-2 border-[#8B4513] shadow-lg'
                                : 'bg-white text-[#8B4513] border-2 border-[#8B4513]/20 hover:border-[#8B4513] hover:shadow-md'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Loading State */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20"
                    >
                        <div className="w-16 h-16 border-4 border-[#8B4513]/20 border-t-[#8B4513] rounded-full animate-spin mb-4"></div>
                        <Typography className="text-[#5D4037] font-playfair">Loading albums...</Typography>
                    </motion.div>
                ) : filteredAlbums.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <Typography variant="h5" className="font-playfair text-[#5D4037] mb-4">
                            No albums found
                        </Typography>
                        <Typography className="text-[#8B4513]">
                            Try adjusting your search or category filter
                        </Typography>
                    </motion.div>
                ) : (
                    <>


                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence>
                                {filteredAlbums.map((album, index) => (
                                    <motion.div
                                        key={album.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border border-gray-200"
                                        onClick={() => openAlbum(album)}
                                    >
                                        {/* Album Info - Always Visible */}
                                        <div className="p-5 border-b border-gray-100">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-xl font-bold text-[#3E2723] mb-1 font-playfair">{album.name}</h3>
                                                {album.isNew && (
                                                    <span className="bg-[#8B4513] text-white px-2 py-1 rounded text-xs font-bold">
                                                        NEW
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-[#5D4037]">{album.imageCount} photos • {album.category}</p>
                                        </div>

                                        {/* Album Cover Image */}
                                        <div className="relative h-64 bg-gray-100 group">
                                            <img
                                                src={getImagePath(album.coverThumbnail || album.coverImage)}
                                                alt={album.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400"><span class="text-sm">Image unavailable</span></div>';
                                                }}
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </>
                )}

                {/* Album Slider Modal */}
                <AnimatePresence>
                    {selectedAlbum && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black/80"
                            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                            onClick={closeAlbum}
                        >
                            {/* Close Button - Top Right */}
                            <button
                                className="absolute top-6 right-6 text-white z-[10000] bg-black p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-all shadow-lg border border-white/20"
                                onClick={closeAlbum}
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Album Info - Top Left */}
                            <div className="absolute top-6 left-6 text-white z-50 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
                                <h2 className="font-playfair font-bold text-lg">{selectedAlbum.name}</h2>
                                <p className="text-sm opacity-90">
                                    {currentImageIndex + 1} / {selectedAlbum.images.length}
                                </p>
                            </div>

                            {/* Main Content Area */}
                            <div className="absolute inset-0 flex items-center justify-center pt-20 pb-32">
                                {/* Image Container */}
                                <div
                                    className="relative w-full h-full flex items-center justify-center px-2 md:px-20"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <motion.img
                                        key={currentImageIndex}
                                        src={getImagePath(selectedAlbum.images[currentImageIndex])}
                                        alt={`${selectedAlbum.name} - ${currentImageIndex + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = offset.x;
                                            if (swipe < -50) {
                                                nextImage();
                                            } else if (swipe > 50) {
                                                prevImage();
                                            }
                                        }}
                                        onError={(e) => {
                                            console.error('Image failed to load:', e.target.src);
                                            e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200';
                                        }}
                                    />

                                    {/* Navigation Buttons - Hidden on Mobile */}
                                    {selectedAlbum.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 text-black p-4 rounded-full transition-all hover:scale-110 group shadow-lg z-50"
                                                aria-label="Previous image"
                                            >
                                                <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 text-black p-4 rounded-full transition-all hover:scale-110 group shadow-lg z-50"
                                                aria-label="Next image"
                                            >
                                                <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            {selectedAlbum.images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                                    {selectedAlbum.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex
                                                ? 'border-[#DEB887] scale-110'
                                                : 'border-white/30 hover:border-white/60'
                                                }`}
                                        >
                                            <img
                                                src={getImagePath(selectedAlbum.thumbnails ? selectedAlbum.thumbnails[idx] : img)}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </div>
    );
};

export default Gallery;
