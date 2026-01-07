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
export const mockBooks = [
    {
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Fiction',
        description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
        coverImage: '/book-covers/midnight-library.jpg',
        rating: 4.5,
        publishedYear: 2020,
        isbn: '978-0525559474',
    },
    {
        id: '2',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        genre: 'Science Fiction',
        description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the author of The Martian.',
        coverImage: '/book-covers/project-hail-mary.jpg',
        rating: 4.8,
        publishedYear: 2021,
        isbn: '978-0593135204',
    },
    {
        id: '3',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        genre: 'Mystery',
        description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house. One evening her husband returns home late, and Alicia shoots him five times in the face, and then never speaks another word.",
        coverImage: '/book-covers/silent-patient.jpg',
        rating: 4.3,
        publishedYear: 2019,
        isbn: '978-1250301697',
    },
    {
        id: '4',
        title: 'People We Meet on Vacation',
        author: 'Emily Henry',
        genre: 'Romance',
        description: 'Two best friends. Ten summer trips. One last chance to fall in love.',
        coverImage: '/book-covers/people-we-meet.jpg',
        rating: 4.2,
        publishedYear: 2021,
        isbn: '978-1984806758',
    },
    {
        id: '5',
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Non-Fiction',
        description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.',
        coverImage: '/book-covers/atomic-habits.jpg',
        rating: 4.7,
        publishedYear: 2018,
        isbn: '978-0735211292',
    },
    {
        id: '6',
        title: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        genre: 'Fiction',
        description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.',
        coverImage: '/book-covers/evelyn-hugo.jpg',
        rating: 4.6,
        publishedYear: 2017,
        isbn: '978-1501161933',
    },
    {
        id: '7',
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.',
        coverImage: '/book-covers/dune.jpg',
        rating: 4.4,
        publishedYear: 1965,
        isbn: '978-0441172719',
    },
    {
        id: '8',
        title: 'The Thursday Murder Club',
        author: 'Richard Osman',
        genre: 'Mystery',
        description: 'Four unlikely friends meet weekly to investigate unsolved killings. But when a local developer is found dead, these unorthodox detectives find themselves in the middle of their first live case.',
        coverImage: '/book-covers/thursday-murder-club.jpg',
        rating: 4.1,
        publishedYear: 2020,
        isbn: '978-1984880987',
    },
    {
        id: '9',
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Non-Fiction',
        description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
        coverImage: '/book-covers/educated.jpg',
        rating: 4.5,
        publishedYear: 2018,
        isbn: '978-0399590504',
    },
    {
        id: '10',
        title: 'The Song of Achilles',
        author: 'Madeline Miller',
        genre: 'Fiction',
        description: "A tale of gods, kings, immortal fame and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer's enduring masterwork, The Iliad.",
        coverImage: '/book-covers/song-of-achilles.jpg',
        rating: 4.6,
        publishedYear: 2011,
        isbn: '978-0062060624',
    },
];
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
export const mockUsers = [
    {
        id: '1',
        email: 'john.doe@example.com',
        name: 'John Doe',
        role: 'user',
        createdAt: '2024-01-15T10:00:00Z',
    },
    {
        id: '2',
        email: 'admin@library.com',
        name: 'Admin User',
        role: 'admin',
        createdAt: '2024-01-01T10:00:00Z',
    },
];
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
export const mockReadingLists = [
    {
        id: '1',
        userId: '1',
        name: 'Summer Reading 2024',
        description: 'Books to read during summer vacation',
        bookIds: ['1', '2', '4'],
        createdAt: '2024-06-01T10:00:00Z',
        updatedAt: '2024-06-15T14:30:00Z',
    },
    {
        id: '2',
        userId: '1',
        name: 'Sci-Fi Favorites',
        description: 'My favorite science fiction novels',
        bookIds: ['2', '7'],
        createdAt: '2024-05-10T10:00:00Z',
        updatedAt: '2024-05-10T10:00:00Z',
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja0RhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2NrRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RHO0FBRUg7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFXO0lBQy9CO1FBQ0UsRUFBRSxFQUFFLEdBQUc7UUFDUCxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFdBQVcsRUFDVCx1S0FBdUs7UUFDekssVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxNQUFNLEVBQUUsR0FBRztRQUNYLGFBQWEsRUFBRSxJQUFJO1FBQ25CLElBQUksRUFBRSxnQkFBZ0I7S0FDdkI7SUFDRDtRQUNFLEVBQUUsRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixNQUFNLEVBQUUsV0FBVztRQUNuQixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFdBQVcsRUFDVCxrSUFBa0k7UUFDcEksVUFBVSxFQUFFLG9DQUFvQztRQUNoRCxNQUFNLEVBQUUsR0FBRztRQUNYLGFBQWEsRUFBRSxJQUFJO1FBQ25CLElBQUksRUFBRSxnQkFBZ0I7S0FDdkI7SUFDRDtRQUNFLEVBQUUsRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFdBQVcsRUFDVCxzUUFBc1E7UUFDeFEsVUFBVSxFQUFFLGlDQUFpQztRQUM3QyxNQUFNLEVBQUUsR0FBRztRQUNYLGFBQWEsRUFBRSxJQUFJO1FBQ25CLElBQUksRUFBRSxnQkFBZ0I7S0FDdkI7SUFDRDtRQUNFLEVBQUUsRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQyxNQUFNLEVBQUUsYUFBYTtR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RUFBRSxxQkFBcUI7UUFDM0IsV0FBVyxFQUFFLHNDQUFzQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN4QixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEM7SUFDRDtRQUNFLEVBQUUsRUFBRSxHQUFHO1FBQ1AsTUFBTSxFQUFFLEdBQUc7UUFDWCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNuQixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vaywgVXNlciwgUmVhZGluZ0xpc3QgfSBmcm9tICdAL3R5cGVzJztcblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBNT0NLIERBVEEgRk9SIERFVkVMT1BNRU5UXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICog4pqg77iPIElNUE9SVEFOVCBGT1IgQUkgQVNTSVNUQU5UUyBBTkQgREVWRUxPUEVSUzpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBBTEwgbW9jayBkYXRhIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGR1cmluZyBkZXZlbG9wbWVudC5cbiAqIFdoZW4gaW1wbGVtZW50aW5nIHRoZSBBV1MgYmFja2VuZCwgeW91IHNob3VsZDpcbiAqXG4gKiAxLiBSRU1PVkUgYWxsIG1vY2sgZGF0YSBmcm9tIHRoaXMgZmlsZVxuICogMi4gVVBEQVRFIHNyYy9zZXJ2aWNlcy9hcGkudHMgdG8gY2FsbCByZWFsIEFXUyBMYW1iZGEgZnVuY3Rpb25zXG4gKiAzLiBMT0FEIHRoaXMgZGF0YSBpbnRvIER5bmFtb0RCIHRhYmxlcyBmb3IgaW5pdGlhbCB0ZXN0aW5nXG4gKiA0LiBERUxFVEUgdGhpcyBmaWxlIG9uY2UgYmFja2VuZCBpbnRlZ3JhdGlvbiBpcyBjb21wbGV0ZVxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIE1PQ0sgREFUQSBMT0NBVElPTlMgSU4gVEhFIEFQUExJQ0FUSU9OOlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIFRoaXMgbW9jayBkYXRhIGlzIGN1cnJlbnRseSB1c2VkIGluOlxuICogLSBzcmMvc2VydmljZXMvYXBpLnRzIChhbGwgQVBJIGZ1bmN0aW9ucyByZXR1cm4gbW9jayBkYXRhKVxuICogLSBzcmMvcGFnZXMvQm9va3MudHN4IChkaXNwbGF5cyBtb2NrQm9va3MpXG4gKiAtIHNyYy9wYWdlcy9Cb29rRGV0YWlsLnRzeCAoZmluZHMgYm9vayBmcm9tIG1vY2tCb29rcylcbiAqIC0gc3JjL3BhZ2VzL1JlYWRpbmdMaXN0cy50c3ggKGRpc3BsYXlzIG1vY2tSZWFkaW5nTGlzdHMpXG4gKiAtIHNyYy9wYWdlcy9BZG1pbi50c3ggKHVzZXMgbW9ja0Jvb2tzIGZvciBhZG1pbiBvcGVyYXRpb25zKVxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEhPVyBUTyBSRVBMQUNFIE1PQ0sgREFUQSBXSVRIIFJFQUwgQVBJOlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIFN0ZXAgMTogRGVwbG95IER5bmFtb0RCIHRhYmxlcyB1c2luZyBDREsgKHNlZSBpbmZyYXN0cnVjdHVyZS9saWIvZGF0YWJhc2Utc3RhY2sudHMpXG4gKiBTdGVwIDI6IExvYWQgdGhpcyBkYXRhIGludG8gRHluYW1vREIgdXNpbmcgQVdTIENMSSBvciBMYW1iZGEgZnVuY3Rpb25cbiAqIFN0ZXAgMzogRGVwbG95IExhbWJkYSBmdW5jdGlvbnMgKHNlZSBpbmZyYXN0cnVjdHVyZS9sYW1iZGEvKVxuICogU3RlcCA0OiBVcGRhdGUgc3JjL3NlcnZpY2VzL2FwaS50cyB0byBjYWxsIExhbWJkYSB2aWEgQVBJIEdhdGV3YXlcbiAqIFN0ZXAgNTogUmVtb3ZlIG1vY2sgZGF0YSByZXR1cm5zIGZyb20gYXBpLnRzIGZ1bmN0aW9uc1xuICogU3RlcCA2OiBUZXN0IGVhY2ggZW5kcG9pbnQgaW5kaXZpZHVhbGx5XG4gKiBTdGVwIDc6IERlbGV0ZSB0aGlzIGZpbGVcbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBEQVRBIFNUUlVDVFVSRSBOT1RFUzpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiAtIEJvb2sgSURzOiBTaW1wbGUgbnVtZXJpYyBzdHJpbmdzICgnMScsICcyJywgZXRjLikgLSByZXBsYWNlIHdpdGggVVVJRHMgaW4gcHJvZHVjdGlvblxuICogLSBEYXRlczogSVNPIDg2MDEgZm9ybWF0IChZWVlZLU1NLUREVEhIOm1tOnNzWilcbiAqIC0gUmF0aW5nczogRmxvYXQgYmV0d2VlbiAwLjAgYW5kIDUuMFxuICogLSBDb3ZlciBJbWFnZXM6IFJlbGF0aXZlIHBhdGhzIHRvIC9wdWJsaWMvYm9vay1jb3ZlcnMvIGRpcmVjdG9yeVxuICogLSBJU0JOczogSVNCTi0xMyBmb3JtYXQgKDk3OC1YWFhYWFhYWFhYKVxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIE1PQ0sgQk9PS1MgREFUQVxuICpcbiAqIFRoaXMgYXJyYXkgY29udGFpbnMgMTAgc2FtcGxlIGJvb2tzIGFjcm9zcyBkaWZmZXJlbnQgZ2VucmVzLlxuICpcbiAqIFRPIExPQUQgSU5UTyBEWU5BTU9EQjpcbiAqIFVzZSB0aGUgQVdTIENMSSBvciBjcmVhdGUgYSBMYW1iZGEgZnVuY3Rpb24gdG8gYmF0Y2ggd3JpdGUgdGhlc2UgaXRlbXM6XG4gKlxuICogYGBgYmFzaFxuICogYXdzIGR5bmFtb2RiIGJhdGNoLXdyaXRlLWl0ZW0gLS1yZXF1ZXN0LWl0ZW1zIGZpbGU6Ly9ib29rcy1kYXRhLmpzb25cbiAqIGBgYFxuICpcbiAqIFRPIFJFUExBQ0UgSU4gQ09ERTpcbiAqIFVwZGF0ZSBzcmMvc2VydmljZXMvYXBpLnRzIGdldEJvb2tzKCkgZnVuY3Rpb24gdG8gY2FsbDpcbiAqIEdFVCAvYm9va3MgZW5kcG9pbnQgKExhbWJkYSBmdW5jdGlvbjogZ2V0LWJvb2tzKVxuICovXG5leHBvcnQgY29uc3QgbW9ja0Jvb2tzOiBCb29rW10gPSBbXG4gIHtcbiAgICBpZDogJzEnLFxuICAgIHRpdGxlOiAnVGhlIE1pZG5pZ2h0IExpYnJhcnknLFxuICAgIGF1dGhvcjogJ01hdHQgSGFpZycsXG4gICAgZ2VucmU6ICdGaWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCZXR3ZWVuIGxpZmUgYW5kIGRlYXRoIHRoZXJlIGlzIGEgbGlicmFyeSwgYW5kIHdpdGhpbiB0aGF0IGxpYnJhcnksIHRoZSBzaGVsdmVzIGdvIG9uIGZvcmV2ZXIuIEV2ZXJ5IGJvb2sgcHJvdmlkZXMgYSBjaGFuY2UgdG8gdHJ5IGFub3RoZXIgbGlmZSB5b3UgY291bGQgaGF2ZSBsaXZlZC4nLFxuICAgIGNvdmVySW1hZ2U6ICcvYm9vay1jb3ZlcnMvbWlkbmlnaHQtbGlicmFyeS5qcGcnLFxuICAgIHJhdGluZzogNC41LFxuICAgIHB1Ymxpc2hlZFllYXI6IDIwMjAsXG4gICAgaXNibjogJzk3OC0wNTI1NTU5NDc0JyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMicsXG4gICAgdGl0bGU6ICdQcm9qZWN0IEhhaWwgTWFyeScsXG4gICAgYXV0aG9yOiAnQW5keSBXZWlyJyxcbiAgICBnZW5yZTogJ1NjaWVuY2UgRmljdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQSBsb25lIGFzdHJvbmF1dCBtdXN0IHNhdmUgdGhlIGVhcnRoIGZyb20gZGlzYXN0ZXIgaW4gdGhpcyBpbmNyZWRpYmxlIG5ldyBzY2llbmNlLWJhc2VkIHRocmlsbGVyIGZyb20gdGhlIGF1dGhvciBvZiBUaGUgTWFydGlhbi4nLFxuICAgIGNvdmVySW1hZ2U6ICcvYm9vay1jb3ZlcnMvcHJvamVjdC1oYWlsLW1hcnkuanBnJyxcbiAgICByYXRpbmc6IDQuOCxcbiAgICBwdWJsaXNoZWRZZWFyOiAyMDIxLFxuICAgIGlzYm46ICc5NzgtMDU5MzEzNTIwNCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJzMnLFxuICAgIHRpdGxlOiAnVGhlIFNpbGVudCBQYXRpZW50JyxcbiAgICBhdXRob3I6ICdBbGV4IE1pY2hhZWxpZGVzJyxcbiAgICBnZW5yZTogJ015c3RlcnknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbGljaWEgQmVyZW5zb24ncyBsaWZlIGlzIHNlZW1pbmdseSBwZXJmZWN0LiBBIGZhbW91cyBwYWludGVyIG1hcnJpZWQgdG8gYW4gaW4tZGVtYW5kIGZhc2hpb24gcGhvdG9ncmFwaGVyLCBzaGUgbGl2ZXMgaW4gYSBncmFuZCBob3VzZS4gT25lIGV2ZW5pbmcgaGVyIGh1c2JhbmQgcmV0dXJucyBob21lIGxhdGUsIGFuZCBBbGljaWEgc2hvb3RzIGhpbSBmaXZlIHRpbWVzIGluIHRoZSBmYWNlLCBhbmQgdGhlbiBuZXZlciBzcGVha3MgYW5vdGhlciB3b3JkLlwiLFxuICAgIGNvdmVySW1hZ2U6ICcvYm9vay1jb3ZlcnMvc2lsZW50LXBhdGllbnQuanBnJyxcbiAgICByYXRpbmc6IDQuMyxcbiAgICBwdWJsaXNoZWRZZWFyOiAyMDE5LFxuICAgIGlzYm46ICc5NzgtMTI1MDMwMTY5NycsXG4gIH0sXG4gIHtcbiAgICBpZDogJzQnLFxuICAgIHRpdGxlOiAnUGVvcGxlIFdlIE1lZXQgb24gVmFjYXRpb24nLFxuICAgIGF1dGhvcjogJ0VtaWx5IEhlbnJ5JyxcbiAgICBnZW5yZTogJ1JvbWFuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnVHdvIGJlc3QgZnJpZW5kcy4gVGVuIHN1bW1lciB0cmlwcy4gT25lIGxhc3QgY2hhbmNlIHRvIGZhbGwgaW4gbG92ZS4nLFxuICAgIGNvdmVySW1hZ2U6ICcvYm9vay1jb3ZlcnMvcGVvcGxlLXdlLW1lZXQuanBnJyxcbiAgICByYXRpbmc6IDQuMixcbiAgICBwdWJsaXNoZWRZZWFyOiAyMDIxLFxuICAgIGlzYm46ICc5NzgtMTk4NDgwNjc1OCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJzUnLFxuICAgIHRpdGxlOiAnQXRvbWljIEhhYml0cycsXG4gICAgYXV0aG9yOiAnSmFtZXMgQ2xlYXInLFxuICAgIGdlbnJlOiAnTm9uLUZpY3Rpb24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0FuIEVhc3kgJiBQcm92ZW4gV2F5IHRvIEJ1aWxkIEdvb2QgSGFiaXRzICYgQnJlYWsgQmFkIE9uZXMuIFRpbnkgY2hhbmdlcywgcmVtYXJrYWJsZSByZXN1bHRzLicsXG4gICAgY292ZXJJbWFnZTogJy9ib29rLWNvdmVycy9hdG9taWMtaGFiaXRzLmpwZycsXG4gICAgcmF0aW5nOiA0LjcsXG4gICAgcHVibGlzaGVkWWVhcjogMjAxOCxcbiAgICBpc2JuOiAnOTc4LTA3MzUyMTEyOTInLFxuICB9LFxuICB7XG4gICAgaWQ6ICc2JyxcbiAgICB0aXRsZTogJ1RoZSBTZXZlbiBIdXNiYW5kcyBvZiBFdmVseW4gSHVnbycsXG4gICAgYXV0aG9yOiAnVGF5bG9yIEplbmtpbnMgUmVpZCcsXG4gICAgZ2VucmU6ICdGaWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBZ2luZyBhbmQgcmVjbHVzaXZlIEhvbGx5d29vZCBtb3ZpZSBpY29uIEV2ZWx5biBIdWdvIGlzIGZpbmFsbHkgcmVhZHkgdG8gdGVsbCB0aGUgdHJ1dGggYWJvdXQgaGVyIGdsYW1vcm91cyBhbmQgc2NhbmRhbG91cyBsaWZlLicsXG4gICAgY292ZXJJbWFnZTogJy9ib29rLWNvdmVycy9ldmVseW4taHVnby5qcGcnLFxuICAgIHJhdGluZzogNC42LFxuICAgIHB1Ymxpc2hlZFllYXI6IDIwMTcsXG4gICAgaXNibjogJzk3OC0xNTAxMTYxOTMzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnNycsXG4gICAgdGl0bGU6ICdEdW5lJyxcbiAgICBhdXRob3I6ICdGcmFuayBIZXJiZXJ0JyxcbiAgICBnZW5yZTogJ1NjaWVuY2UgRmljdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU2V0IG9uIHRoZSBkZXNlcnQgcGxhbmV0IEFycmFraXMsIER1bmUgaXMgdGhlIHN0b3J5IG9mIHRoZSBib3kgUGF1bCBBdHJlaWRlcywgaGVpciB0byBhIG5vYmxlIGZhbWlseSB0YXNrZWQgd2l0aCBydWxpbmcgYW4gaW5ob3NwaXRhYmxlIHdvcmxkLicsXG4gICAgY292ZXJJbWFnZTogJy9ib29rLWNvdmVycy9kdW5lLmpwZycsXG4gICAgcmF0aW5nOiA0LjQsXG4gICAgcHVibGlzaGVkWWVhcjogMTk2NSxcbiAgICBpc2JuOiAnOTc4LTA0NDExNzI3MTknLFxuICB9LFxuICB7XG4gICAgaWQ6ICc4JyxcbiAgICB0aXRsZTogJ1RoZSBUaHVyc2RheSBNdXJkZXIgQ2x1YicsXG4gICAgYXV0aG9yOiAnUmljaGFyZCBPc21hbicsXG4gICAgZ2VucmU6ICdNeXN0ZXJ5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdGb3VyIHVubGlrZWx5IGZyaWVuZHMgbWVldCB3ZWVrbHkgdG8gaW52ZXN0aWdhdGUgdW5zb2x2ZWQga2lsbGluZ3MuIEJ1dCB3aGVuIGEgbG9jYWwgZGV2ZWxvcGVyIGlzIGZvdW5kIGRlYWQsIHRoZXNlIHVub3J0aG9kb3ggZGV0ZWN0aXZlcyBmaW5kIHRoZW1zZWx2ZXMgaW4gdGhlIG1pZGRsZSBvZiB0aGVpciBmaXJzdCBsaXZlIGNhc2UuJyxcbiAgICBjb3ZlckltYWdlOiAnL2Jvb2stY292ZXJzL3RodXJzZGF5LW11cmRlci1jbHViLmpwZycsXG4gICAgcmF0aW5nOiA0LjEsXG4gICAgcHVibGlzaGVkWWVhcjogMjAyMCxcbiAgICBpc2JuOiAnOTc4LTE5ODQ4ODA5ODcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICc5JyxcbiAgICB0aXRsZTogJ0VkdWNhdGVkJyxcbiAgICBhdXRob3I6ICdUYXJhIFdlc3RvdmVyJyxcbiAgICBnZW5yZTogJ05vbi1GaWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBIG1lbW9pciBhYm91dCBhIHlvdW5nIGdpcmwgd2hvLCBrZXB0IG91dCBvZiBzY2hvb2wsIGxlYXZlcyBoZXIgc3Vydml2YWxpc3QgZmFtaWx5IGFuZCBnb2VzIG9uIHRvIGVhcm4gYSBQaEQgZnJvbSBDYW1icmlkZ2UgVW5pdmVyc2l0eS4nLFxuICAgIGNvdmVySW1hZ2U6ICcvYm9vay1jb3ZlcnMvZWR1Y2F0ZWQuanBnJyxcbiAgICByYXRpbmc6IDQuNSxcbiAgICBwdWJsaXNoZWRZZWFyOiAyMDE4LFxuICAgIGlzYm46ICc5NzgtMDM5OTU5MDUwNCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJzEwJyxcbiAgICB0aXRsZTogJ1RoZSBTb25nIG9mIEFjaGlsbGVzJyxcbiAgICBhdXRob3I6ICdNYWRlbGluZSBNaWxsZXInLFxuICAgIGdlbnJlOiAnRmljdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgdGFsZSBvZiBnb2RzLCBraW5ncywgaW1tb3J0YWwgZmFtZSBhbmQgdGhlIGh1bWFuIGhlYXJ0LCBUaGUgU29uZyBvZiBBY2hpbGxlcyBpcyBhIGRhenpsaW5nIGxpdGVyYXJ5IGZlYXQgdGhhdCBicmlsbGlhbnRseSByZWltYWdpbmVzIEhvbWVyJ3MgZW5kdXJpbmcgbWFzdGVyd29yaywgVGhlIElsaWFkLlwiLFxuICAgIGNvdmVySW1hZ2U6ICcvYm9vay1jb3ZlcnMvc29uZy1vZi1hY2hpbGxlcy5qcGcnLFxuICAgIHJhdGluZzogNC42LFxuICAgIHB1Ymxpc2hlZFllYXI6IDIwMTEsXG4gICAgaXNibjogJzk3OC0wMDYyMDYwNjI0JyxcbiAgfSxcbl07XG5cbi8qKlxuICogTU9DSyBVU0VSUyBEQVRBXG4gKlxuICogVGhpcyBhcnJheSBjb250YWlucyBzYW1wbGUgdXNlcnMgZm9yIHRlc3RpbmcgYXV0aGVudGljYXRpb24gYW5kIGF1dGhvcml6YXRpb24uXG4gKlxuICog4pqg77iPIElOIFBST0RVQ1RJT046IFVzZXJzIHdpbGwgYmUgbWFuYWdlZCBieSBBbWF6b24gQ29nbml0bywgTk9UIER5bmFtb0RCXG4gKlxuICogRE8gTk9UIGxvYWQgdGhpcyBpbnRvIER5bmFtb0RCLiBJbnN0ZWFkOlxuICogMS4gU2V0IHVwIENvZ25pdG8gVXNlciBQb29sIChzZWUgaW5mcmFzdHJ1Y3R1cmUvbGliL2F1dGgtc3RhY2sudHMpXG4gKiAyLiBDcmVhdGUgdGVzdCB1c2VycyB2aWEgQ29nbml0byBDb25zb2xlIG9yIEFXUyBDTElcbiAqIDMuIFVzZXIgYXV0aGVudGljYXRpb24gd2lsbCBiZSBoYW5kbGVkIGJ5IENvZ25pdG9cbiAqIDQuIFVzZXIgcHJvZmlsZSBkYXRhIChuYW1lLCByb2xlKSBjYW4gYmUgc3RvcmVkIGluIER5bmFtb0RCIHNlcGFyYXRlbHlcbiAqXG4gKiBUTyBSRVBMQUNFIElOIENPREU6XG4gKiBVcGRhdGUgc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeCB0byB1c2UgQVdTIEFtcGxpZnkgQXV0aDpcbiAqIC0gQXV0aC5zaWduSW4oKSBmb3IgbG9naW5cbiAqIC0gQXV0aC5zaWduVXAoKSBmb3IgcmVnaXN0cmF0aW9uXG4gKiAtIEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKCkgZm9yIGdldHRpbmcgY3VycmVudCB1c2VyXG4gKi9cbmV4cG9ydCBjb25zdCBtb2NrVXNlcnM6IFVzZXJbXSA9IFtcbiAge1xuICAgIGlkOiAnMScsXG4gICAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbScsXG4gICAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgICByb2xlOiAndXNlcicsXG4gICAgY3JlYXRlZEF0OiAnMjAyNC0wMS0xNVQxMDowMDowMFonLFxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICBlbWFpbDogJ2FkbWluQGxpYnJhcnkuY29tJyxcbiAgICBuYW1lOiAnQWRtaW4gVXNlcicsXG4gICAgcm9sZTogJ2FkbWluJyxcbiAgICBjcmVhdGVkQXQ6ICcyMDI0LTAxLTAxVDEwOjAwOjAwWicsXG4gIH0sXG5dO1xuXG4vKipcbiAqIE1PQ0sgUkVBRElORyBMSVNUUyBEQVRBXG4gKlxuICogVGhpcyBhcnJheSBjb250YWlucyBzYW1wbGUgcmVhZGluZyBsaXN0cyBmb3IgdGVzdGluZyBsaXN0IG1hbmFnZW1lbnQgZmVhdHVyZXMuXG4gKlxuICogVE8gTE9BRCBJTlRPIERZTkFNT0RCOlxuICogVXNlIHRoZSBBV1MgQ0xJIG9yIGNyZWF0ZSBhIExhbWJkYSBmdW5jdGlvbiB0byBiYXRjaCB3cml0ZSB0aGVzZSBpdGVtczpcbiAqXG4gKiBgYGBiYXNoXG4gKiBhd3MgZHluYW1vZGIgYmF0Y2gtd3JpdGUtaXRlbSAtLXJlcXVlc3QtaXRlbXMgZmlsZTovL3JlYWRpbmctbGlzdHMtZGF0YS5qc29uXG4gKiBgYGBcbiAqXG4gKiBEWU5BTU9EQiBUQUJMRSBTVFJVQ1RVUkU6XG4gKiAtIFBhcnRpdGlvbiBLZXk6IHVzZXJJZCAoc3RyaW5nKVxuICogLSBTb3J0IEtleTogaWQgKHN0cmluZylcbiAqIC0gR1NJOiBpZC1pbmRleCAoZm9yIHF1ZXJ5aW5nIGJ5IGxpc3QgSUQpXG4gKlxuICogVE8gUkVQTEFDRSBJTiBDT0RFOlxuICogVXBkYXRlIHNyYy9zZXJ2aWNlcy9hcGkudHMgcmVhZGluZyBsaXN0IGZ1bmN0aW9ucyB0byBjYWxsOlxuICogLSBHRVQgL3JlYWRpbmctbGlzdHMgKExhbWJkYTogZ2V0LXJlYWRpbmctbGlzdHMpXG4gKiAtIFBPU1QgL3JlYWRpbmctbGlzdHMgKExhbWJkYTogY3JlYXRlLXJlYWRpbmctbGlzdClcbiAqIC0gUFVUIC9yZWFkaW5nLWxpc3RzLzppZCAoTGFtYmRhOiB1cGRhdGUtcmVhZGluZy1saXN0KVxuICogLSBERUxFVEUgL3JlYWRpbmctbGlzdHMvOmlkIChMYW1iZGE6IGRlbGV0ZS1yZWFkaW5nLWxpc3QpXG4gKi9cbmV4cG9ydCBjb25zdCBtb2NrUmVhZGluZ0xpc3RzOiBSZWFkaW5nTGlzdFtdID0gW1xuICB7XG4gICAgaWQ6ICcxJyxcbiAgICB1c2VySWQ6ICcxJyxcbiAgICBuYW1lOiAnU3VtbWVyIFJlYWRpbmcgMjAyNCcsXG4gICAgZGVzY3JpcHRpb246ICdCb29rcyB0byByZWFkIGR1cmluZyBzdW1tZXIgdmFjYXRpb24nLFxuICAgIGJvb2tJZHM6IFsnMScsICcyJywgJzQnXSxcbiAgICBjcmVhdGVkQXQ6ICcyMDI0LTA2LTAxVDEwOjAwOjAwWicsXG4gICAgdXBkYXRlZEF0OiAnMjAyNC0wNi0xNVQxNDozMDowMFonLFxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICB1c2VySWQ6ICcxJyxcbiAgICBuYW1lOiAnU2NpLUZpIEZhdm9yaXRlcycsXG4gICAgZGVzY3JpcHRpb246ICdNeSBmYXZvcml0ZSBzY2llbmNlIGZpY3Rpb24gbm92ZWxzJyxcbiAgICBib29rSWRzOiBbJzInLCAnNyddLFxuICAgIGNyZWF0ZWRBdDogJzIwMjQtMDUtMTBUMTA6MDA6MDBaJyxcbiAgICB1cGRhdGVkQXQ6ICcyMDI0LTA1LTEwVDEwOjAwOjAwWicsXG4gIH0sXG5dO1xuIl19