import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";
import axios from "axios";

const Profile = () => {
  const { token, setToken, userData, setUserData, instData, setinstData } =
    useContext(StoreContext);
  console.log(userData);

  return (
    <>
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
    </>
  );
};

export default Profile;
