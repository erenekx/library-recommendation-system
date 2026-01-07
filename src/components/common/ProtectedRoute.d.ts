import React from 'react';
/**
 * ProtectedRoute component wraps routes that require authentication
 *
 * @example
 * <Route path="/admin" element={
 *   <ProtectedRoute requireAdmin>
 *     <AdminPage />
 *   </ProtectedRoute>
 * } />
 */
export declare function ProtectedRoute({ children, requireAdmin }: {
    children: any;
    requireAdmin?: boolean | undefined;
}): React.JSX.Element;
