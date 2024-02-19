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

function App() {
  return (
    <>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/insInfo" element={<InstructorInfo />} />
        <Route path="/coursedetails" element={<CoursesDetails />} />
        <Route path="/coursesgatogry" element={<CoursesGategory />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/infosignin" element={<InstructorSigIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
