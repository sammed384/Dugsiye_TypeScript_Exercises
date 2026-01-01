import { useEffect, useState } from "react";

function useNumberStorage(
  key: string,
  initialValue: number
): [number, (val: number) => void] {
  const [value, setValue] = useState<number>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? Number(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);

  return [value, setValue];
}
export default useNumberStorage;