'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userToken, setUserToken] = useState<string | null>(null);
useEffect(() => {
  if (typeof window !== 'undefined') {
    const savedToken = localStorage.getItem('userToken');
    if (savedToken) {
      setUserToken(savedToken);
    }
  }
}, []);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);