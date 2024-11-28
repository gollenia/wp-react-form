type CountryProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    region: 'world' | 'europe' | 'german' | 'english' | 'spanish' | 'french' | 'asia' | 'africa' | 'oceania' | 'americas';
    disabled: boolean;
    customError: string;
    help: string;
    formTouched: boolean;
    customErrorMessage?: string;
    onChange: (value: string) => void;
    value: string;
};
declare const Country: (props: CountryProps) => import("react/jsx-runtime").JSX.Element;
export default Country;
export type { CountryProps };
