import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-mirage-500">
      <Meta />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>
      <div className="flex items-center justify-center w-full h-24">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
