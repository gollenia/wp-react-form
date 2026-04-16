import type { ReactNode, Ref } from 'react';
type FieldWrapperProps = {
    children: ReactNode;
    className?: string;
    label?: string;
    required?: boolean;
    labelFor?: string;
    containerRef?: Ref<HTMLDivElement>;
    hint?: string;
    hintId?: string;
    help?: string;
    helpHtml?: string;
    helpId?: string;
    errorMessage?: string;
    errorId: string;
    hasError?: boolean;
};
declare const FieldWrapper: ({ children, className, label, required, labelFor, containerRef, hint, hintId, help, helpHtml, helpId, errorMessage, errorId, hasError, }: FieldWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default FieldWrapper;
export type { FieldWrapperProps };
//# sourceMappingURL=FieldWrapper.d.ts.map