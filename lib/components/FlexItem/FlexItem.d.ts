import type { CSSProperties, ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
export type FlexItemAlignSelf = 'auto' | 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
type FlexItemOwnProps<T extends ElementType> = {
    as?: T;
    order?: number;
    flex?: CSSProperties['flex'];
    flexGrow?: CSSProperties['flexGrow'];
    flexShrink?: CSSProperties['flexShrink'];
    flexBasis?: CSSProperties['flexBasis'];
    alignSelf?: FlexItemAlignSelf;
    style?: CSSProperties;
};
export type FlexItemProps<T extends ElementType = 'div'> = PropsWithChildren<FlexItemOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FlexItemOwnProps<T> | 'children'>>;
export declare function FlexItem<T extends ElementType = 'div'>({ as, order, flex, flexGrow, flexShrink, flexBasis, alignSelf, style, children, ...props }: FlexItemProps<T>): import("react/jsx-runtime").JSX.Element;
export default FlexItem;
//# sourceMappingURL=FlexItem.d.ts.map