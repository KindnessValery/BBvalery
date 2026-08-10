import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`} 
          className="w-full h-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === idx ? 'border-blue-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
