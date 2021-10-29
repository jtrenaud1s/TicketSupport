import React from "react";

const ProtectedRoute: React.FC = ({ children }) => {
  // Only return this if the user has permission to view the page
  return <div>{children}</div>;
};

export default ProtectedRoute;
