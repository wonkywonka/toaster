import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastShelf from "../ToastShelf";
import { ToastContextProvider } from "../../context/ToastContext";

function App() {
  return (
    <>
      <ToastContextProvider>
        <ToastPlayground />
        <Footer />
        <ToastShelf />
      </ToastContextProvider>
    </>
  );
}

export default App;
