import React from "react";
import ProductCard from "../ProductCard";
import PageLayout from "../Layout/PageLayout";
import Phone from "../../assets/Phone.png";
import Laptop from "../../assets/Laptop.png";
import MacBook from "../../assets/MacBookShow.png";
const OurWork = () => {
  const workData = [
    {
      title: "Pulsewave mobile ui design",
      desc: "web design, visual identity",
      img: Phone,
    },
    {
      title: "Bonewa mobile app Development",
      desc: "Development, Deployment",
      img: MacBook,
    },
    {
      title: "Pulsewave mobile ui design",
      desc: "web design, visual identity",
      img: Laptop,
    },
    {
      title: "Bonewa mobile app Development",
      desc: "Development, Deployment",
      img: MacBook,
    },
  ];
  return (
    <PageLayout>
      <h1>(Our Works)</h1>
      <hr className=" mb-6"></hr>
      <div className="flex flex-wrap">
        {workData?.map((detail, index) => {
          return <ProductCard detail={detail} key={index} />;
        })}
      </div>
    </PageLayout>
  );
};

export default OurWork;
