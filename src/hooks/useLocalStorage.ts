import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (data: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    try {
      if (typeof window !== "undefined") {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : initialValue;
      }
    } catch(e) {
      console.error(e)
      throw new Error
    }
    return initialValue;
  });

  const save = (data: T) => {
    setValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [value, save];
};
