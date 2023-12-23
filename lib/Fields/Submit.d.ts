type Props = {
    label: string;
    width: number;
    alignment: 'left' | 'center' | 'right';
    disabled: boolean;
};
declare const Submit: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        label: string;
        width: number;
    };
};
export default Submit;
