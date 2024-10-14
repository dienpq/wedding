import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const TextElementMap = {
  default: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h6',
  h6: 'h6',
};

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      h1: 'font-bold text-4xl',
      h2: 'font-bold text-3xl',
      h3: 'font-semibold text-2xl',
      h4: 'font-semibold text-xl',
      h5: 'font-medium text-lg',
      h6: 'font-light text-sm',
    },
    font: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    font: 'default',
  },
});

export interface TypographyProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : TextElementMap[variant || 'default'];

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
