import React from "react";

const ProductCard = ({ detail }) => {
  return (
    <div className="w-[680px] mx-auto">
      <img
        className="w-full rounded-lg h-auto object-cover"
        alt={detail.desc}
        src={detail.img}
      />
      <h2 className=" font-semibold">{detail.title}</h2>
      <p className=" text-[#8F8F8F]">{detail.desc}</p>
    </div>
  );
};

export default ProductCard;
