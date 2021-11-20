import React from 'react'

const CenterContainer: React.FC = ({children}) => {
  return (
    <div className="w-100 vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden">
      {children}
    </div>
  );
}

export default CenterContainer