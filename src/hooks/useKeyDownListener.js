import { useEffect } from "react";

const useKeyListener = (key, cb) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === key) {
        cb?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cb, key]);

  return useKeyListener;
};

export { useKeyListener };
