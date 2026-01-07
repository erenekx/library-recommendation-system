import React from 'react';
/**
 * Modern Button component with beautiful gradients and animations
 *
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click Me
 * </Button>
 */
export declare function Button({ variant, size, children, className, disabled, ...props }: {
    [x: string]: any;
    variant?: string | undefined;
    size?: string | undefined;
    children: any;
    className?: string | undefined;
    disabled: any;
}): React.JSX.Element;
