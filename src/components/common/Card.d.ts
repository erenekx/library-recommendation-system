import React from 'react';
/**
 * Modern Card component with glass morphism and gradient effects
 *
 * @example
 * <Card hoverable gradient onClick={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 */
export declare function Card({ children, hoverable, gradient, onClick, className, }: {
    children: any;
    hoverable?: boolean | undefined;
    gradient?: boolean | undefined;
    onClick: any;
    className?: string | undefined;
}): React.JSX.Element;
