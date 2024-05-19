import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { StoreContext } from "../context/Storecontext";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

export const Navbaar = () => {
  const navigate = useNavigate();

  const { token, setToken, instData, setinstData, setUserData } =
    useContext(StoreContext);
  const LogOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setinstData("");
    setUserData("");
    toast.success("account delete");
  };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="">
        <nav
          className={`navbar navbar-expand-lg  mb-3  shadow-sm position-fixed w-100  border-opacity-75 top-0  navbar ${
            scroll ? "scrolled" : ""
          }`}
        >
          <div class="container-fluid">
            <div className="d-flex align-items-center">
              <Link
                class="navbar-brand mx-1 d-flex gap-2 align-items-center"
                to="/"
              >
                <BsBookFill className="icons-head" size={30} />{" "}
                <h2 className="p-head ">Edu-Voyage</h2>
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/">
                    <span className="pa-head">Home</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/about">
                    <span className="pa-head">About</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/courses">
                    <span className="pa-head">Courses</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link "
                    aria-current="page"
                    to="/instructor
"
                  >
                    <span className="pa-head">Instructor</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/contact">
                    <span className="pa-head">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="btn-en d-flex gap-4 align-items-center justify-content-center">
              <div className="d-flex gap-4 mx-4 text-decoration-none">
                <div>
                  <div class="input-container">
                    <input
                      type="text"
                      name="text"
                      class="input"
                      placeholder="Search something..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                      class="icon"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect fill="white" height="24" width="24"></rect>{" "}
                        <path
                          fill=""
                          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
                <Link to="/cart" className="d-flex align-items-center">
                  <div className="shoping-cart text-decoration-none ">
                    <FaShoppingBag size={30} />
                  </div>
                </Link>
                <div>
                  {!token ? (
                    <div className="d-flex gap-3">
                      <button className="btn-sup">
                        <Link
                          className="text-decoration-none text-white"
                          to="/signup"
                        >
                          SignUp
                        </Link>
                        <div class="arrow-wrapper">
                          <div class="arrow"></div>
                        </div>
                      </button>
                      <button className="btn btn-outline-success btn-sin  ">
                        <Link
                          className="text-decoration-none text-black btn-singin  "
                          to="/login"
                        >
                          {" "}
                          LogIn{" "}
                        </Link>
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex gap-3 align-items-center">
                      <Link to="/userprofile">
                        <IoPersonCircleSharp
                          size={35}
                          className="rounded-5 bg-info"
                        />
                      </Link>
                      <button
                        onClick={LogOut}
                        className="btn  btn-danger text-white btn-sin  "
                      >
                        <Link
                          className="text-decoration-none text-white  btn-singin  "
                          to=""
                        >
                          {" "}
                          LogOut{" "}
                        </Link>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
