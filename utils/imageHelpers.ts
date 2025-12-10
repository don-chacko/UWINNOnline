export const getGoogleDriveImageUrl = (driveId: string): string => {
  // Using lh3.googleusercontent.com is often more reliable for high-traffic hosting of drive images than drive.google.com/uc
  // However, for standard file IDs, the export=view format is the standard fallback.
  return `https://lh3.googleusercontent.com/d/${driveId}`;
};

// Fallback mock images if drive links fail (for safety in preview)
export const getMockImage = (type: 'logo' | 'game' | 'product') => {
    if (type === 'logo') return "https://placehold.co/150x50/4a104a/FFF?text=uWinn";
    if (type === 'game') return "https://placehold.co/80x40/222/FFF?text=GAME";
    return "https://placehold.co/100";
}