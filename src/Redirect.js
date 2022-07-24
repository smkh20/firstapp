import React from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate()
  return (
    <>
    <div style={{ display: "grid", justifyContent: "center", justifyItems: "center" }}>
      <p>wrong route</p>
      <button onClick={()=>navigate("/")}>back home</button></div>
    </>
  );
};

export default Redirect;
