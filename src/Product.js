import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { product_info, cartaction } from "./action";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  const { id } = param;
  useEffect(() => dispatch(product_info(id)), []);
  const product = useSelector((state) => state.product);
  return (
    <>
      {!!(product)? id === product._id ? (
        <div className="product">
          <img
            src={product.image}
            alt={product.image}
          ></img>
          <p>name: {product.name}</p>
          <p>brand: {product.brand}</p>
          <p>category: {product.category}</p>
          <p id="description">description: {product.description}</p>
          <p>price: {product.price}</p>
          <p>rating: {product.rating}</p>
          <p>numReviews: {product.numReviews}</p>
          <p style={{ color: !product.countInStock && "red" }}>
            countInStock: {product.countInStock}
          </p>
          {!!product.countInStock && (
            <button
              onClick={() => {
                dispatch(cartaction(product));
                navigate("/cart");
              }}
            >
              add to cart
            </button>
          )}
        </div>
      ) : (
        <p>loding...</p>
      ):<p>Does not exist</p>}
    </>
  );
};

export default Product;
