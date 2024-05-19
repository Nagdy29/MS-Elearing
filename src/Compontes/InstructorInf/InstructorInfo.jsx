import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ins1 from "../Images/team-1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Container, Row, Col } from "reactstrap";
import { FaBook } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import c1 from "../../Images/course-catogry.jpg";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";

const InstructorInfo = () => {
  const { addcart, removecart, cartItem, setcartItem, url, food_list } =
    useContext(StoreContext);
  let params = useParams();
  const [data, setData] = useState([]);
  const featchFood = async (id) => {
    const response = await axios.get(`${url}/api/persone/list/${id}`);
    setData(response.data.data);
    console.log(data);
  };

  useEffect(() => {
    featchFood(params.id);
    console.log(data);
  }, []);
  return (
    <>
      <div className="">
        <div class="container-fluid bg-primary py-5 mb-5  Instructor-header  ">
          <div className="">
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                  <h1 class="display-3 text-white animated slideInDown">
                    Instructor Profile
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
                        Instructor
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="about-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ins-info ">
          <div className="container row  d-flex justify-content-between gap-1 ">
            <div className="col-xl-4 col-md-5 col-12 mb-3 ins-image bg-white ">
              <img
                src={url + "/images/" + data.image}
                alt=""
                className="shadow-lg mt-2"
              />
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <FaBriefcase size={25} className="icons" />
                  Job Title
                </h4>
                <p className="d-flex">{data.jobTitle} </p>
              </div>
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <FaPhoneAlt size={25} className="icons" />
                  Phone{" "}
                </h4>
                <p className="d-flex"> {data.phone} </p>
              </div>
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <MdMarkEmailUnread size={25} className="icons" />
                  Email{" "}
                </h4>
                <p className="d-flex"> {data.email} </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-12 d-flex my-3 instr-info position-relative">
              <div className="d-flex text-center head-infoInstr">
                <div className="d-flex flex-column mx-2">
                  <h3 className="fs-2 fw-bold"> {data.name} </h3>
                  <p className="fw-normal">{data.jobTitle}</p>
                </div>
                <div className="d-flex flex-column mx-5 ">
                  <p>Follow Us:</p>
                  <div className="d-flex gap-2 icons">
                    <FaFacebookF size={25} />
                    <FaLinkedin size={25} />
                    <FaYoutube size={25} />
                  </div>
                </div>
                <div className="my-3 ">
                  <button className="btn btn-outline-success ">
                    Follow +{" "}
                  </button>
                  <br />
                </div>
              </div>

              <div className="my-4 position-absolute inst-dec">
                <div>
                  <h2>Short Bio</h2>
                  <p className="mx-auto">
                    Synergistically foster 24/7 leadership rather than scalable
                    platforms. Conveniently visualize installed base products
                    before interactive results. Collaboratively restore
                    corporate experiences and open-source applications.
                    Proactively mesh cooperative growth strategies for covalent
                    opportunities. Competently create efficient markets through
                    best-of-breed potentialities. Compellingly exploit B2B
                    vortals with emerging total linkage. Appropriately pursue
                    strategic leadership whe intermandated ideas. Proactively
                    revolutionize interoperable "outside the box" thinking with
                    fully researched innovation. Dramatically facilitate
                    exceptional architectures and bricks-and-clicks data.
                    Progressively genera extensible e-services for.
                  </p>
                </div>
                <div className=" courses-info my-5   ">
                  <h2>Courses :</h2>
                  <div>
                    <div className="container">
                      <Row>
                        <div className="row gap-5 d-flex align-items-center justify-content-center my-5">
                          <Col
                            lg="6"
                            md="6"
                            className="shadow-lg d-flex gap-4 category-col align-items-center"
                          >
                            <div>
                              <Link to="/coursedetails">
                                <img
                                  src={c1}
                                  alt=""
                                  width={180}
                                  className="img-catogry my-2"
                                />
                              </Link>
                            </div>
                            <div>
                              <h2>Design</h2>
                              <Link
                                className="text-decoration-none"
                                to="/coursedetails"
                              >
                                <p className="p-catogry">
                                  Master Web Design in Adobe XD: Complete UI/UX
                                  Masterclass
                                </p>
                              </Link>
                              <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                                <FaBook size={25} /> <h5>35 Classes</h5>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                  4.7
                                  <div className="text-danger">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </div>
                                </div>
                                <h3>$29.99</h3>
                              </div>
                            </div>
                          </Col>
                          <Col
                            lg="6"
                            md="6"
                            className="shadow-lg d-flex gap-4 category-col align-items-center"
                          >
                            <div>
                              <Link to="/coursedetails">
                                <img
                                  src={c1}
                                  alt=""
                                  width={180}
                                  className="img-catogry my-2"
                                />
                              </Link>
                            </div>
                            <div>
                              <h2>Design</h2>
                              <Link
                                className="text-decoration-none"
                                to="/coursedetails"
                              >
                                <p className="p-catogry">
                                  Master Web Design in Adobe XD: Complete UI/UX
                                  Masterclass
                                </p>
                              </Link>
                              <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                                <FaBook size={25} /> <h5>35 Classes</h5>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                  4.7
                                  <div className="text-danger">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </div>
                                </div>
                                <h3>$29.99</h3>
                              </div>
                            </div>
                          </Col>
                          <Col
                            lg="6"
                            md="6"
                            className="shadow-lg d-flex gap-4 category-col align-items-center"
                          >
                            <div>
                              <Link to="/coursedetails">
                                <img
                                  src={c1}
                                  alt=""
                                  width={180}
                                  className="img-catogry my-2"
                                />
                              </Link>
                            </div>
                            <div>
                              <h2>Design</h2>
                              <Link
                                className="text-decoration-none"
                                to="/coursedetails"
                              >
                                <p className="p-catogry">
                                  Master Web Design in Adobe XD: Complete UI/UX
                                  Masterclass
                                </p>
                              </Link>
                              <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                                <FaBook size={25} /> <h5>35 Classes</h5>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                  4.7
                                  <div className="text-danger">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </div>
                                </div>
                                <h3>$29.99</h3>
                              </div>
                            </div>
                          </Col>
                          <Col
                            lg="6"
                            md="6"
                            className="shadow-lg d-flex gap-4 category-col align-items-center"
                          >
                            <div>
                              <Link to="/coursedetails">
                                <img
                                  src={c1}
                                  alt=""
                                  width={180}
                                  className="img-catogry my-2"
                                />
                              </Link>
                            </div>
                            <div>
                              <h2>Design</h2>
                              <Link
                                className="text-decoration-none"
                                to="/coursedetails"
                              >
                                <p className="p-catogry">
                                  Master Web Design in Adobe XD: Complete UI/UX
                                  Masterclass
                                </p>
                              </Link>
                              <div className="d-flex align-items-center gap-3 justify-content-center icons-catogry">
                                <FaBook size={25} /> <h5>35 Classes</h5>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                  4.7
                                  <div className="text-danger">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </div>
                                </div>
                                <h3>$29.99</h3>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorInfo;
