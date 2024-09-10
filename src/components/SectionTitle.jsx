import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto md:w-3/12">
      <p className="text-yellow-500 mb-2">---{subHeading}---</p>
      <h3 className=" text-4xl border-y-4 py-3 mb-10 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
