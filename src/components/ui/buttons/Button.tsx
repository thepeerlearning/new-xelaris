import React from 'react';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'colored' | 'uncolored';
  onClick?: () => void;
  children: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  type = 'colored', 
  onClick, 
  children, 
  className = '',
  htmlType = 'button',
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center rounded-2xl font-medium text-sm tracking-[-0.4px] whitespace-nowrap transition-all duration-200';
  
  const coloredStyles = 'bg-[#fefc00] text-[#161a20] px-6 py-2.5 shadow-[inset_2px_2px_8px_0px_rgba(255,255,255,0.25),inset_-2px_-2px_7px_0px_rgba(0,0,0,0.15)] hover:opacity-90 active:opacity-80';
  
  const uncoloredStyles = 'bg-transparent text-white border border-white px-[2rem] py-2.5 hover:bg-white/10 active:bg-white/20';
  
  const buttonStyles = type === 'colored' ? coloredStyles : uncoloredStyles;
  
  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={`${baseStyles} ${buttonStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}