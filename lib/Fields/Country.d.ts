type CountryProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    region: 'world' | 'europe' | 'german' | 'english' | 'spanish' | 'french' | 'asia' | 'africa' | 'oceania' | 'americas';
    emptyOption: string;
    disabled: boolean;
    customError: string;
    onChange: (value: string) => void;
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
