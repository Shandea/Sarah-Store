import React from 'react';

type CardProps = {
  title: string;
  body: string;
  icon?: React.ReactNode;
  iconPosition?: 'top' | 'left';
};

export const Card: React.FC<CardProps> = ({ title, body, icon, iconPosition = 'top' }) => {
  const hasIcon = Boolean(icon);

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className={`flex ${iconPosition === 'left' ? 'flex-row' : 'flex-col'} items-center gap-4`}>
        {hasIcon && <div className="flex-shrink-0">{icon}</div>}
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base font-normal mt-2">{body}</p>
        </div>
      </div>
    </div>
  );
};
