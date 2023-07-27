import React from "react";
import Leftcomp from "./Leftcomp";
import Middlecomp from "./Middlecomp";
import Rightcomp from "./Rightcomp";

const Paymentbody = () => {
  return (
    <>
      <div className="container">
        <div className="item1">
          <Leftcomp />
        </div>
        <div className="item2">
          <Middlecomp />
        </div>
        <div className="item3">
          <Rightcomp />
        </div>
      </div>
    </>
  );
};

export default Paymentbody;
