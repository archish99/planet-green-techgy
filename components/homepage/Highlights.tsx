"use client";
import Image from "next/image";
import NatureOneImg from "../../assets/images/nature-one.png";
import NatureThreeImg from "../../assets/images/nature-three.png";
import NatureTwoImg from "../../assets/images/nature-two.png";
import HighlightsImg from "../../assets/images/nature.png";
import { Button } from "../ui/button";

const Highlights = () => {
  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    getInTouch?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:py-[80px] px-[14px] lg:pl-[40px] 2xl:pl-[140px] flex flex-col lg:flex-row items-center justify-between">
      <div className="w-[100%] order-2 lg:order-1">
        <div className="relative">
          <p className="text-[24px] lg:text-[70px] 2xl:text-[90px] text-[#613626] font-serifDisplay text-left">
            It&apos;s Us Who Needs <br />{" "}
            <span className="text-[#055F15] inline-block w-[45%] lg:w-[65%] text-right">
              Nature
            </span>
          </p>
          <div className="h-[1px] bg-[#D09C47] w-[50%] absolute bottom-3 right-2" />
        </div>
        <p className="text-base text-center lg:text-left lg:text-lg text-[#4A4A4A] mt-10 lg:mt-20 w-full lg:w-[90%] 2xl:max-w-[70%] font-sofiaPro mb-[30px] lg:mb-[125px]">
          At Planet Green, we want you to make yourself a part of nature in ways
          you can. Either for indulgence, for happy living, for engaging
          yourself in cultivating land, or to make the lap of Mother Earth
          cleaner and greener again. So, through Planet Green, we aspire to
          create farming eco-systems and living communities that let you
        </p>
        <div className="grid grid-cols-3 2xl:gap-x-[150px] lg:gap-y-[80px] w-full 2xl:max-w-[50%] justify-items-center lg:mt-0">
          <div>
            <Image
              src={NatureOneImg}
              width={88}
              height={88}
              alt="nature-one"
              className="w-[40px] h-[40px] lg:w-[88px] lg:h-[88px] mx-auto"
            />
            <p className="mt-2 lg:mt-[30px] text-center text-[18px] lg:text-[22px] text-[#757575]">
              INDULGE
            </p>
          </div>
          <div>
            <Image
              src={NatureTwoImg}
              width={88}
              height={88}
              alt="nature-one"
              className="w-[40px] h-[40px] lg:w-[88px] lg:h-[88px] mx-auto"
            />
            <p className="mt-2 lg:mt-[30px] text-center text-[18px] lg:text-[22px] text-[#757575]">
              INVOLVE
            </p>
          </div>
          <div>
            <Image
              src={NatureThreeImg}
              width={88}
              height={88}
              alt="nature-one"
              className="w-[40px] h-[40px] lg:w-[88px] lg:h-[88px] mx-auto"
            />
            <p className="mt-2 lg:mt-[30px] text-center text-[18px] lg:text-[22px] text-[#757575]">
              IMPACT
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center lg:justify-start mt-10 lg:mt-20">
          <Button
            className="w-[339px] h-[40px] lg:h-[60px] rounded-full bg-transparent hover:bg-transparent border border-[#D7B47B] text-black text-[15px] lg:text-[18px]"
            onClick={handleOnClick}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
      <div className="w-full relative order-1 lg:order-2 mb-16 lg:mb-0">
        <div className="w-[80%] h-[110%] lg:w-[700px] lg:h-[800px] 2xl:w-[811px] 2xl:h-[1100px] border border-[#D09C47] absolute -top-7 right-0 lg:-right-40 -z-10" />
        <Image
          src={HighlightsImg}
          width={811}
          height={1044}
          alt="highlights"
          className="w-[355px] h-[436px] lg:w-[800px] lg:h-[750px] 2xl:w-[811px] 2xl:h-[1044px] object-cover ml-auto -mt-5"
        />
      </div>
    </div>
  );
};

export default Highlights;
