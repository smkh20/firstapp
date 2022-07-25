import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enter, logout } from "./action";
const Header = () => {
  const navigate = useNavigate();
  const [totalqty, settotalqty] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  const flaglogin = useSelector((state) => state.flaglogin);
  const email = useSelector((state) => state.email);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (!!token) {
      dispatch(enter());
    }
  }, [token]);

  // adad kenar sabad
  useEffect(() => {
    if (cart.length) {
      settotalqty(
        cart.reduce(function (x, item) {
          return x + item.qty;
        }, 0)
      );
    } else {
      settotalqty(0);
    }
  }, [cart]);

  return (
    <div className="header">
      <div>
        <Link to="/" className="link">
          home
        </Link>
      </div>
      <div>
        <Link to="cart" style={{ color: "black", position: "relative" }}>
          <span className="material-icons-outlined">shopping_bag</span>
          <span className="num">{totalqty}</span>
        </Link>
      </div>
      {flaglogin ? (
        <div
          className="headeremail"
          style={{
            position: "relative",
          }}
        >
          {email}
          <div className="submenu">
            <button onClick={() => navigate("/changpass")}>seting</button>
            <button onClick={() => navigate("/orders")}>order</button>
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link to="login" className="link">
            login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
