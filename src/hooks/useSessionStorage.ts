import { useState, useEffect } from "react";

type SessionStorageValue = string | number | boolean | object | null;

function useSessionStorage<T extends SessionStorageValue>(
  key: string,
  initialValue?: T
): [T | undefined, (value: T | undefined) => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const storedValue = sessionStorage.getItem(key);
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
      sessionStorage.removeItem(key);
    } else {
      const serializedValue =
        typeof value === "object" ? JSON.stringify(value) : String(value);
      sessionStorage.setItem(key, serializedValue);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
