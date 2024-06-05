import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Compontes/About";
import { Home } from "./Compontes/Home";
import { Navbaar } from "./Compontes/Navbaar";
import { Courses } from "./Compontes/Courses";
import { SingUp } from "./Compontes/SingUp";
import { Login } from "./Compontes/Login";
import { Contact } from "./Compontes/Contact";
import CoursesDetails from "./Compontes/CoursesDetails/CoursesDetails";
import Instructor from "./Compontes/Instructor/Instructor";
import InstructorInfo from "./Compontes/InstructorInf/InstructorInfo";
import Cart from "./Compontes/cart/Cart";
import CoursesGategory from "./Compontes/CoursesGategory/CoursesGategory";
import CheckOut from "./checkout/CheckOut";
import InstructorSigIn from "./Compontes/InstrucyorSignin/InstructorSigIn";
import Profile from "./Profile/Profile";
import LogInfo from "./Compontes/LogInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreContext } from "./context/Storecontext";
import React, { useContext, useEffect } from "react";
import Payment from "./Compontes/Payment/Payment";

function App() {
  const { token, setToken, instData, userData, setinstData, setUserData } =
    useContext(StoreContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    if (localStorage.getItem("myData")) {
      const storedData = localStorage.getItem("myData");
      const dataObject = JSON.parse(storedData);
      setUserData(dataObject);
    }
  }, []);
  return (
    <>
      <div>
        <ToastContainer />
        <Navbaar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/insInfo" element={<InstructorInfo />}>
            <Route path=":id" element={<InstructorInfo />} />
          </Route>
          <Route path="/coursedetails" element={<CoursesDetails />}>
            <Route path=":id" element={<CoursesDetails />} />
          </Route>
          <Route path="/coursesgatogry" element={<CoursesGategory />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/infosignin" element={<InstructorSigIn />} />
          <Route path="/infolog" element={<LogInfo />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/userprofile" element={<Profile />}>
            <Route path=":id" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
