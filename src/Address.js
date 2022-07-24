import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { address, city, phone, postalcod } from "./action";
const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valueaddress = useSelector((s) => s.address.address);
  const valuecity = useSelector((s) => s.address.city);
  const valuepostalcode = useSelector((s) => s.address.postalCode);
  const valuephone = useSelector((s) => s.address.phone);
  return (
    <>
      <div style={{display:"flex",flexDirection:"column",width:"50vw",margin:"auto"}} >
        <label>address:</label>
        <input
          type="text"
          value={valueaddress}
          onChange={(e) => dispatch(address(e.target.value))}
        />
        <label>city:</label>
        <input
          type="text"
          value={valuecity}
          onChange={(e) => dispatch(city(e.target.value))}
        />
        <label>postalcode:</label>
        <input
          type="text"
          value={valuepostalcode}
          onChange={(e) => dispatch(postalcod(e.target.value))}
        />
        <label>phone:</label>
        <input
          type="text"
          value={valuephone}
          onChange={(e) => dispatch(phone(e.target.value))}
        />
      <button 
        onClick={() => {
          if (valueaddress && valuecity && valuepostalcode && valuephone) {
            navigate("/bill");
          }
        }}
      >
        continue
      </button>
      </div>
    </>
  );
};

export default Address;
