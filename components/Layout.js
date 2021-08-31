import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mirage-500">
      {/* We need to change the Meta Component config for pages */}
      <Meta />
      <div className="w-full py-2 bg-mirage-500 text-white text-center text-xs md:text-md shadow top-0 sticky">
        <p> Please, snippet.so need your Star ⭐ rating in Github </p>
      </div>
      <main className="flex flex-col items-center justify-center flex-1 mx-2 md:mx-auto text-center">
        {children}
      </main>
      <div className="flex items-center justify-center w-full h-24">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
