import { useCallback } from "react";
import { useEffect, useMemo } from "react";
import { createContext, useContext, useState } from "react";
import { useKeyListener } from "../hooks/useKeyDownListener";

const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prev) => [...prev, toast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (toasts.length > 0) {
        removeToast(toasts[0].id);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [toasts]);

  const value = useMemo(() => {
    return {
      addToast,
      removeToast,
      toasts,
    };
  }, [toasts]);

  const handleKeyListener = useCallback(() => {
    setToasts([]);
  }, []);

  useKeyListener("Escape", handleKeyListener);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToastContext must be used within a ToastContextProvider"
    );
  }

  return context;
};

export { ToastContextProvider, useToastContext };
