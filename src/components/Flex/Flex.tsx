import type {
	ComponentPropsWithoutRef,
	CSSProperties,
	ElementType,
	PropsWithChildren,
} from 'react';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexAlign =
	| 'stretch'
	| 'flex-start'
	| 'center'
	| 'flex-end'
	| 'baseline';

export type FlexJustify =
	| 'flex-start'
	| 'center'
	| 'flex-end'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

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

export type FlexProps<T extends ElementType = 'div'> = PropsWithChildren<
	FlexOwnProps<T> &
		Omit<ComponentPropsWithoutRef<T>, keyof FlexOwnProps<T> | 'children'>
>;

export function Flex<T extends ElementType = 'div'>({
	as,
	children,
	direction = 'row',
	collapsedDirection = 'column',
	align = 'stretch',
	justify = 'flex-start',
	wrap = 'nowrap',
	collapse = true,
	gap,
	inline = false,
	className: passedClassName,
	style,
	...props
}: FlexProps<T>) {
	const Component = (as ?? 'div') as ElementType;
	const className = [
		'ctx2-flex',
		collapse && 'ctx2-flex--collapse',
		passedClassName,
	]
		.filter(Boolean)
		.join(' ');
	const flexStyle = {
		'--ctx2-flex-direction': direction,
		'--ctx2-flex-collapsed-direction': collapsedDirection,
		...style,
	} as CSSProperties;

	return (
		<Component
			{...props}
			className={className}
			style={{
				display: inline ? 'inline-flex' : 'flex',
				alignItems: align,
				justifyContent: justify,
				flexWrap: wrap,
				gap,
				...flexStyle,
			}}
		>
			{children}
		</Component>
	);
}

export default Flex;
