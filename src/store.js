import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getdatareducer,
  productreducer,
  sign_upreducer,
  flagloginreducer,
  cartreduser,
  emailreducer,
  addressreducer,
  totalcostreducer,
  ordersreducer,
  theorderreducer,
} from "./reducer";

const reducers = combineReducers({
  data: getdatareducer,
  product: productreducer,
  login: sign_upreducer,
  flaglogin: flagloginreducer,
  cart: cartreduser,
  email: emailreducer,
  address: addressreducer,
  totalcost: totalcostreducer,
  orders: ordersreducer,
  theorder: theorderreducer,
});
const middleware = [thunk];
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";
const cartstorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")) 
  : [];
const initialState = {
  login: token,
  flaglogin: false,
  cart: cartstorage,
};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
