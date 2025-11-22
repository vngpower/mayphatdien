
import React, { useState } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

interface SecureImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
}

const SecureImage: React.FC<SecureImageProps> = ({ src, fallbackSrc, className, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Chặn chuột phải
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault(); // Chặn kéo thả ảnh
  };

  // Nếu không có src hoặc có lỗi tải ảnh
  if (!src || hasError) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center text-gray-300 ${className}`} onContextMenu={handleContextMenu}>
         {fallbackSrc ? (
            <img 
                src={fallbackSrc} 
                alt={alt} 
                className={className} 
                onContextMenu={handleContextMenu}
                draggable="false"
            />
         ) : (
            <ImageOff size={24} />
         )}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
         <div className={`bg-gray-100 flex items-center justify-center absolute inset-0 z-10 ${className}`}>
            <Loader2 className="animate-spin text-gray-400" size={20} />
         </div>
      )}
      <img
        {...props}
        src={src}
        alt={alt || ''}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
            setHasError(true);
            setIsLoading(false);
        }}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        draggable="false"
      />
    </>
  );
};

export default SecureImage;
