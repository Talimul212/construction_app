/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  const services = [
    { id: 1, item: " Construction" },
    { id: 2, item: " Property Buy and sell" },
    { id: 3, item: " Apartment" },
    { id: 4, item: " Real Estale" },
    { id: 5, item: "Commercial space sell " },
  ];
  return (
    <div className="flex gap-12 flex-wrap justify-center items-center">
      {services.map((e, i) => (
        <div
          className=" border-2 rounded-lg w-60 px-5 py-4 text-center  shadow-lg  text-xl h-full"
          key={e.id}
        >
          {e.item}
        </div>
      ))}
    </div>
  );
};

export default Services;
