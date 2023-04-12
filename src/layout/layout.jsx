import React from "react";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>{children}</div>
    </>
  );
};

export default Layout;
