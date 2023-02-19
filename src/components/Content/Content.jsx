import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkPoint from "../../assets/mobile/checkpoint.svg";

const Content = () => {
  return (
    <section className="flex-col">
      <div className="ml-[70px] mr-[54px] text-bold bg-purple-600 flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent">
        <div className="mt-16 flex gap-8 items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            10245
            <p className="text-13 font-semibold mb-[36px]">Customers</p>
          </p>
        </div>
        <div className="flex gap-8 items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            12045
            <p className="text-13 font-semibold">Cards Issues</p>
          </p>
        </div>
      </div>
      <div className="text-13 flex flex-col w-full mt-[90px] font-semibold">
        <p className="mt-[51px] flex gap-8 ml-[70px] mr-[29px] items-center">
          <img src={checkPoint} alt="" />
          <p>Card reports sent to your phone every week </p>
        </p>

        <p className="mt-[51px] flex gap-8 ml-[70px] mr-[29px] items-center">
          <img src={checkPoint} alt="" />
          <p>No extra fees </p>
        </p>

        <p className="mt-[51px] flex gap-8 ml-[70px] mr-[29px] items-center">
          <img src={checkPoint} alt="" />
          <p>Set pending limits and restriction </p>
        </p>
      </div>
    </section>
  );
};

export default Content;
