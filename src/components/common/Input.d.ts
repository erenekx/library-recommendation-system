import React from 'react';
/**
 * Modern Input component with beautiful focus states
 *
 * @example
 * <Input
 *   label="Email"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   error={emailError}
 *   required
 * />
 */
export declare function Input({ label, error, required, className, ...props }: {
    [x: string]: any;
    label: any;
    error: any;
    required: any;
    className?: string | undefined;
}): React.JSX.Element;
