import React, { useEffect, useState } from "react";
import img from "../../admin_assets/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";

const AddPersone = () => {
  const url = "http://localhost:4000";
  const [images, setImages] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    phone: "",
    lesson: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmint = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("jobTitle", data.jobTitle);
    formData.append("phone", data.phone);
    formData.append("image", images);
    formData.append("lesson", data.lesson);
    const response = await axios.post(`${url}/api/persone/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        email: "",
        jobTitle: "",
        phone: "",
        lesson: "",
      });
      setImages(false);
      toast.success(response.data.message);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className=" my-3 wf flex justify-center ps-52  ">
        <section class=" w-[500px] p-6 flex flex-col mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Add Instructor
          </h2>

          <form className="flex flex-col   " onSubmit={handleSubmint}>
            <div class="flex flex-col gap-7 ">
              <div className="my-5">
                <p>Upload Image</p>
                <label
                  class="text-gray-700 mt-3 dark:text-gray-200 cursor-pointer"
                  for="username"
                  htmlFor="image"
                >
                  <img
                    src={images ? URL.createObjectURL(images) : img}
                    alt=""
                    className="w-44 rounded-box mt-2"
                  />
                </label>
                <input
                  id="image"
                  type="file"
                  hidden
                  onChange={(e) => setImages(e.target.files[0])}
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Instructor Names
                </label>
                <input
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Instructor Email
                </label>
                <input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  phone
                </label>
                <input
                  name="phone"
                  onChange={onChangeHandler}
                  value={data.phone}
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  jobTitle
                </label>
                <textarea
                  name="jobTitle"
                  onChange={onChangeHandler}
                  value={data.jobTitle}
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  {" "}
                  Courses lesson
                </label>
                <input
                  name="lesson"
                  onChange={onChangeHandler}
                  value={data.lesson}
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                ADD
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddPersone;
