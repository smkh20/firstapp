import axios from "axios";
export const getdata = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("http://5.161.141.215:5000/api/products");
    dispatch({ type: "getdata", payload: [...data] });
  } catch (erorr) {
    console.log(erorr.message);
  }
};

export const product_info = (id) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get(`http://5.161.141.215:5000/api/products/${id}`);
    dispatch({ type: "product_info", payload: { ...data } });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "product_info", payload: "" });
  }
};

export const sign_up = (name, email, pass) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("http://5.161.141.215:5000/api/users", {
      name: name,
      email: email,
      password: pass,
    });
    dispatch({ type: "login", payload: data.token });
    localStorage.setItem("token", data.token);
    localStorage.setItem("pass", pass);
    dispatch({ type: "enter", payload: true });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "enter", payload: false });
    dispatch({ type: "login", payload: error.message });
  }
};

export const login = (email, pass) => async (dispatch, getstate) => {
  const state=getstate()
  try {
    const { data } = await axios.post("http://5.161.141.215:5000/api/users/login", {
      email: email,
      password: pass,
    });

    dispatch({ type: "login", payload: data.token });
    localStorage.setItem("token", data.token);
    localStorage.setItem("pass", pass);
    dispatch({ type: "enter", payload: true });
  } catch (error) {
    dispatch({ type: "login", payload: error.message });
  }
};
export const enter = () => async (dispatch, getstate) => {
  const state = getstate();
  try {
    const { data } = await axios.get("http://5.161.141.215:5000/api/users/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login}`,
      },
    });
    dispatch({ type: "enter", payload: true });
    dispatch({ type: "email", payload: data.email });
  } catch (error) {
    dispatch({ type: "enter", payload: false });
  }
};
export const cartaction = (product) => (dispatch, getstate) => {
  const state = getstate();
  const addbefor = state.cart.filter((item) => item._id === product._id);
  if (!addbefor.length) {
    dispatch({ type: "cart", payload: { ...product, qty: 1 } });
  }
};
export const camkon = (index) => (dispatch, getstate) => {
  const state = getstate();
  const cart = state.cart;
  if (cart[index].qty - 1) {
    dispatch({
      type: "qty",
      payload: (cart[index].qty = cart[index].qty - 1),
    });
  }
};
export const ziadkon = (index) => (dispatch, getstate) => {
  const state = getstate();
  const cart = state.cart;
  if (cart[index].qty < cart[index].countInStock) {
    dispatch({
      type: "qty",
      payload: (cart[index].qty = cart[index].qty + 1),
    });
  }
};
export const deleteanitem = (index) => (dispatch, getstate) => {
  const state = getstate();
  const cart = state.cart;

  dispatch({
    type: "hazf",
    payload: cart.splice(index, 1),
  });
};
export const logout = () => (dispatch, getstate) => {
  const state = getstate();
  dispatch({ type: "logout", payload: (state.login = "") });
  localStorage.removeItem("token");
  localStorage.removeItem("pass");
  dispatch({ type: "enter", payload: false });
};
export const changpass = (password, navigate) => async (dispatch, getstate) => {
  const state = getstate();
  try {
    const { data } = await axios.put(
      "http://5.161.141.215:5000/api/users/profile",
      { password: password },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.login}`,
        },
      }
    );
    dispatch({ type: "login", payload: data.token });
    localStorage.setItem("token", data.token);
    localStorage.setItem("pass", password);
    navigate("/passchanged");
  } catch (erorr) {
    console.log(erorr.message);
  }
};
export const address = (address) => (dispatch, getstate) => {
  dispatch({ type: "address", payload: address });
};

export const city = (address) => (dispatch, getstate) => {
  dispatch({ type: "city", payload: address });
};

export const postalcod = (address) => (dispatch, getstate) => {
  dispatch({ type: "postalcode", payload: address });
};

export const phone = (address) => (dispatch, getstate) => {
  dispatch({ type: "phone", payload: address });
};

export const totalcost = () => (dispatch, getstate) => {
  const state = getstate();
  const cart = state.cart;
  dispatch({
    type: "totalcost",
    payload: cart.reduce(function (x, item) {
      return x + item.price * item.qty;
    }, 0),
  });
};

export const setorders = (nav) => async (dispatch, getstate) => {
  const state = getstate();
  const cart = state.cart;
  const shippingaddress = state.address;
  const totalcost = state.totalcost;
  const orderlist = cart.map((item) => {
    return {
      product: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
      countInStock: item.countInStock,
      qty: item.qty,
    };
  });
  try {
    const { data } = await axios.post(
      "http://5.161.141.215:5000/api/orders",
      {
        orderItems: orderlist,
        shippingAddress: shippingaddress,
        paymentMethod: "x",
        itemsPrice: totalcost,
        shippingPrice: "0.00",
        totalPrice: totalcost,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.login}`,
        },
      }
    );
    dispatch({ type: "hazf_all", payload: [] });
    localStorage.removeItem("cart");
    nav("/done");
  } catch (erorr) {
    console.log(erorr.message);
  }
};

export const orders = () => async (dispatch, getstate) => {
  const state = getstate();
  try {
    const { data } = await axios.get("http://5.161.141.215:5000/api/orders/myorders", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login}`,
      },
    });
    !!data.length ? dispatch({ type: "orders", payload: data }) : dispatch({ type: "orders", payload: false });
  } catch (erorr) {
    console.log(erorr.message);
  }
};
export const theorder = (id) => async (dispatch, getstate) => {
  const state = getstate();
  try {
    const { data } = await axios.get(`http://5.161.141.215:5000/api/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.login}`,
      },
    });
    dispatch({ type: "theorder", payload: data });
  } catch (erorr) {
    console.log(erorr.message);
    dispatch({ type: "theorder", payload: "" });
  }
};