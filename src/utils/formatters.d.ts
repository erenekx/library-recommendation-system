/**
 * Utility functions for formatting data
 */
/**
 * Formats an ISO date string to a readable format
 * @param isoString - ISO 8601 date string
 * @returns Formatted date string (e.g., "Jan 15, 2024")
 */
export declare function formatDate(isoString: any): string;
/**
 * Formats a rating to one decimal place
 * @param rating - Numeric rating value
 * @returns Formatted rating string (e.g., "4.5")
 */
export declare function formatRating(rating: any): any;
/**
 * Truncates text to a specified length and adds ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export declare function truncateText(text: any, maxLength: any): any;
