import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-700 hover:bg-brand-800 text-white focus:ring-brand-500 border-transparent",
    secondary: "bg-white text-brand-800 hover:bg-brand-50 border border-brand-200 focus:ring-brand-500",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="ml-2 w-5 h-5" />
    </button>
  );
};

export default Button;