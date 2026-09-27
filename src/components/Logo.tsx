interface LogoProps {
  brand: 'studybuddy' | 'schoolio' | 'mobymax' | 'ged';
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ brand, size = 'medium' }: LogoProps) {
  const sizeClasses = { small: 'w-8 h-8', medium: 'w-10 h-10', large: 'w-12 h-12' };
  const textSizes = { small: 'text-sm', medium: 'text-lg', large: 'text-xl' };
  const gradients = {
    studybuddy: 'from-blue-600 to-purple-600',
    schoolio: 'from-green-500 to-emerald-600',
    mobymax: 'from-blue-500 to-indigo-600',
    ged: 'from-orange-500 to-red-600',
  };
  const letters = { studybuddy: 'SB', schoolio: 'S', mobymax: 'M', ged: 'G' };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradients[brand]} rounded-lg flex items-center justify-center flex-shrink-0`}>
      <span className={`text-white font-bold ${textSizes[size]}`}>{letters[brand]}</span>
    </div>
  );
}
