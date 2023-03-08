import React from "react";
import { useToastContext } from "../../context/ToastContext";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = useToastContext();

  return (
    <ol className={styles.wrapper}>
      {!!toasts.length &&
        toasts.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast {...toast} removeToast={removeToast} />
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
