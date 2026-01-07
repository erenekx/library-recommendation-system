/**
 * ============================================================================
 * MOCK DATA FOR DEVELOPMENT
 * ============================================================================
 *
 * ⚠️ IMPORTANT FOR AI ASSISTANTS AND DEVELOPERS:
 * This file contains ALL mock data used in the application during development.
 * When implementing the AWS backend, you should:
 *
 * 1. REMOVE all mock data from this file
 * 2. UPDATE src/services/api.ts to call real AWS Lambda functions
 * 3. LOAD this data into DynamoDB tables for initial testing
 * 4. DELETE this file once backend integration is complete
 *
 * ============================================================================
 * MOCK DATA LOCATIONS IN THE APPLICATION:
 * ============================================================================
 *
 * This mock data is currently used in:
 * - src/services/api.ts (all API functions return mock data)
 * - src/pages/Books.tsx (displays mockBooks)
 * - src/pages/BookDetail.tsx (finds book from mockBooks)
 * - src/pages/ReadingLists.tsx (displays mockReadingLists)
 * - src/pages/Admin.tsx (uses mockBooks for admin operations)
 *
 * ============================================================================
 * HOW TO REPLACE MOCK DATA WITH REAL API:
 * ============================================================================
 *
 * Step 1: Deploy DynamoDB tables using CDK (see infrastructure/lib/database-stack.ts)
 * Step 2: Load this data into DynamoDB using AWS CLI or Lambda function
 * Step 3: Deploy Lambda functions (see infrastructure/lambda/)
 * Step 4: Update src/services/api.ts to call Lambda via API Gateway
 * Step 5: Remove mock data returns from api.ts functions
 * Step 6: Test each endpoint individually
 * Step 7: Delete this file
 *
 * ============================================================================
 * DATA STRUCTURE NOTES:
 * ============================================================================
 *
 * - Book IDs: Simple numeric strings ('1', '2', etc.) - replace with UUIDs in production
 * - Dates: ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
 * - Ratings: Float between 0.0 and 5.0
 * - Cover Images: Relative paths to /public/book-covers/ directory
 * - ISBNs: ISBN-13 format (978-XXXXXXXXXX)
 *
 * ============================================================================
 */
/**
 * MOCK BOOKS DATA
 *
 * This array contains 10 sample books across different genres.
 *
 * TO LOAD INTO DYNAMODB:
 * Use the AWS CLI or create a Lambda function to batch write these items:
 *
 * ```bash
 * aws dynamodb batch-write-item --request-items file://books-data.json
 * ```
 *
 * TO REPLACE IN CODE:
 * Update src/services/api.ts getBooks() function to call:
 * GET /books endpoint (Lambda function: get-books)
 */
export declare const mockBooks: {
    id: string;
    title: string;
    author: string;
    genre: string;
    description: string;
    coverImage: string;
    rating: number;
    publishedYear: number;
    isbn: string;
}[];
/**
 * MOCK USERS DATA
 *
 * This array contains sample users for testing authentication and authorization.
 *
 * ⚠️ IN PRODUCTION: Users will be managed by Amazon Cognito, NOT DynamoDB
 *
 * DO NOT load this into DynamoDB. Instead:
 * 1. Set up Cognito User Pool (see infrastructure/lib/auth-stack.ts)
 * 2. Create test users via Cognito Console or AWS CLI
 * 3. User authentication will be handled by Cognito
 * 4. User profile data (name, role) can be stored in DynamoDB separately
 *
 * TO REPLACE IN CODE:
 * Update src/contexts/AuthContext.tsx to use AWS Amplify Auth:
 * - Auth.signIn() for login
 * - Auth.signUp() for registration
 * - Auth.currentAuthenticatedUser() for getting current user
 */
export declare const mockUsers: {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
}[];
/**
 * MOCK READING LISTS DATA
 *
 * This array contains sample reading lists for testing list management features.
 *
 * TO LOAD INTO DYNAMODB:
 * Use the AWS CLI or create a Lambda function to batch write these items:
 *
 * ```bash
 * aws dynamodb batch-write-item --request-items file://reading-lists-data.json
 * ```
 *
 * DYNAMODB TABLE STRUCTURE:
 * - Partition Key: userId (string)
 * - Sort Key: id (string)
 * - GSI: id-index (for querying by list ID)
 *
 * TO REPLACE IN CODE:
 * Update src/services/api.ts reading list functions to call:
 * - GET /reading-lists (Lambda: get-reading-lists)
 * - POST /reading-lists (Lambda: create-reading-list)
 * - PUT /reading-lists/:id (Lambda: update-reading-list)
 * - DELETE /reading-lists/:id (Lambda: delete-reading-list)
 */
export declare const mockReadingLists: {
    id: string;
    userId: string;
    name: string;
    description: string;
    bookIds: string[];
    createdAt: string;
    updatedAt: string;
}[];
