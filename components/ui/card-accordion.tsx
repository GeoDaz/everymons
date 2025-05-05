import * as React from 'react';

import { cn } from '@/lib/utils';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './accordion';

const CardAccordion = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<Accordion type="single" collapsible>
		<AccordionItem
			value="item-1"
			ref={ref}
			className={cn(
				'card rounded-lg border bg-card text-card-foreground shadow-sm',
				className
			)}
			{...props}
		/>
	</Accordion>
));
CardAccordion.displayName = 'CardAccordion';

const CardAccordionHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<AccordionTrigger>
		<div
			ref={ref}
			className={cn('flex flex-col space-y-1.5 p-6', className)}
			{...props}
		/>
	</AccordionTrigger>
));
CardAccordionHeader.displayName = 'CardAccordionHeader';

const CardAccordionTitle = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('text-lg font-semibold mb-4', className)} {...props} />
));
CardAccordionTitle.displayName = 'CardAccordionTitle';

const CardAccordionDescription = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
));
CardAccordionDescription.displayName = 'CardAccordionDescription';

const CardAccordionContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<AccordionContent ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardAccordionContent.displayName = 'CardAccordionContent';

const CardAccordionFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardAccordionFooter.displayName = 'CardAccordionFooter';

export {
	CardAccordion,
	CardAccordionHeader,
	CardAccordionFooter,
	CardAccordionTitle,
	CardAccordionDescription,
	CardAccordionContent,
};
