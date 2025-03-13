import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils'; // Utility function for class merging

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; // If using Radix Slot for composability
  size?: 'sm' | 'md' | 'lg'; // Predefined sizes
  innerClassname?: string;
}

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    { children, className, innerClassname, asChild, size = 'md', ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          'gradient z-50 group inline-flex items-center justify-center rounded-full p-[2px]',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'rounded-full bg-black text-white',
            sizeClasses[size],
            innerClassname,
          )}
        >
          {children}
        </div>
      </Comp>
    );
  },
);

GradientButton.displayName = 'GradientButton';
