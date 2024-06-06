import React from "react";
import ContentImage from "../../Assets/image 1@2x.png";

const ContentSection = () => {
  return (
    <div className="lg:w-1/2 w-full">
      <p
        className="text-[35px] md:text-[50px] not-italic font-normal leading-[40px] md:leading-[60px] flex flex-col"
        style={{
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <span className="text-[#fff]">
          The Performance Max Optimization Blueprint -
        </span>
        <span className="text-[#FFC958]">Scale To $50k/day</span>
      </p>
      <p className="mt-[35px] md:mt-[60px] text-[#fff] text-[18px] not-italic font-normal leading-[28px]">
        Performance Max is one of the most powerful tools to scale revenue on
        Google, if you know how to use it. Steal our winning strategies to scale
        on PMAX effortlessly.
      </p>

      <div className="relative mt-2">
        <div
          className="rounded-[680px] w-full h-[550px] md:h-[600px]"
          style={{
            background: "rgba(86, 86, 187, 0.50)",
            filter: "blur(56.20000076293945px)",
          }}
        ></div>
        <div className="absolute top-5 left-[10px] sm:left-[15%] md:left-1/4 lg:left-[80px] bottom-[-203.601px] w-[300px] sm:w-[400px] h-[450px] sm:h-[534px]">
          <img
            src={ContentImage}
            alt="ContentImage"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
