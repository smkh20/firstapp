import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Changed = () => {
  const navigate = useNavigate();
  useEffect(
    () =>
      setTimeout(() => {
        navigate("/");
      }, 750),
    []
  );
  return <p>pass Changed</p>;
};

export default Changed;
