import { SelectProps } from '@radix-ui/react-select';
import { ReactNode } from 'react';

export const sizes = ['sm', 'md', 'lg'] as const;
export type Size = (typeof sizes)[number];

export const variants = ['primary', 'secondary', 'disabled', 'error'] as const;
export type Variant = (typeof variants)[number];

export interface ISelectProps extends SelectProps {
  classNames?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  required: boolean;
  onValueChange?: (value: string) => void;
  value: string;
  defaultValue?: string;
  variant: Variant;
  fullWidth?: boolean;
  id?: string;
  children?: ReactNode;
  placeholder?: string;
  name?: string;
}
