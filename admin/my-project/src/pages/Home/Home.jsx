import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";

const Home = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const [listPer, setlistPer] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [listLogInst, setlistLogInst] = useState([]);
  const featchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data.data);
    setList(response.data.data);
  };
  const featchListPersone = async () => {
    const response = await axios.get(`${url}/api/persone/list`);
    console.log(response.data.data);
    setlistPer(response.data.data);
  };
  const featchListStudent = async () => {
    const response = await axios.get(`${url}/api/user/`);
    console.log(response.data.data);
    setListUser(response.data.data);
  };
  const featchListLogInst = async () => {
    const response = await axios.get(`${url}/api/inst/all`);
    const coursesCount = response.data.length;
    console.log(coursesCount);
    setlistLogInst(response.data.data);
  };
  useEffect(() => {
    featchList();
    featchListPersone();
    featchListStudent();
    featchListLogInst();
  }, []);
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-2  flex-wrap ">
        <div className="flex justify-center items-center ">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <FaListAlt size={35} />:
              <h2 className="text-[30px]">the Courses</h2>
            </div>

            <h5 class="mb-2 text-2xl font-semibold tracking-tight dark:text-white flex justify-center my-2 text-blue-800">
              {list.length}
            </h5>
          </div>
        </div>
        <div className="flex justify-center items-center mx-7">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <IoPersonSharp size={35} />:
              <h2 className="text-[30px]">the Instructor</h2>
            </div>

            <h5 class="mb-2 text-2xl font-semibold tracking-tight dark:text-white flex justify-center my-2 text-blue-800">
              {listPer.length}
            </h5>
          </div>
        </div>
        <div className="flex justify-center items-center mx-7">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <PiStudentFill size={35} />:
              <h2 className="text-[30px]">the user</h2>
            </div>

            <h5 class="mb-2 text-2xl font-semibold tracking-tight dark:text-white flex justify-center my-2 text-blue-800">
              {listUser.length}
            </h5>
          </div>
        </div>
        <div className="flex justify-center items-center mx-7">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <PiStudentFill size={35} />:
              <h2 className="text-[30px]">the LogInstructor</h2>
            </div>

            <h5 class="mb-2 text-2xl font-semibold tracking-tight dark:text-white flex justify-center my-2 text-blue-800">
              {listLogInst.length}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
