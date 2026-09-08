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

  const logos = {
    studybuddy: (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-white font-bold text-lg">SB</span>
      </div>
    ),
    schoolio: (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-white font-bold text-lg">S</span>
      </div>
    ),
    mobymax: (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-white font-bold text-lg">M</span>
      </div>
    ),
    ged: (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-white font-bold text-lg">G</span>
      </div>
    )
  };

  return logos[brand];
}
