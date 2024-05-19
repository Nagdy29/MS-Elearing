import { Route, Routes } from "react-router-dom";
import Navvbar from "./components/Nav/Navvbar";
import Siderbar from "./components/sid/Siderbar";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPersone from "./pages/addPersone/AddPersone";
import ListPersone from "./pages/listpersone/ListPersone";
import Home from "./pages/Home/Home";
import ListUser from "./pages/listUser/ListUser";
import ListInstLogin from "./pages/listInstLogin/ListInstLogin";

function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <Navvbar />
        <hr />
        <div className="flex gap-2">
          <Siderbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/addpersone" element={<AddPersone />} />
            <Route path="/list" element={<List />} />
            <Route path="/listpersone" element={<ListPersone />} />
            <Route path="/listuser" element={<ListUser />} />
            <Route path="/ListInstLogin" element={<ListInstLogin />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
