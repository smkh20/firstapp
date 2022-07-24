import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import Sign_up from "./Sign_up";
import Login from "./Login";
import Cart from "./Cart";
import Redirect from "./Redirect";
import Changpass from "./Changpass";
import Already from "./Already";
import Address from "./Address";
import Bill from "./Bill";
import Orders from "./Orders";
import Theorder from "./Theorder";
import Done from "./Done";
import Changed from "./Changed";
function App() {
  const flaglogin = useSelector((state) => state.flaglogin);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sign" element={flaglogin ? <Already /> : <Sign_up />} />
        <Route path="login" element={flaglogin ? <Already /> : <Login />} />
        <Route path="product/:id" element={<Product />} />
        <Route
          path="changpass"
          element={flaglogin ? <Changpass /> : <Login />}
        />
        <Route path="address" element={flaglogin ? <Address /> : <Login />} />
        <Route path="bill" element={flaglogin ? <Bill /> : <Login />} />
        <Route path="orders" element={flaglogin ? <Orders /> : <Login />} />
        <Route
          path="orders/:id"
          element={flaglogin ? <Theorder /> : <Login />}
        />
        <Route path="done" element={<Done />} />
        <Route path="passchanged" element={<Changed />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
