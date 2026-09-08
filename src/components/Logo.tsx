interface LogoProps {
  brand: 'studybuddy' | 'schoolio' | 'mobymax' | 'ged';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Logo({ brand, size = 'medium', className = '' }: LogoProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  // Google Drive file IDs
  const fileIds = {
    studybuddy: '1G5atbcluoGoTooM925OyF47x9DgkV22m',
    schoolio: '1HRqQYHCfuKkf3_G211DfHkdf6BJ172Rm',
    mobymax: '1UGYPpX6vWTX4qwjWVm5MgjGZnhsCemyj',
    ged: '1OJFYP_OrrWHlwsiUxdL72S7Mx1gKVJy8'
  };

  const imageUrl = `https://lh3.googleusercontent.com/d/${fileIds[brand]}`;

  return (
    <img 
      src={imageUrl} 
      alt={brand}
      className={`${sizeClasses[size]} object-contain rounded-lg ${className}`}
    />
  );
}
