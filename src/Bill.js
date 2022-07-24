import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setorders, totalcost } from "./action";
const Bill = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  useEffect(() => dispatch(totalcost()), [cart]);
  const totalprice = useSelector((state) => state.totalcost);
  const { address } = useSelector((state) => state.address);
  const { city } = useSelector((state) => state.address);
  const { postalCode } = useSelector((state) => state.address);
  const { phone } = useSelector((state) => state.address);
  return (
    <>
      {cart.map((item) => (
        <div
          key={item._id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr  ",
            alignItems: "center",
            justifyItems: "center",
            borderBottom: "1px solid black",
            padding: "2px 0",
          }}
        >
          <img src={item.image} alt={item.image} style={{ width: "100px", height: "100px" }} />
          <p>{item.name}</p>
          <p>{item.qty}</p>
          <p>{(item.price * item.qty).toFixed(2)}</p>
        </div>
      ))}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p>{totalprice}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{postalCode}</p>
        <p>{phone}</p>
        <button style={{marginBottom:"3px"}} onClick={() => navigate("/cart")}>edit</button>
        {!!cart.length && <button onClick={() => dispatch(setorders(navigate))}>done</button>}
      </div>
    </>
  );
};

export default Bill;
