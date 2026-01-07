/**
 * Utility functions for formatting data
 */
/**
 * Formats an ISO date string to a readable format
 * @param isoString - ISO 8601 date string
 * @returns Formatted date string (e.g., "Jan 15, 2024")
 */
export function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}
/**
 * Formats a rating to one decimal place
 * @param rating - Numeric rating value
 * @returns Formatted rating string (e.g., "4.5")
 */
export function formatRating(rating) {
    return rating.toFixed(1);
}
/**
 * Truncates text to a specified length and adds ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength).trim() + '...';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm1hdHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxTQUFpQjtJQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7UUFDdEMsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsT0FBTztRQUNkLEdBQUcsRUFBRSxTQUFTO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQWM7SUFDekMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBWSxFQUFFLFNBQWlCO0lBQzFELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZm9ybWF0dGluZyBkYXRhXG4gKi9cblxuLyoqXG4gKiBGb3JtYXRzIGFuIElTTyBkYXRlIHN0cmluZyB0byBhIHJlYWRhYmxlIGZvcm1hdFxuICogQHBhcmFtIGlzb1N0cmluZyAtIElTTyA4NjAxIGRhdGUgc3RyaW5nXG4gKiBAcmV0dXJucyBGb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgKGUuZy4sIFwiSmFuIDE1LCAyMDI0XCIpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlzb1N0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb1N0cmluZyk7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgIGRheTogJ251bWVyaWMnLFxuICB9KTtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgcmF0aW5nIHRvIG9uZSBkZWNpbWFsIHBsYWNlXG4gKiBAcGFyYW0gcmF0aW5nIC0gTnVtZXJpYyByYXRpbmcgdmFsdWVcbiAqIEByZXR1cm5zIEZvcm1hdHRlZCByYXRpbmcgc3RyaW5nIChlLmcuLCBcIjQuNVwiKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmF0aW5nKHJhdGluZzogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJhdGluZy50b0ZpeGVkKDEpO1xufVxuXG4vKipcbiAqIFRydW5jYXRlcyB0ZXh0IHRvIGEgc3BlY2lmaWVkIGxlbmd0aCBhbmQgYWRkcyBlbGxpcHNpc1xuICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHRydW5jYXRlXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIC0gTWF4aW11bSBsZW5ndGggYmVmb3JlIHRydW5jYXRpb25cbiAqIEByZXR1cm5zIFRydW5jYXRlZCB0ZXh0IHdpdGggZWxsaXBzaXMgaWYgbmVlZGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZVRleHQodGV4dDogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICh0ZXh0Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICByZXR1cm4gdGV4dC5zbGljZSgwLCBtYXhMZW5ndGgpLnRyaW0oKSArICcuLi4nO1xufVxuIl19