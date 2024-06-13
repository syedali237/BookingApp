import axios from "axios";
import React , { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

// Define the context type
interface UserContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    ready : boolean
}

// Create the context with a default value
export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => null, // Placeholder function
    ready: false
});

interface UserContextProviderProps {
    children: ReactNode;
}

export function UserContextProvider({children} : UserContextProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/profile", { withCredentials: true });
        setUser(response.data);
        setReady(true);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}