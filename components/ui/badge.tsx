import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import types from '@/json/types.json';
import { typeColors } from '@/lib/types';
import { Type, TypeDict } from '@/types/Type';

// const getTypeTextColor = (type: Type) =>
// 	typeBrightness[type] === 'light' ? 'slate-950' : 'slate-50';

export const badgeVariants = cva(
	'inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors',
	{
		variants: {
			variant: {
				default: 'border-transparent rounded bg-muted',
				secondary: 'border-transparent rounded bg-primary/10',
				tertiary: 'border-transparent rounded bg-muted text-muted-foreground',
				outline: 'border-slate-400 rounded-full',
				...types.reduce((acc, t) => {
					const type = t as Type;
					const color = typeColors[type];
					// const textColor = getTypeTextColor(type);
					// prettier-ignore
					acc[type] = `border-transparent rounded-full bg-${color} text-slate-50`; //text-${textColor}
					return acc;
				}, {} as TypeDict),
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

export default function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
