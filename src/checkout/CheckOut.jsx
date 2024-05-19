import React, { useContext, useState } from "react";
import { Form, Button, Input, Select, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";

const CheckOut = () => {
  const { removecart, cartItem, food_list, getTotalCartAmount, url } =
    useContext(StoreContext);
  return (
    <>
      <div>
        <div class="container-fluid bg-primary py-5 mb-5 about-header ">
          <div className="">
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                  <h1 class="display-3 text-white animated slideInDown">
                    Checkout
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
                        checkout
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formmmm">
          <div class="container">
            <div class="row">
              <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">Your cart</span>
                  <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3 ">
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Subtotal</h6>
                    </div>
                    <span class="text-muted">{getTotalCartAmount()}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Service</h6>
                    </div>
                    <span class="text-muted">{5}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Total</h6>
                    </div>
                    <span class="text-muted">{getTotalCartAmount() + 5}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Billing address</h4>
                <form class="needs-validation" novalidate="">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName">First name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div class="invalid-feedback">
                        {" "}
                        Valid first name is required.{" "}
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName">Last name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div class="invalid-feedback">
                        {" "}
                        Valid last name is required.{" "}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="username">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Username"
                        required=""
                      />
                      <div class="invalid-feedback">
                        {" "}
                        Your username is required.{" "}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email">
                      Email <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Please enter a valid email address for shipping updates.{" "}
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Please enter your shipping address.{" "}
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address2">
                      Address 2 <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <hr class="mb-4" />

                  <hr class="mb-4" />

                  <hr class="mb-4" />
                  <Link to="/payment">
                    <button
                      class="btn btn-primary btn-lg btn-block mb-4"
                      type="submit"
                    >
                      Continue to checkout
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
