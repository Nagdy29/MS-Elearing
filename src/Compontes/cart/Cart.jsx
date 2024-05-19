import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { StoreContext } from "../../context/Storecontext";

const Cart = () => {
  const { removecart, cartItem, food_list, getTotalCartAmount, url } =
    useContext(StoreContext);
  return (
    <>
      <div className="cart">
        <div className=" contact">
          <div class="container-fluid bg-primary py-5 mb-5 cart-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">
                      Shopping Cart
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
                          Cart
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
        <div className="cart_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="">
                  <div className="cart-table table-responsive mb--60">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </form>
              </div>
            </div>
            <br />
            <hr />
            <div>
              {food_list.map((item, index) => {
                if (cartItem[item._id] > 0) {
                  return (
                    <div className="  mt-3  cart-item-title d-flex align-items-center justify-content-between ">
                      <img
                        src={url + "/images/" + item.image}
                        alt=""
                        className="image-cart"
                      />
                      <p> {item.name} </p>
                      <p> ${item.price} </p>
                      <p> {cartItem[item._id]} </p>
                      <p> {item.price * cartItem[item._id]} </p>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removecart(item._id)}
                      >
                        x
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="totals w-25 ms-4 m-4  rounded-2">
          <div>
            <h2 className="font-bold text-[30px] my-3 mx-1">Cart Totals</h2>
          </div>
          <div className="d-flex justify-content-between align-items-center p-3 ">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center p-3">
            <p>Service</p>
            <p>{5}</p>
          </div>
          <hr />

          <div className="d-flex justify-content-between align-items-center p-3">
            <p className="font-serif text-[20px]">Total</p>
            <p>{getTotalCartAmount() + 5}</p>
          </div>
          <Link to="/checkout">
            <button className="btn btn-outline-primary">
              Process to CheckOut
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
