import { useEffect, useState } from "react";
import { asset } from "./assets";

export function usePublicJson(path, fallback) {
  const [data, setData] = useState(fallback);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const response = await fetch(asset(path), { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        if (!ignore) setData(json);
      } catch {
        if (!ignore) setData(fallback);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [path]);

  return { data, isLoading };
}
