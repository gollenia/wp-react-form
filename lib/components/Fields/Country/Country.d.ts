import type { CountryRegion, FieldValue } from '../../../types';
type CountryProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    region: CountryRegion;
    disabled: boolean;
    customError: string;
    help?: string;
    formTouched: boolean;
    customErrorMessage?: string;
    error?: string;
    onChange: (value: FieldValue) => void;
    value: string;
};
declare const Country: {
    (props: CountryProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        placeholder: string;
        name: string;
        required: boolean;
        width: number;
        region: string;
    };
};
export default Country;
export type { CountryProps };
//# sourceMappingURL=Country.d.ts.map