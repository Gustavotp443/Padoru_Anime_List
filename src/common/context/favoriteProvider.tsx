import { createContext, useState, useEffect } from "react";


type T = {
  children: JSX.Element | JSX.Element[];
}

type ContextProps = {
  favorites: any
  setFavorites: React.Dispatch<React.SetStateAction<any>>
}


export const FavoriteContext = createContext<ContextProps>({
  favorites: [],
  setFavorites: (id) => null
});

FavoriteContext.displayName = "FavoriteContext";

export const FavoriteProvider = ({ children }: T) => {

  const [favorites, setFavorites] = useState<any>(() => {
    const ItensStorage = localStorage.getItem("favorites");
    if (ItensStorage) {
      return JSON.parse(ItensStorage);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));  //SEMPRE CONVERTEMOS EM JSON POIS PODE VIR DE VARIAS FORMAS
  }, [favorites]);


  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

