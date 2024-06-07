import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils/cn';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, name, onChange, value, label, ...props }, ref) => (
  <div className='flex items-start justify-start'>
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer mr-3 h-6 w-6 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-500 data-[state=checked]:text-primary-foreground',
        className,
      )}
      {...props}
      onChange={onChange}
      value={value}
      name={name}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon color="#fff" className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    { label && (<label>{label}</label>)}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
