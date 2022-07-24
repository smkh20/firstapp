import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orders } from "./action";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => dispatch(orders()), []);
  const ordered = useSelector((state) => state.orders);

  return (
    <div>
      {!!ordered ? (
        !!ordered.length ? (
          ordered.map((item) => (
            <div
              key={item._id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                borderBottom: "1px solid black",
                padding: "2px 0",
              }}
            >
              <img src={item.orderItems[0].image} alt={item.orderItems[0].image} style={{ width: "75px", height: "75px" }} />
              <p>{item.orderItems[0].name}</p>
              <p>{item.totalPrice}</p>
              <button onClick={() => navigate(`${item._id}`)}>more info</button>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )
      ) : (
        <p>Looks like you have not bought anything from us before</p>
      )}
    </div>
  );
};

export default Orders;
