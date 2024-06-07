import { FunctionComponent } from 'react';
import { ButtonProps } from './types';
import { cn } from '@/utils/cn';
import { variantDict } from './utils';
import Link from 'next/link';

export const Button: FunctionComponent<ButtonProps> = ({
  startIcon,
  endIcon,
  disabled,
  variant,
  label,
  onClick,
  fullWidth,
  classNames,
  children,
}) => {
  const variantStyles = variantDict(variant);

  return (
    <button
      id="jarvis_button"
      onClick={onClick}
      className={cn(
        classNames,
        `${variantStyles.bg} ${variantStyles.border} ${disabled ? variantStyles.disabled + 'pointer-events-none cursor-default hover:none ' : ''} ${fullWidth ? 'w-full' : ''} hover:opacity-hover active:bg-brand-700 px-4 py-2 rounded-default transition-all`,
      )}
    >
      {startIcon && (
        <span
          className="jarvis-button__icon jarvis-button__startIcon"
          data-testid="startIcon"
        >
          {startIcon}
        </span>
      )}
      {label ? <span className={cn(classNames, `text-4 ${variantStyles.label}`)}>
        {label}
      </span> : <>{children}</>}
      
      {endIcon && (
        <span
          className="jarvis-button__icon jarvis-button__endIcon"
          data-testid="endIcon"
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};
