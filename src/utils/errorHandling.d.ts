/**
 * Error handling utilities
 */
/**
 * Handles API errors and displays user-friendly messages
 *
 * TODO: Integrate with a proper toast notification library
 * Recommended: react-hot-toast or react-toastify
 *
 * Installation: npm install react-hot-toast
 * Usage: import toast from 'react-hot-toast';
 *        toast.error(message);
 */
export declare function handleApiError(error: any): void;
/**
 * Shows a success message to the user
 *
 * TODO: Replace with toast.success(message)
 */
export declare function showSuccess(message: any): void;
