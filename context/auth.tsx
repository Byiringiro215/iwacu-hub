"use client";
import { useRouter } from "next/router";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
  image?: string;
};

type AuthContextShape = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextShape | undefined>(undefined);

const STORAGE_KEY = "mock_session";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  

  // Load session from localStorage
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as AuthUser;
        setUser(parsed);
      }
    } catch (_) {
      console.log("Failed to load auth user from storage");
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    
    if (email === "admin@gmail.com" && password === "admin") {
      const sessionUser: AuthUser = { name: "Admin", email, image: "/pp1.jpb" };
      setUser(sessionUser);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionUser));
      } catch (_) {}
      return { ok: true };
    }
    return { ok: false, error: "Invalid email or password" };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
     
      
    } catch (_) {}
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated: !!user, user, login, logout }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
