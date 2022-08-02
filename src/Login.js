import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./action";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  const flaglogin = useSelector((state) => state.flaglogin);
  useEffect(() => {
    dispatch({ type: "login", payload: false });
  }, []);

  return (
    <div className="login">
      <label>email:</label>
      <input id="email" type="email" onChange={(e) => setemail(e.target.value)} />
      <label>pass:</label>
      <input id="pass" type="password" onChange={(e) => setpass(e.target.value)} />
      <button
        style={{ margin: "5px 0px" }}
        onClick={() => {
          if (email && pass) {
            dispatch(login(email, pass));
          } else if (!email) {
            document.getElementById("email").focus();
          } else {
            document.getElementById("pass").focus();
          }
        }}
      >
        login
      </button>
      <button onClick={() => navigate("/sign")}>signup</button>
      {!!token && !flaglogin && <p>check email and pass</p>}
    </div>
  );
};

export default Login;
