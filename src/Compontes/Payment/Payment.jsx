import React, { useContext } from "react";
import { StoreContext } from "../../context/Storecontext";

const Payment = () => {
  const { removecart, cartItem, food_list, getTotalCartAmount, url } =
    useContext(StoreContext);
  return (
    <>
      <div>
        <main class="page payment-page my-lg-5">
          <section class="payment-form dark">
            <div class="container">
              <div class="block-heading">
                <h2>Payment</h2>
              </div>
              <form>
                <div class="products">
                  <h3 class="title">Checkout</h3>
                  <div class="item">
                    <span class="price">{getTotalCartAmount()}</span>
                    <p class="item-name"> Subtotal</p>
                  </div>
                  <div class="item">
                    <span class="price">{5}</span>
                    <p class="item-name">Service</p>
                  </div>
                  <div class="total">
                    Total<span class="price">{getTotalCartAmount() + 5}</span>
                  </div>
                </div>
                <div class="card-details">
                  <h3 class="title">Credit Card Details</h3>
                  <div class="row">
                    <div class="form-group col-sm-7">
                      <label for="card-holder">Card Holder</label>
                      <input
                        id="card-holder"
                        type="text"
                        class="form-control"
                        placeholder="Card Holder"
                        aria-label="Card Holder"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="form-group col-sm-5">
                      <label for="">Expiration Date</label>
                      <div class="input-group expiration-date">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="MM"
                          aria-label="MM"
                          aria-describedby="basic-addon1"
                        />
                        <span class="date-separator">/</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="YY"
                          aria-label="YY"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div class="form-group col-sm-8">
                      <label for="card-number">Card Number</label>
                      <input
                        id="card-number"
                        type="text"
                        class="form-control"
                        placeholder="Card Number"
                        aria-label="Card Holder"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="form-group col-sm-4">
                      <label for="cvc">CVC</label>
                      <input
                        id="cvc"
                        type="text"
                        class="form-control"
                        placeholder="CVC"
                        aria-label="Card Holder"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="form-group w-full ">
                      <button type="button" class="btn btn-primary  w-50">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Payment;
