export type ComboboxProps = {
    label: string;
    placeholder: string;
    name: string;
    required: boolean;
    width: number;
    options: Array<string>;
    hasEmptyOption?: boolean;
    help: string;
    hint: string;
    disabled: boolean;
    multiple: boolean;
    customError: string;
    customErrorMessage?: string;
    onChange: (value: string) => void;
};
declare const Combobox: (props: ComboboxProps) => import("react/jsx-runtime").JSX.Element;
export default Combobox;
