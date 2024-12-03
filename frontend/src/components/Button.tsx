import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  link: string;
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray'| 'primary'; 
  size?: 'sm' | 'md' | 'lg';
  className?: string; 
  onClick?: () => void;
  [key: string]: string | number | boolean | undefined | (() => void);
}

const Button = ({
  text,
  link,
  color = 'blue',
  size = 'md', 
  className = '',
  ...rest
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const colorClasses = {
    primary: 'bg-primary',
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    gray: 'bg-gray-500 hover:bg-gray-600',
  };

  return (
    <Link
      to={link}
      className={`rounded-md text-black ${sizeClasses[size]} ${colorClasses[color]} ${className} transition-colors duration-300 w-fit`}
      {...rest} 
    >
      {text}
    </Link>
  );
};

export default Button;
