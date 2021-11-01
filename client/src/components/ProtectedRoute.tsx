import React from "react";

const ProtectedRoute: React.FC = ({ children }) => {
  // TODO Only return this if the user has permission to view the route
  return <div>{children}</div>;
};

export default ProtectedRoute;
