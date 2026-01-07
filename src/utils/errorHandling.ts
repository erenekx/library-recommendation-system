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
export function handleApiError(error) {
    let message = 'An unexpected error occurred';
    if (error instanceof Error) {
        message = error.message;
    }
    else if (typeof error === 'string') {
        message = error;
    }
    // For now, use alert (replace with toast notification)
    alert(`Error: ${message}`);
    console.error('API Error:', error);
}
/**
 * Shows a success message to the user
 *
 * TODO: Replace with toast.success(message)
 */
export function showSuccess(message) {
    alert(`Success: ${message}`);
    console.log('Success:', message);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9ySGFuZGxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQWM7SUFDM0MsSUFBSSxPQUFPLEdBQUcsOEJBQThCLENBQUM7SUFFN0MsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7UUFDM0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDckMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNsQixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELEtBQUssQ0FBQyxVQUFVLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQWU7SUFDekMsS0FBSyxDQUFDLFlBQVksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFcnJvciBoYW5kbGluZyB1dGlsaXRpZXNcbiAqL1xuXG4vKipcbiAqIEhhbmRsZXMgQVBJIGVycm9ycyBhbmQgZGlzcGxheXMgdXNlci1mcmllbmRseSBtZXNzYWdlc1xuICpcbiAqIFRPRE86IEludGVncmF0ZSB3aXRoIGEgcHJvcGVyIHRvYXN0IG5vdGlmaWNhdGlvbiBsaWJyYXJ5XG4gKiBSZWNvbW1lbmRlZDogcmVhY3QtaG90LXRvYXN0IG9yIHJlYWN0LXRvYXN0aWZ5XG4gKlxuICogSW5zdGFsbGF0aW9uOiBucG0gaW5zdGFsbCByZWFjdC1ob3QtdG9hc3RcbiAqIFVzYWdlOiBpbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbiAqICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFwaUVycm9yKGVycm9yOiB1bmtub3duKTogdm9pZCB7XG4gIGxldCBtZXNzYWdlID0gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgIG1lc3NhZ2UgPSBlcnJvcjtcbiAgfVxuXG4gIC8vIEZvciBub3csIHVzZSBhbGVydCAocmVwbGFjZSB3aXRoIHRvYXN0IG5vdGlmaWNhdGlvbilcbiAgYWxlcnQoYEVycm9yOiAke21lc3NhZ2V9YCk7XG4gIGNvbnNvbGUuZXJyb3IoJ0FQSSBFcnJvcjonLCBlcnJvcik7XG59XG5cbi8qKlxuICogU2hvd3MgYSBzdWNjZXNzIG1lc3NhZ2UgdG8gdGhlIHVzZXJcbiAqXG4gKiBUT0RPOiBSZXBsYWNlIHdpdGggdG9hc3Quc3VjY2VzcyhtZXNzYWdlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGFsZXJ0KGBTdWNjZXNzOiAke21lc3NhZ2V9YCk7XG4gIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIG1lc3NhZ2UpO1xufVxuIl19