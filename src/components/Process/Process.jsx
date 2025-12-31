import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

function Process() {
  const renderSteps = steps.map(item => {
    return (
      <div
        className={`md:basis-auto basis-[30px] ${
          item.id % 2 === 0 ? "md:-mt-45" : ""
        }`}
      >
        <div className="text-7xl text-white bg-[var(--secondary)] w-16 h-16 flex items-center mx-auto rounded-full outline-[2px] outline-offset-6 outline-[var(--secondary)] outline-dotted">
          {item.number}
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center rounded-full text-3xl p-3 bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] text-white mr-3">
            {item.icon}
          </div>
          <div>
            <h3 className="text-bg-[var(--secondary)] text-2xl font-bold mt-1">
              {item.titel}
            </h3>
            <p className="text-zinc-600 my-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1300px] my-20 mx-auto px-10">
      <div>
        {/* process heading */}
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>
        {/* process steps */}
        <div className="flex gap-y-15 md:flex-row flex-col my-20  md:pt-50">
          {renderSteps}
        </div>
      </div>
    </section>
  );
}

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    titel: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    titel: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    titel: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    titel: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
