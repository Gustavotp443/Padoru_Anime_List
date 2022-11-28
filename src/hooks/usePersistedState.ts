import { useState, useEffect, Dispatch, SetStateAction } from "react";

//Dispatch e SetStateAction serve para tipar

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {      //Serve para buscar a informação
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);       //Pois gravo como stringify ent faço parse para retornar obj
    } else {
      return initialState;
    }


  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));  //SEMPRE CONVERTEMOS EM JSON POIS PODE VIR DE VARIAS FORMAS
  }, [key, state]);
  return [state, setState];
}

export default usePersistedState;
