import React from "react";

import Navbar from "../components/Navbar";

const ErrorBoundary = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[90vh]">
        <h2 className="text-4xl">404 - Page Not Found</h2>
      </div>
    </>
  );
};

export default ErrorBoundary;
