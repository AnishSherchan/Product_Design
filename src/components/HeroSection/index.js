import React from "react";
import MacBook from "../../assets/MacBook Pro 16.png";
import PageLayout from "../Layout/PageLayout";

const HeroSection = () => {
  return (
    <PageLayout>
      <h1 className=" text-center mt-14">
        Innovación: Where Design Meets Code
      </h1>
      <p className=" text-center max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Morbi sit amet maximus neque. ctetur adipiscing elit.
        Morbi sit amet maximus neque.{" "}
      </p>
      <div className=" max-w-[1000px] mx-auto">
        <img
          className="w-full h-auto object-cover"
          src={MacBook}
          alt="MacBook Pro"
        />
      </div>
    </PageLayout>
  );
};

export default HeroSection;
