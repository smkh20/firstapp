import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changpass } from "./action";
const Changpass = () => {
  const dispatch = useDispatch();
  const pass = localStorage.getItem("pass");
  const [oldpass, setoldpass] = useState("");
  const [newpass, setnewpass] = useState("");
  const [repass, setrepass] = useState("");
  const valid_newpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(newpass);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column",width:"50vw",margin:"auto" }}>
      <label>oldpass:</label>
      <input type="password" onChange={(e) => setoldpass(e.target.value)} />
      <label>newpass:</label>
      <input type="password" onChange={(e) => setnewpass(e.target.value)} />
      <label>repass:</label>
      <input type="password" onChange={(e) => setrepass(e.target.value)} />
      <button style={{marginTop:"5px"}}
        onClick={() => {
          pass === oldpass && newpass === repass && oldpass !== newpass && valid_newpass && dispatch(changpass(newpass,navigate));
        }}
      >
        chang my password
      </button>
      {/* error */}
      {!!oldpass && !(pass === oldpass) && <p>oldpass wrong</p>}
      {!!oldpass && !!newpass && pass === oldpass && !(oldpass !== newpass) && <p>oldpass and newpass should be different</p>}
      {!!newpass && !valid_newpass && (
        <p>new pass must be between 8-15 character and at least have a number, a capital case and a special character</p>
      )}
      {!!newpass && !!repass && !(newpass === repass) && <p>new pass and repass should be the same</p>}
    </div>
  );
};

export default Changpass;
