import Image from 'next/image';

interface ImageGalleryProps {
    images: { src: string; alt: string }[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {images.map((img, index) => (
                <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md">
                    <Image 
                        src={img.src} 
                        alt={img.alt} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-300" 
                    />
                </div>
            ))}
        </div>
    );
};