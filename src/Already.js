import React from "react";
import { useNavigate } from "react-router-dom";
const Already = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "grid", justifyContent: "center", justifyItems: "center" }}>
      <p>Already login</p>
      <button onClick={() => navigate("/")}>back to home</button>
    </div>
  );
};

export default Already;
