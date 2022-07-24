import React from "react";
import { useNavigate } from "react-router-dom";

const Done = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "grid", justifyContent: "center", justifyItems: "center" }}>your purchase done 
      <button onClick={() => navigate("/")}>go home</button></div>
    </>
  );
};

export default Done;
