import type { ReactNode } from 'react';
import type { FieldValue } from '../../../types';
export type RadioCardOption = {
    value: string;
    title: string;
    description?: string;
    disabled?: boolean;
    icon?: ReactNode;
    note?: string;
};
export type RadioCardsProps = {
    label?: string;
    name?: string;
    required?: boolean;
    width?: number;
    options?: RadioCardOption[];
    disabled?: boolean;
    help?: string;
    error?: string;
    customErrorMessage?: string;
    formTouched?: boolean;
    onChange: (value: FieldValue) => void;
    value: string;
};
declare const RadioCards: (props: RadioCardsProps) => import("react/jsx-runtime").JSX.Element;
export default RadioCards;
//# sourceMappingURL=RadioCards.d.ts.map