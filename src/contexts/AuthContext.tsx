import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getCurrentUserProfile, loginUser, logoutUser, signupUser } from "@/auth/authService";

type UserProfile = {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
};

type AuthContextValue = {
  user: UserProfile | null;
  isAuthLoading: boolean;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const profile = await getCurrentUserProfile();
      setUser(profile);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const boot = async () => {
      setIsAuthLoading(true);
      await refreshUser();
      setIsAuthLoading(false);
    };
    boot();
  }, [refreshUser]);

  const signup = useCallback(async (email: string, password: string, name: string) => {
    await signupUser(email, password, name);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    await loginUser(email, password);
    await refreshUser();
  }, [refreshUser]);

  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthLoading, signup, login, logout, refreshUser, setUser }),
    [user, isAuthLoading, signup, login, logout, refreshUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}