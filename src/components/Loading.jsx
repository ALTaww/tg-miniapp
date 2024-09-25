import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Идет загрузка...</span>
    </Spinner>
  );
};

export default Loading;
