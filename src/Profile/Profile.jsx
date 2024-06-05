import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";
import axios from "axios";
import { IoIosPerson } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import img from "../Images/upload_area.png";
import { FaBook } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";

const Profile = () => {
  const [images, setImages] = useState(false);

  const { token, setToken, userData, cartItem, food_list, url } =
    useContext(StoreContext);
  console.log(userData);

  return (
    <>
      <div className="mx-3 position-relative ">
        <div class="card-prof d-flex gap-8 shadow ">
          <div className="card-proff">
            <label
              class="text-gray-700 mt-3 dark:text-gray-200 cursor-pointer"
              for="username"
              htmlFor="image"
            >
              <img
                src={images ? URL.createObjectURL(images) : img}
                alt=""
                className="w-44 mt-2"
              />
            </label>
            <input
              id="image"
              type="file"
              hidden
              onChange={(e) => setImages(e.target.files[0])}
            />
          </div>

          <div class="card-info">
            <p class="text-title">
              {" "}
              <span>
                <IoIosPerson size={25} /> :
              </span>{" "}
              {userData.name}
            </p>

            <p class="text-title d-flex gap-4">
              <span>
                <SiGmail size={25} /> :
              </span>{" "}
              {userData.email}{" "}
            </p>

            <p class="text-title d-flex gap-4">
              <span>
                <BsFillTelephoneFill size={25} /> :
              </span>{" "}
              {userData.phone}{" "}
            </p>
          </div>
        </div>
        <br />
        <div className=" my-9 courses-pro position-relative">
          <div>
            <h2 className="fs-2 fw-bold">courses</h2>
          </div>
        </div>
        <div>
          <div className="courses-add">
            <div className="">
              {food_list.map((item, index) => {
                if (cartItem[item._id] > 0) {
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
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

/*
  <div className="mx-3 my-5  sign-in d-flex justify-content-center position-relative">
        <form class="form-user position-absolute d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <p class="title fs-2 fw-bold mb-lg-5"> profile:</p>
          </div>
          <div class="  d-flex align-items-center gap-4 ">
            <p className="fw-bold">Name :</p>
            <p className="fw-medium"> {userData.name} </p>
            <p className="fw-medium"> {instData.name} </p>
          </div>

          <div class="  d-flex align-items-center gap-4 ">
            <p className="fw-bold">Email :</p>
            <p className="fw-medium"> {userData.email} </p>
            <p className="fw-medium"> {instData.email} </p>
          </div>
        </form>
      </div>
*/
