import React from 'react';

interface CurvedDomeProps {
  fill?: string;
  className?: string;
}

export const CurvedDome: React.FC<CurvedDomeProps> = ({ 
  fill = '#05080c',
  className = '' 
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none -my-[1px] ${className}`}>
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-20"
      >
        <path
          d="M0 96C360 16 1080 16 1440 96V96H0V96Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
