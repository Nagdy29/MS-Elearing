import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import in1 from "../Images/team-1.jpg";
import in2 from "../Images/team-4.jpg";
import in3 from "../Images/team-3.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Footer } from "./../Footer";

import { FaYoutube } from "react-icons/fa";
import { StoreContext } from "../../context/Storecontext";

const Instructor = () => {
  const { persone_list, setpersone, url } = useContext(StoreContext);
  console.log(persone_list);
  return (
    <>
      <div>
        <div>
          <div class="container-fluid bg-primary  mb-5  Instructor-header  ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown mt-lg-5">
                      Instructor
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
        </div>
        <div className="center-ins  row mx-4  my-5 d-flex align-items-center justify-content-center  ">
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5 ">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <IoPaperPlaneSharp className="icon-ins mb-4" />

                <h2 className="text-center">Online Courses</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <IoIosPerson className="icon-ins mb-4" />

                <h2 className="text-center">Expert Trainer</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <FaFileAlt className="icon-ins mb-4" size="10px" />

                <h2 className="text-center">Get Certificate</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <FaCalendarCheck className="icon-ins mb-4" />

                <h2 className="text-center">Life Time Access</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="instructor my-3">
          <div className="instructor-text d-flex align-items-center justify-content-center flex-column mb-4">
            <p>Instructor</p>
            <h2>Our Expert Instructor</h2>
          </div>
        </div>
        <div className="container row mx-5 d-flex align-items-center justify-content-center">
          {persone_list.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-12 mb-5">
                <div className="tp-instructor position-relative">
                  <div className="d-flex  ">
                    <Link to={`/insInfo/${item._id}`}>
                      <img
                        src={url + "/images/" + item.image}
                        alt=""
                        className="d-flex items-center align-items-baseline justify-content-center "
                      />
                    </Link>
                  </div>
                  <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                    <span>Instructor</span>
                    <h4>
                      <Link
                        to={`/insInfo/${item._id}`}
                        className="text-decoration-none name"
                      >
                        {item.name}
                      </Link>
                    </h4>
                  </div>
                  <div className="d-flex align-items-center gap-5">
                    <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                      <FaPlayCircle size={28} className="icon-info" />
                      <h3>{item.lesson} Classes</h3>
                    </div>
                    <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                      <PiStudentBold size={28} className="icon-info" />
                      <h3>291+ Students</h3>
                    </div>
                  </div>
                  <div className="social-inst position-absolute">
                    <div className="d-flex flex-column gap-2">
                      <FaFacebookF size={30} className="social-icons" />
                      <FaLinkedin size={30} className="social-icons" />
                      <FaYoutube size={30} className="social-icons" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Instructor;

/*

   <div>
        <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ins-info ">
          <div className="container row  d-flex justify-content-between ">
            <div className="col-xl-4 col-md-6 col-10 mb-3 ins-image bg-white mx-3">
              <img src={ins1} alt="" className="shadow-lg mt-2" />
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <FaBriefcase size={25} className="icons" />
                  Job Titlex
                </h4>
                <p className="d-flex">Lead UX Engineer</p>
              </div>
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <FaPhoneAlt size={25} className="icons" />
                  Phone{" "}
                </h4>
                <p className="d-flex">+00 365 9852 65</p>
              </div>
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <MdMarkEmailUnread size={25} className="icons" />
                  Email{" "}
                </h4>
                <p className="d-flex">epora@mail.com</p>
              </div>
            </div>
            <div className="col-xl-6 col-md-10 col-12 d-flex my-3 instr-info position-relative">
              <div className="d-flex flex-column mx-2">
                <h3 className="fs-2 fw-bold">Jim Séchen</h3>
                <p className="fw-normal">Teaches Art & Designer</p>
              </div>
              <div className="d-flex flex-column mx-5 my-4">
                <p>Follow Us:</p>
                <div className="d-flex gap-2 icons">
                  <FaFacebookF size={25} />
                  <FaLinkedin size={25} />
                  <FaYoutube size={25} />
                </div>
              </div>
              <div className="my-4 ">
                <button className="btn btn-outline-success ">Follow + </button>
                <br />
              </div>

              <div className="my-4 position-absolute inst-dec">
                <h2>Short Bio</h2>
                <p className="mx-auto">
                  Synergistically foster 24/7 leadership rather than scalable
                  platforms. Conveniently visualize installed base products
                  before interactive results. Collaboratively restore corporate
                  experiences and open-source applications. Proactively mesh
                  cooperative growth strategies for covalent opportunities.
                  Competently create efficient markets through best-of-breed
                  potentialities. Compellingly exploit B2B vortals with emerging
                  total linkage. Appropriately pursue strategic leadership whe
                  intermandated ideas. Proactively revolutionize interoperable
                  "outside the box" thinking with fully researched innovation.
                  Dramatically facilitate exceptional architectures and
                  bricks-and-clicks data. Progressively genera extensible
                  e-services for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
