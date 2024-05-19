import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import c1 from "../Images/course-3.jpg";
import c2 from "../Images/cat-2.jpg";
import c3 from "../Images/kids-learning.png";
import c4 from "../Images/kids-learning.png";
import c5 from "../Images/close-up-hand-writing-notebook-top-view_23-2148888824.avif";
import c6 from "../Images/home.avif";
import a1 from "../Images/clients/21.jpg";
import a2 from "../Images/clients/4.jpg";
import { Container, Row, Col } from "reactstrap";
import { FaBook } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../Compontes/anamation/variants";
import { StoreContext } from "../context/Storecontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Courses = () => {
  const navigate = useNavigate();

  const {
    addcart,
    removecart,
    cartItem,
    setcartItem,
    url,
    food_list,
    _id,
    token,
    setToken,
  } = useContext(StoreContext);
  console.log(cartItem);
  const handleadd = (item) => {
    if (token) {
      addcart(item._id);
      toast.success("add to cart");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div>
        <div>
          <div class="container-fluid bg-primary py-5 mb-5 courses-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center text-courses">
                    <h1 class="display-3 text-white animated slideInDown">
                      Courses
                    </h1>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item">
                          <Link class="text-white text-decoration-none" to="/">
                            Home
                          </Link>
                        </li>

                        <li
                          class="breadcrumb-item text-white active"
                          aria-current="page"
                        >
                          Courses
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-overlay"></div>
        </div>
        <div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" d-flex courses-text align-items-center justify-content-center flex-column my-2"
          >
            <h2 className="mt-4 fw-normal">CATEGORIES</h2>
            <p className=" fw-bold fs-1 mx-3 mb-4">Courses Categories</p>{" "}
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="catagory d-flex align-items-center justify-content-center"
        >
          <div className="container row mx-2">
            <div className="col-lg-6 col-md-12 card-courses  ">
              <Link className="text-decoration-none" to="/coursesgatogry">
                <div>
                  <div className="my-3 position-relative courses-cat">
                    <img src={c1} alt="" className="w-75" />
                    <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses">
                      <h2 className="text-decoration-none text-black">
                        Web Design
                      </h2>
                      <p>49 Courses</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 card-courses ">
              <div className="my-3 position-relative courses-cat">
                <img src={c2} alt="" className="w-75" />
                <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses  ">
                  <h2>Graphic Design</h2>
                  <p>25 Courses</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 card-courses ">
              <div className="my-3 position-relative courses-cat">
                <img src={c3} alt="" className="w-75" />
                <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses  ">
                  <h2>Graphic Design</h2>
                  <p>22 Courses</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 card-courses ">
              <div className="my-3 position-relative courses-cat">
                <img src={c4} alt="" className="w-75" />
                <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses  ">
                  <h2>Graphic Design</h2>
                  <p>44 Courses</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="free-courses my-5">
          <div className="container">
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="fw-bold fs-1">Our Courses</h2>
              </Col>
              <div className="row gap-5 d-flex align-items-center justify-content-center">
                {food_list.map((item) => {
                  console.log(item._id);
                  return (
                    <Col lg="3" md="4" className="shadow-lg">
                      <div className="single__free__course">
                        <div className="free__course__img mb-3 mt-2">
                          <Link to={`/coursedetails/${item._id}`}>
                            <img
                              src={url + "/images/" + item.image}
                              alt=""
                              className="w-100"
                            />
                          </Link>
                          <p className="mt-1 fw-bold position-absolute end-0 text-info">
                            {item.price} $
                          </p>
                        </div>

                        <div className="free__course__details">
                          <h6>{item.name}</h6>
                          <h6>{item.description}</h6>

                          <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                            <span className=" d-flex align-items-center gap-2">
                              <p className="fw-light">
                                {" "}
                                <FaBook
                                  className="icons-courses"
                                  size={25}
                                />{" "}
                                {item.lesson}
                              </p>
                            </span>

                            <span className=" d-flex align-items-center gap-2">
                              <p className="fw-medium">
                                {" "}
                                <IoMdPerson
                                  className="icons-courses"
                                  size={25}
                                />
                                12 k
                              </p>
                            </span>
                          </div>
                          <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                            <span className=" d-flex align-items-center gap-2">
                              <p className="fw-light">
                                {" "}
                                <FaStar
                                  className="icons-courses"
                                  size={25}
                                />{" "}
                                5.6K
                              </p>
                            </span>

                            <span className=" d-flex align-items-center gap-2 mb-2 p-2">
                              {!cartItem[item._id] ? (
                                <button
                                  className="btn btn-outline-info"
                                  onClick={() => handleadd(item)}
                                >
                                  ADD Cart
                                </button>
                              ) : (
                                <p>{cartItem[item._id]}</p>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </div>
            </Row>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="d-flex align-items-center justify-content-center flex-column mt-5 TESTIMONIAL-head "
        >
          <h2>TESTIMONIAL</h2>
          <p>Our Students Say!</p>
        </motion.div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="testm my-5 mx-5 container row d-flex align-items-center justify-content-center">
            <div className="col-md-6 my-3">
              <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </div>
                <div class="notibody d-flex align-items-center gap-3 mx-2 mt-3 ">
                  <img src={a1} alt="" />
                  <p className="fw-bold text-white">mohamed</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">
                  The mobile app development course was fantastic! The
                  step-by-step tutorials and hands-on projects helped me grasp
                  the concepts easily. I'm now building my own app. Great
                  course!!
                </div>
                <div class="notibody d-flex align-items-center gap-3 mx-2 mt-3 ">
                  <img src={a2} alt="" />
                  <p className="fw-bold text-white">Sarah L</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </div>
                <div class="notibody d-flex align-items-center gap-3 mx-2 mt-3 ">
                  <img src={a1} alt="" />
                  <p className="fw-bold text-white">mohamed</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div class="notification">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle">
                  I enrolled in the graphic design course as a beginner, and it
                  was the perfect starting point. The instructor's guidance and
                  feedback improved my design abilities significantly. I'm
                  grateful for this course!
                </div>
                <div class="notibody d-flex align-items-center gap-3 mx-2 mt-3 ">
                  <img src={a2} alt="" />
                  <p className="fw-bold text-white">Sarah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
