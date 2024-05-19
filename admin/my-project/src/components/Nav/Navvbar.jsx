import React from "react";
import img from "../../admin_assets/logo.png";
import img1 from "../../admin_assets/profile_image.png";
import { Link } from "react-router-dom";

const Navvbar = () => {
  return (
    <>
      <div className="mx-5">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/">
              <h1>Admin</h1>
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={img1} src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navvbar;
