import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ListInstLogin = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const featchList = async () => {
    const response = await axios.get(`${url}/api/inst/all`);
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
    const response = await axios.post(`${url}/api/inst/remove`, {
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
      <div>
        <div className=" text-center border-[1px]  border-[solid]  border-[#cacaca] flex flex-col my-4 w-full mx-14  ">
          <h2 className="font-bold my-3 text-[25px] text-blue-500">
            Instractor Login
          </h2>
          <div className="my-3 flex px-12 py-9 gap-4  lg:gap-36  items-center justify-between ">
            <p>Name</p>
            <p>email</p>
            <p>graduation</p>
            <p>phone</p>
            <p>Action</p>
          </div>
          <div className="px-3 text-center flex flex-col mr-4">
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex justify-between  items-center text-center my-2 border-b-[1px] "
                >
                  <p> {item.name} </p>
                  <p> {item.email} </p>
                  <p> {item.graduation} </p>
                  <p> {item.phone} </p>

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
      </div>
    </>
  );
};

export default ListInstLogin;
