import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ListPersone = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const featchList = async () => {
    const response = await axios.get(`${url}/api/persone/list`);
    const coursesCount = response.data.length;
    console.log(coursesCount);

    console.log(response.data.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };
  const removeFood = async (persone) => {
    const response = await axios.post(`${url}/api/persone/remove`, {
      id: persone,
    });
    await featchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("error");
    }
  };
  useEffect(() => {
    featchList();
  }, []);
  return (
    <>
      <div className=" text-center border-[1px]  border-[solid]  border-[#cacaca] flex flex-col my-4 w-9/12  ">
        <h2 className="font-bold my-3 text-[25px] text-blue-500">
          Instructors
        </h2>
        <div className="my-3 flex px-12 py-9 gap-4  lg:gap-36  items-center justify-between ">
          <p>image</p>
          <p>Name</p>
          <p>phone</p>
          <p>lessone</p>
          <p>email</p>
          <p>Action</p>
        </div>
        <div className="px-3 text-center flex flex-col">
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex justify-between  items-center text-center my-2 border-b-[1px] "
              >
                <img src={`${url}/images/` + item.image} className="w-16" />
                <p> {item.name} </p>
                <p> {item.phone} </p>
                <p> {item.lesson} </p>
                <p> {item.email} </p>

                <button
                  onClick={() => removeFood(item._id)}
                  className="btn hover:bg-red-600 mr-3 my-2 text-[20px]"
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListPersone;
