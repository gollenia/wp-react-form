type SubmitProps = {
    label: string;
    width: number;
    alignment: 'left' | 'center' | 'right';
    disabled: boolean;
    placeholder?: string;
    type?: 'submit' | 'button' | 'reset';
};
declare const Submit: {
    (props: SubmitProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        width: number;
    };
};
export default Submit;
//# sourceMappingURL=Submit.d.ts.map