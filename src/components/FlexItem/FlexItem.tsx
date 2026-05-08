import type {
	CSSProperties,
	ComponentPropsWithoutRef,
	ElementType,
	PropsWithChildren,
} from 'react';

export type FlexItemAlignSelf =
	| 'auto'
	| 'stretch'
	| 'flex-start'
	| 'center'
	| 'flex-end'
	| 'baseline';

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

export type FlexItemProps<T extends ElementType = 'div'> = PropsWithChildren<
	FlexItemOwnProps<T> &
		Omit<ComponentPropsWithoutRef<T>, keyof FlexItemOwnProps<T> | 'children'>
>;

export function FlexItem<T extends ElementType = 'div'>({
	as,
	order,
	flex,
	flexGrow,
	flexShrink,
	flexBasis,
	alignSelf,
	style,
	children,
	...props
}: FlexItemProps<T>) {
	const Component = (as ?? 'div') as ElementType;
	const flexStyle =
		flex === undefined
			? {
					flexGrow,
					flexShrink,
					flexBasis,
				}
			: { flex };

	return (
		<Component
			{...props}
			style={{
				order,
				...flexStyle,
				alignSelf,
				...style,
			}}
		>
			{children}
		</Component>
	);
}

export default FlexItem;
