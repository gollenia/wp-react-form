import { Accordion } from '@base-ui/react/accordion';
import type { ReactNode } from 'react';

export type FormAccordionValue = string;

export type FormAccordionProps = {
	children: ReactNode;
	value?: FormAccordionValue[];
	defaultValue?: FormAccordionValue[];
	onValueChange?: (value: FormAccordionValue[]) => void;
	multiple?: boolean;
	disabled?: boolean;
	keepMounted?: boolean;
	hiddenUntilFound?: boolean;
	loopFocus?: boolean;
	className?: string;
};

export type FormAccordionSectionProps = {
	id: FormAccordionValue;
	title: ReactNode;
	children: ReactNode;
	completed?: boolean;
	disabled?: boolean;
	completedIndicator?: ReactNode;
	className?: string;
	headerClassName?: string;
	triggerClassName?: string;
	panelClassName?: string;
	contentClassName?: string;
};

function classNames(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ');
}

function DefaultCompletedIndicator() {
	return (
		<span
			className="ctx2-form-accordion__completed-indicator"
			aria-hidden="true"
		/>
	);
}

function FormAccordionRoot({
	children,
	value,
	defaultValue,
	onValueChange,
	multiple = false,
	disabled = false,
	keepMounted = false,
	hiddenUntilFound = false,
	loopFocus = true,
	className,
}: FormAccordionProps) {
	return (
		<Accordion.Root
			className={classNames('ctx2-form-accordion', className)}
			value={value}
			defaultValue={defaultValue}
			onValueChange={(nextValue) => onValueChange?.(nextValue)}
			multiple={multiple}
			disabled={disabled}
			keepMounted={keepMounted}
			hiddenUntilFound={hiddenUntilFound}
			loopFocus={loopFocus}
		>
			{children}
		</Accordion.Root>
	);
}

export function FormAccordionSection({
	id,
	title,
	children,
	completed = false,
	disabled = false,
	completedIndicator,
	className,
	headerClassName,
	triggerClassName,
	panelClassName,
	contentClassName,
}: FormAccordionSectionProps) {
	return (
		<Accordion.Item
			value={id}
			disabled={disabled}
			className={(state) =>
				classNames(
					'ctx2-form-accordion__section',
					state.open && 'ctx2-form-accordion__section--open',
					completed && 'ctx2-form-accordion__section--completed',
					disabled && 'ctx2-form-accordion__section--disabled',
					className,
				)
			}
			data-completed={completed ? '' : undefined}
		>
			<Accordion.Header
				className={(state) =>
					classNames(
						'ctx2-form-accordion__header-wrap',
						state.open && 'ctx2-form-accordion__header-wrap--open',
						headerClassName,
					)
				}
			>
				<Accordion.Trigger
					className={classNames(
						'ctx2-form-accordion__header',
						triggerClassName,
					)}
					disabled={disabled}
				>
					{completed &&
						(completedIndicator ?? <DefaultCompletedIndicator />)}
					<span className="ctx2-form-accordion__title">{title}</span>
					<span
						className="ctx2-form-accordion__chevron"
						aria-hidden="true"
					/>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Panel
				className={classNames(
					'ctx2-form-accordion__content',
					panelClassName,
				)}
			>
				<div
					className={classNames(
						'ctx2-form-accordion__content-inner',
						contentClassName,
					)}
				>
					{children}
				</div>
			</Accordion.Panel>
		</Accordion.Item>
	);
}

export type FormAccordionComponent = typeof FormAccordionRoot & {
	Section: typeof FormAccordionSection;
};

export const FormAccordion: FormAccordionComponent = Object.assign(
	FormAccordionRoot,
	{
		Section: FormAccordionSection,
	},
);

export default FormAccordion;
