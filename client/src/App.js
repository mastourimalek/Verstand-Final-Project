import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Pages/ProductList/ProductList";
import { currentAdmin } from "./JS/Actions/admin";
import { current } from "./JS/Actions/user";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import EditInfos from "./Pages/EditProfile/EditInfos";
import EditPassword from "./Pages/EditProfile/EditPassword";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import UserList from "./Pages/UserList/UserList";
import MessageList from "./Pages/Messages/MessageList";
import OrderList from "./Pages/OrderList/OrderList";
import AddOrder from "./Pages/AddOrder/AddOrder";
import Footer from "./Components/Footer/Footer";
import AddProduct from "./Pages/AddProduct/AddProduct";
import EditProduct from "./Pages/EditProduct/EditProduct";
import SucessNotification from "./Components/Notification/SucessNotification";
import Notification from "./Components/Notification/Notification";

function App() {
  const messagesuccess = useSelector((state) => state.messageReducer.success);
  const ordersuccess = useSelector((state) => state.orderReducer.success);
  const errorsOrder = useSelector((state) => state.orderReducer.errors);
  const productsuccess = useSelector((state) => state.productReducer.success);
  const successuser = useSelector((state) => state.userReducer.success);
  const errorsuser = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const [inputSearch, setInputSearch] = useState("");
  const filtredProducts = listProducts.filter((product) =>
    product.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <div className="App">
      <div>
        {messagesuccess &&
          messagesuccess.map((el) => <SucessNotification success={el} />)}

        {ordersuccess &&
          ordersuccess.map((el) => <SucessNotification success={el} />)}

        {errorsOrder && errorsOrder.map((el) => <Notification error={el} />)}

        {productsuccess &&
          productsuccess.map((el) => <SucessNotification success={el} />)}

        {successuser &&
          successuser.map((el) => <SucessNotification success={el} />)}

        {errorsuser && errorsuser.map((el) => <Notification error={el} />)}
      </div>

      <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <Routes>
        <Route path="/" element={<Home filtredProducts={filtredProducts} />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="/ProductList"
          element={<ProductList filtredProducts={filtredProducts} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Error />} />

        {isAuth ? (
          <Route path="/EditInfos/:_id" element={<EditInfos />} />
        ) : isAuthAdmin ? (
          <Route path="/EditInfos/:_id" element={<EditInfos />} />
        ) : (
          <Route path="/Profile/:_id" element={<Profile />} />
        )}

        {isAuth ? (
          <Route path="/EditPassword/:_id" element={<EditPassword />} />
        ) : isAuthAdmin ? (
          <Route path="/EditPassword/:_id" element={<EditPassword />} />
        ) : (
          <Route path="/Profile/:_id" element={<Profile />} />
        )}

        {isAuth ? (
          <Route path="/Profile/:_id" element={<Profile />} />
        ) : isAuthAdmin ? (
          <Route path="/Profile/:_id" element={<Profile />} />
        ) : (
          <Route exact path="/" element={<Home />} />
        )}

        {isAuthAdmin ? <Route path="/UserList" element={<UserList />} /> : null}

        {isAuthAdmin ? (
          <Route path="/MessageList" element={<MessageList />} />
        ) : null}

        {isAuthAdmin ? (
          <Route path="/OrderList" element={<OrderList />} />
        ) : null}

        {isAuthAdmin ? (
          <Route path="/AddProduct" element={<AddProduct />} />
        ) : null}

        {isAuthAdmin ? (
          <Route path="/EditProduct/:_id" element={<EditProduct />} />
        ) : null}

        
        
    

        <Route path="/AddOrder/:_id" element={<AddOrder />} />
       

      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
