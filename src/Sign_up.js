import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sign_up } from "./action";
const Sign_up = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [repass, setrepass] = useState("");
  const [isclick, setisclick] = useState(false);
  const dispatch = useDispatch();
  const valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const valid_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pass);
  const token = useSelector((state) => state.login);
  const flaglogin = useSelector((state) => state.flaglogin);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50vw", margin: "auto" }}>
      <label>name:</label>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <label>email:</label>
      <input type="text" onChange={(e) => setemail(e.target.value)} />
      <label>pass:</label>
      <input type="password" onChange={(e) => setpass(e.target.value)} />
      <label>repass:</label>
      <input type="password" onChange={(e) => setrepass(e.target.value)} />
      <button
        style={{ margin: "5px 0px" }}
        onClick={() => {
          name && valid_email && valid_pass && pass === repass ? dispatch(sign_up(name, email, pass)) : setisclick(true);
        }}
      >
        sign_up
      </button>
      {isclick && !name && <p>please type your name</p>}
      {isclick && !valid_email && <p>please inter valid email</p>}
      {isclick && !valid_pass && (
        <p>your pass must be between 8-15 character and at least have a number, a capital case and a special character</p>
      )}
      {isclick && valid_pass && !(pass === repass) && <p>pass and repass should be the same</p>}
      {!!token && !flaglogin && <p>{token}</p>}
    </div>
  );
};

export default Sign_up;
