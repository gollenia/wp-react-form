import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type Props = PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement> & {
		variant?: ButtonVariant;
		fullWidth?: boolean;
	}
>;

export default function Button({
	children,
	className = '',
	variant = 'primary',
	fullWidth = false,
	type = 'button',
	...props
}: Props) {
	const classes = [
		'ctx2-button',
		`ctx2-button--${variant}`,
		fullWidth ? 'ctx2-button--full-width' : '',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button type={type} className={classes} {...props}>
			{children}
		</button>
	);
}
