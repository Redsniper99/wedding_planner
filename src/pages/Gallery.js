import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    const galleryItems = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
            category: 'ceremony',
            title: 'Elegant Ceremony',
            description: 'A beautiful outdoor ceremony setup'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop',
            category: 'reception',
            title: 'Grand Reception',
            description: 'Luxurious reception hall'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop',
            category: 'decor',
            title: 'Reception Details',
            description: 'Stunning table settings'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1470&auto=format&fit=crop',
            category: 'decor',
            title: 'Floral Arrangements',
            description: 'Beautiful floral centerpieces'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop',
            category: 'couple',
            title: 'Couple Moments',
            description: 'Intimate couple photography'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
            category: 'venue',
            title: 'Venue Tour',
            description: 'Aerial view of the venue'
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1374&auto=format&fit=crop',
            category: 'decor',
            title: 'Table Settings',
            description: 'Elegant place settings'
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1507504031981-a2368c6e1916?q=80&w=1470&auto=format&fit=crop',
            category: 'decor',
            title: 'Decor Inspiration',
            description: 'Floral decor details'
        },
        {
            id: 9,
            url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop',
            category: 'venue',
            title: 'Wedding Venue',
            description: 'Beautiful wedding venue'
        },
        {
            id: 10,
            url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop',
            category: 'reception',
            title: 'Reception Hall',
            description: 'Luxury reception setup'
        },
        {
            id: 11,
            url: 'https://images.unsplash.com/photo-1519225468359-69632974a7d8?q=80&w=1470&auto=format&fit=crop',
            category: 'ceremony',
            title: 'Intimate Ceremony',
            description: 'Cozy ceremony setting'
        },
        {
            id: 12,
            url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1470&auto=format&fit=crop',
            category: 'couple',
            title: 'Romantic Moments',
            description: 'Couple photography'
        },
    ];

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'ceremony', label: 'Ceremony' },
        { id: 'reception', label: 'Reception' },
        { id: 'decor', label: 'Decor' },
        { id: 'couple', label: 'Couple' },
        { id: 'venue', label: 'Venue' },
    ];

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

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

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square"
                                onClick={() => setSelectedImage(item)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop';
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <Typography className="text-white font-playfair font-bold text-xl mb-1">
                                            {item.title}
                                        </Typography>
                                        <Typography className="text-white/90 text-sm">
                                            {item.description}
                                        </Typography>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-[#DEB887] transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image */}
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />

                            {/* Image Info */}
                            <div className="mt-6 text-center">
                                <Typography className="text-white font-playfair font-bold text-2xl mb-2">
                                    {selectedImage.title}
                                </Typography>
                                <Typography className="text-white/80 text-base">
                                    {selectedImage.description}
                                </Typography>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
