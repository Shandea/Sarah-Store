import React from 'react';
import clsx from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  level?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

const baseStyles: Record<HeadingLevel, string> = {
  h1: 'text-slate-800 font-bold leading-[1.1] text-[32px] md:text-[48px]',
  h2: 'text-slate-800 font-bold leading-[1.2] text-[28px] md:text-[36px]',
  h3: 'text-slate-800 font-semibold leading-[1.3] text-[20px] md:text-[24px]',
  h4: 'text-slate-800 font-semibold leading-[1.4] text-[18px] md:text-[20px]',
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h1',
  className = '',
  children,
}) => {
  const Tag = level as keyof HTMLElementTagNameMap; 
  const styles = baseStyles[level];

  return <Tag className={clsx(styles, className)}>{children}</Tag>;
};