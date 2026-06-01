import React from 'react';

type PageBackgroundProps = {
  imageUrl: string;
  focalPoint?: string;
  fixed?: boolean;
  darkerOverlay?: boolean;
  overlayClassName?: string;
};

const resolveObjectPosition = (focalPoint: string) => {
  switch (focalPoint) {
    case 'object-top':
      return 'center top';
    case 'object-center':
      return 'center center';
    case 'object-bottom':
      return 'center bottom';
    case 'object-left':
      return 'left center';
    case 'object-right':
      return 'right center';
    default:
      return focalPoint;
  }
};

export function PageBackground({
  imageUrl,
  focalPoint = 'object-top',
  fixed = false,
  darkerOverlay = false,
  overlayClassName = '',
}: PageBackgroundProps) {
  const overlayStrength = darkerOverlay ? 'via-black/90' : 'via-black/80';

  return (
    <div className={`${fixed ? 'fixed' : 'absolute'} inset-0 z-0`} style={fixed ? { backgroundAttachment: 'fixed' } : undefined}>
      <img
        src={imageUrl}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-top opacity-70"
        style={{ objectPosition: resolveObjectPosition(focalPoint) }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200';
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-r from-black ${overlayStrength} to-transparent ${overlayClassName}`} />
    </div>
  );
}