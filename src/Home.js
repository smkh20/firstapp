import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enter, getdata } from "./action";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  
  useEffect(() => {
    !data && dispatch(getdata());
    
  }, []);

  return (
    <div className="homeproduct">
      {data &&
        data.map((item) => (
          <div key={item._id} onClick={() => navigate(`/product/${item._id}`)}>
            <img
              src={item.image}
              alt={item.image}
              style={{ width: "32vw" }}
            ></img>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>rating: {item.rating}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
