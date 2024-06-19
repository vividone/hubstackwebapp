'use client'
import { useState, useEffect } from "react";

type LocalStorageValue = string | number | boolean | object | null;

function useLocalStorage<T extends LocalStorageValue>(
  key: string,
  initialValue?: T
): [T | undefined, (value: T | undefined) => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue) as T;
      } catch {
        return storedValue as T;
      }
    }

    return initialValue;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      const serializedValue =
        typeof value === "object" ? JSON.stringify(value) : String(value);
      localStorage.setItem(key, serializedValue);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
