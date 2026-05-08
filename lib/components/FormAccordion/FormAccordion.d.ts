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
declare function FormAccordionRoot({ children, value, defaultValue, onValueChange, multiple, disabled, keepMounted, hiddenUntilFound, loopFocus, className, }: FormAccordionProps): import("react/jsx-runtime").JSX.Element;
export declare function FormAccordionSection({ id, title, children, completed, disabled, completedIndicator, className, headerClassName, triggerClassName, panelClassName, contentClassName, }: FormAccordionSectionProps): import("react/jsx-runtime").JSX.Element;
export type FormAccordionComponent = typeof FormAccordionRoot & {
    Section: typeof FormAccordionSection;
};
export declare const FormAccordion: FormAccordionComponent;
export default FormAccordion;
//# sourceMappingURL=FormAccordion.d.ts.map