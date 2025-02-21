import Image from "next/image";
import React from "react";
import TestimonialImg from "../../assets/images/testimonial-img.png";

interface Props {
  name: string;
  title: string;
  designation: string;
  content: string;
}

const TestimonialItem: React.FC<Props> = ({
  name,
  title,
  content,
  designation,
}) => {
  return (
    <div className="lg:py-[15px] 2xl:py-[30px] bg-[#055F15] w-full relative mt-[170px] lg:mt-[400px] 2xl:mt-[300px]">
      <Image
        src={TestimonialImg}
        width={501}
        height={556}
        alt="testimonial-img"
        className="absolute -top-[80%] lg:left-5 2xl:left-20 lg:-top-[100%] 2xl:-top-[120%] w-[113px] h-[126px] lg:w-[450px] lg:h-[500px] 2xl:w-[501px] 2xl:h-[556px]"
      />
      <div className="absolute -top-[80%] lg:-top-[100%] left-[35%] lg:left-[40%] w-[70%] lg:w-auto text-left">
        <p className="text-[18px] lg:text-[36px] text-black font-serifDisplay">
          {title}
        </p>
        <p className="text-black text-[23px] mt-4">{name}</p>
        <p className="text-black text-[18px] mt-2">{designation}</p>
      </div>
      <p className="text-[16px] lg:text-[22px] text-white font-nunito w-full lg:w-[60%] ml-auto py-[14px] lg:py-0 px-[14px] lg:px-0 lg:pr-[100px]">
        {content}
      </p>
    </div>
  );
};

export default TestimonialItem;
