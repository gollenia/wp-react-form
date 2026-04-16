import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
}>;
export default function Button({ children, className, variant, fullWidth, type, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map