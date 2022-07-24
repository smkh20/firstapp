import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theorder } from "./action";

const Theorder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(theorder(id)), []);
  const ordered = useSelector((s) => s.theorder);
  return (
    <>
      {!!ordered ? (
        id === ordered._id ? (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                borderBottom: "1px solid black",
                padding: "2px 0",
              }}
            >
              <p>image</p>
              <p>name</p>
              <p>Unit price</p>
              <p>qty</p>
            </div>
            {ordered.orderItems.map((item) => (
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
                <img src={item.image} alt={item.image} style={{ width: "75px", height: "75px" }}></img>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.qty}</p>
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p>totalPrice: {ordered.totalPrice}</p>
              <p>city: {ordered.shippingAddress.city}</p>
              <p>address: {ordered.shippingAddress.address}</p>
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )
      ) : (
        <p>Does not exist</p>
      )}
    </>
  );
};

export default Theorder;
