import React from "react";
import Navbar from "./Navbar";
import Paymentbody from "./Paymentbody";

const Mainbody = () => {
  return (
    <>
      <Navbar />
      <h1 className="txt">Choose the plan that’s right for you</h1>
      <Paymentbody />
    </>
  );
};

export default Mainbody;
