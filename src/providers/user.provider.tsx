import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { SearchContextType } from "./search.provider";
import { Product } from "src/types/models";

export interface UserContextType {
    favorites: string[];
    updateFavorites: (id: string) => void
  }

export const UserContext = createContext<UserContextType>({
    favorites: [],
    updateFavorites: (id: string) => {},
  });
  
  const UserProvider: FC<PropsWithChildren> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const updateFavorites = (id: string) => {setFavorites((prev)=>[...prev, id])}
  
    return (
      <UserContext.Provider value={{ favorites, updateFavorites }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserProvider;
  
  export const useUserContext = () => useContext(UserContext);
  