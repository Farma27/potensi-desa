'use client';

import { ImageKitProvider, Image as IKImage } from '@imagekit/next';

export { ImageKitProvider };

interface CustomImageKitProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  transformation?: Array<Record<string, string | number>>;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const ImageKitImage = ({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className,
  transformation = [],
  loading = 'lazy',
  priority = false,
  ...props
}: CustomImageKitProps) => {
  const finalLoading = priority ? 'eager' : loading;
  
  return (
    <IKImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      transformation={transformation}
      loading={finalLoading}
      priority={priority}
      {...props}
    />
  );
};
