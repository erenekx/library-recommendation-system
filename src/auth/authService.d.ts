/**
 * ✅ LOGIN
 */
export declare const loginUser: (email: any, password: any) => Promise<void>;
/**
 * ✅ SIGNUP
 * Cognito'da name attribute'u standart attribute'tur.
 * User Pool'unda name attribute kapalıysa burada hata alırsın.
 * Hata alırsan attributes içinden name satırını kaldır.
 */
export declare const signupUser: (email: any, password: any, name: any) => Promise<void>;
/**
 * ✅ LOGOUT
 */
export declare const logoutUser: () => Promise<void>;
/**
 * ✅ CURRENT USER PROFILE (AuthContext bunu çağırıyor)
 */
export declare const getCurrentUserProfile: () => Promise<{
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
}>;
/**
 * ✅ JWT token (API istekleri için Authorization: Bearer <token>)
 */
export declare const getIdToken: () => Promise<string>;
