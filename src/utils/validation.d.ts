/**
 * Validation utility functions
 */
/**
 * Validates an email address format
 * @param email - Email address to validate
 * @returns True if email is valid, false otherwise
 */
export declare function validateEmail(email: any): boolean;
/**
 * Validates password strength
 * @param password - Password to validate
 * @returns True if password meets requirements (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
 */
export declare function validatePassword(password: any): boolean;
/**
 * Validates that a field is not empty
 * @param value - Value to validate
 * @returns True if value is not empty, false otherwise
 */
export declare function validateRequired(value: any): boolean;
