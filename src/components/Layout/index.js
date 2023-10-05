import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <div className="px-6 py-4 flex flex-col gap-5 mx-auto max-w-[94rem]">
      {children}
    </div>
  );
};

export default LandingLayout;
