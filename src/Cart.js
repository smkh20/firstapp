import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { camkon, deleteanitem, ziadkon } from "./action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const flaglogin = useSelector((state) => state.flaglogin);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  return (
    <>
      <div className="carttopbutton">
        <div style={{ position: "fixed" }}>
          {!!cart.length && <button onClick={() => navigate("/address")}>continue</button>}
          <button onClick={() => navigate("/")}>buy more products</button>
        </div>
      </div>
      {!!!cart.length ? (
        <p className="tac">cart is empity</p>
      ) : (
        cart.map((item, index) => (
          <div className="cartitems" key={item._id}>
            <img src={item.image} alt={item.image} />
            <p>{item.name}</p>
            <div className="cartButtonKamziadkon">
              <button onClick={() => dispatch(camkon(index))}>-</button>
              <p>{item.qty}</p>
              <button onClick={() => dispatch(ziadkon(index))}>+</button>
            </div>
            <p>{(item.price * item.qty).toFixed(2)}</p>
            <button style={{ width: "63px", backgroundColor: "red" }} onClick={() => dispatch(deleteanitem(index))}>
              x
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default Cart;
