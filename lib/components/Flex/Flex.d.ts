import type { ComponentPropsWithoutRef, CSSProperties, ElementType, PropsWithChildren } from 'react';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexAlign = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
export type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexOwnProps<T extends ElementType> = {
    as?: T;
    direction?: FlexDirection;
    collapsedDirection?: Extract<FlexDirection, 'column' | 'column-reverse'>;
    align?: FlexAlign;
    justify?: FlexJustify;
    wrap?: FlexWrap;
    collapse?: boolean;
    gap?: CSSProperties['gap'];
    inline?: boolean;
    className?: string;
    style?: CSSProperties;
};
export type FlexProps<T extends ElementType = 'div'> = PropsWithChildren<FlexOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FlexOwnProps<T> | 'children'>>;
export declare function Flex<T extends ElementType = 'div'>({ as, children, direction, collapsedDirection, align, justify, wrap, collapse, gap, inline, className: passedClassName, style, ...props }: FlexProps<T>): import("react/jsx-runtime").JSX.Element;
export default Flex;
//# sourceMappingURL=Flex.d.ts.map