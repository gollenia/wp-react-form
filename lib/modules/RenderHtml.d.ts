export type RenderHtmlProps = {
    tag?: Tag;
    id?: string;
    className?: string;
    role?: string;
    html: string;
    style?: React.CSSProperties;
};
type Tag = keyof JSX.IntrinsicElements;
export declare const sanitizeInlineHtml: (html: string) => string;
export declare const sanitizeHtml: (html: string) => string;
export declare const RenderHtml: ({ html, tag: Tag, id, className, role, style, }: RenderHtmlProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RenderHtml.d.ts.map