import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const LOCAL_DATA_KEY = "userData";
  const { getItem, setItem } = useLocalStorage();
  const [user, setUser] = useState(getItem(LOCAL_DATA_KEY));

  const signIn = (newUser, cb = () => {}) => {
    setUser(newUser); // Set the user state
    setItem(LOCAL_DATA_KEY, newUser);
    cb(); // Callback function after successful sign-in
  };

  const signOut = (cb = () => {}) => {
    setUser(null); // Clear the user state
    setItem(LOCAL_DATA_KEY, null);
    cb(); // Callback function after sign-out
  };

  const getRole = () => {
    return user?.role;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, getRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
