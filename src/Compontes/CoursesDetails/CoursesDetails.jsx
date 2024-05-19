import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import im1 from "../Images/home.avif";
import im2 from "../Images/clients/3.jpg";
import { Footer } from "./../Footer";
import axios from "axios";
import { StoreContext } from "../../context/Storecontext";
import { Item } from "semantic-ui-react";
const CoursesDetails = () => {
  const navigate = useNavigate();

  const {
    addcart,
    removecart,
    cartItem,
    setcartItem,
    url,
    food_list,
    token,
    setToken,
  } = useContext(StoreContext);
  let params = useParams();
  const [data, setData] = useState([]);
  const featchFood = async (id) => {
    const response = await axios.get(`${url}/api/food/list/${id}`);
    setData(response.data.data);
    console.log(data);
  };

  const handleadd = (item) => {
    if (token) {
      addcart(data._id);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    featchFood(params.id);
    console.log(data);
  }, []);
  return (
    <>
      <div>
        <div className="">
          <div class="container-fluid bg-primary py-5 mb-5 courses-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center text-courses">
                    <h1 class="display-3 text-white animated slideInDown">
                      CoursesDetails
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
                  <div className="about-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center text-details my-3">
          <h2 className="fw-bold">Course information</h2>
        </div>
        {data ? (
          <div className="container gap-2 row d-flex justify-content-between align-items-center">
            <div className="col-xl-9 col-lg-6 col-md-6 col-12 d-flex align-items-center flex-column ">
              <div>
                <img
                  src={url + "/images/" + data.image}
                  alt=""
                  className="mx-4 my-3 shadow-sm image-details w-100"
                />
                <h2 className="my-4 mx-4 fw-bold">Name : {data.name} </h2>
                <h2 className="my-4 mx-4 fw-bold">
                  Description:{data.description}{" "}
                </h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4  col-md-4 col-12 card-pricee">
              <div class="card-price">
                <span class="title">
                  Pro
                  <p class="pricing">
                    {data.price}$ <span class="pricing-time"></span>
                  </p>
                  <span class="sub-title shadow-lg">
                    <ul class="list d-flex justify-content-between">
                      <li class="list-item d-flex justify-content-between align-items-center">
                        <p className="fw-medium p-card">Lessons:</p>
                        <p className="span-card">{data.lesson}</p>
                      </li>
                      <li class="list-item d-flex justify-content-between align-items-center">
                        <p className="fw-medium p-card">Videos:</p>
                        <p className="span-card">{data.video}</p>
                      </li>
                      <li class="list-item d-flex justify-content-between align-items-center">
                        <p className="fw-medium p-card">Language:</p>
                        <p className="span-card">Arabic</p>
                      </li>
                    </ul>
                    <div className="btn-addcart">
                      {[
                        !cartItem[data._id] ? (
                          <div
                            class="btn-conteiner"
                            onClick={() => handleadd()}
                          >
                            <a class="btn-content" href="#">
                              <span class="btn-title">Add To Cart</span>
                              <span class="icon-arrow">
                                <svg
                                  width="66px"
                                  height="43px"
                                  viewBox="0 0 66 43"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="arrow"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <path
                                      id="arrow-icon-one"
                                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                      fill="#FFFFFF"
                                    ></path>
                                    <path
                                      id="arrow-icon-two"
                                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                      fill="#FFFFFF"
                                    ></path>
                                    <path
                                      id="arrow-icon-three"
                                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                      fill="#FFFFFF"
                                    ></path>
                                  </g>
                                </svg>
                              </span>
                            </a>
                          </div>
                        ) : (
                          <p className="d-flex justify-content-center fw-bold text-success w-100 fs-4">
                            add to cart
                          </p>
                        ),
                      ]}
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          1
        )}

        <div>
          <div className="text-ourcourses  mx-4 my-5 row d-flex justify-content-center">
            <div className="col-md-5">
              <h1 className="fs-1 text-center mb-4 fw-bolder ">Overview</h1>
              <h3 className="mb-4 fs-2 fw-medium">
                Learn WordPress & Elementor for Beginners
              </h3>
              <h4 className="mb-3 fs-3 fw-normal">Why Choose This Course</h4>
              <p className="w-75 ">
                These courses are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best, every
                pleasure.
              </p>
            </div>
            <div className="col-md-5">
              <h1 className="fs-1 text-center mb-4 fw-bolder ">Reviews</h1>
              <div className="Reviews d-flex gap-3 align-items-center">
                <div>
                  <img src={im2} alt="" />
                </div>
                <div>
                  <h2>Jenefar Willium</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look.
                  </p>
                </div>
              </div>
              <div className="Reviews d-flex gap-3 align-items-center">
                <div>
                  <img src={im2} alt="" />
                </div>
                <div>
                  <h2>Jenefar Willium</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CoursesDetails;
