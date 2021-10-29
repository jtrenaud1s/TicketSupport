import React from "react";
import { Card } from "react-bootstrap";

interface IProps {
  title?: string;
}

const Box: React.FC<IProps> = ({children, title}) => {
  return (
      <Card className="align-items-center p-4 w-100">
        {title && (
          <>
            <h2 className="text-center">{title}</h2>
            <hr className="w-25" />
          </>
        )}
        {children}
      </Card>
  );
};

export default Box;