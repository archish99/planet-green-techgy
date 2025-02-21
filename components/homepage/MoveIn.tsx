"use client";
import Image from "next/image";
import MoveInBgMobile from "../../assets/images/move-in-bg-mobile.png";
import MoveInBg from "../../assets/images/move-in-bg.png";
import MoveInImg from "../../assets/images/move-in.png";
import { Button } from "../ui/button";

const MoveIn = () => {
  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    getInTouch?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative px-[14px] lg:px-0 py-0 mt-10 lg:mt-0 lg:py-20">
      <Image
        src={MoveInBg}
        width={1618}
        height={455}
        alt="bg"
        className="w-full h-[300px] lg:w-[1400px] lg:h-[400px] 2xl:w-[1800px] 2xl:h-[455px] object-cover mx-auto hidden lg:block"
      />
      <Image
        src={MoveInBgMobile}
        width={368}
        height={138}
        alt="bg"
        className="w-[368px] h-[138px] object-cover mx-auto block lg:hidden"
      />
      <Image
        src={MoveInImg}
        width={641}
        height={455}
        alt="move-in"
        className="w-[142px] h-[116px] lg:w-[400px] lg:h-[500px] 2xl:w-[641px] 2xl:h-[455px] object-contain absolute right-[15%] lg:right-[5%] 2xl:right-[15%] -top-10 lg:-top-20"
      />
      <div className="absolute left-16 lg:left-[15%] top-[18%] px-[14px] lg:px-0">
        <p className="text-[15px] lg:text-[46px] text-white text-left font-jost">
          Be a Part of a<br className="block lg:hidden" /> Greener Tomorrow
        </p>
        <p className="text-[12px] lg:text-base text-white mt-0 lg:mt-10 text-left font-jost">
          Explore eco-friendly spaces
          <br className="lg:hidden block" />
          for in sale in Hyderabad
        </p>
        <div className="flex lg:block flex-row justify-center">
          <Button
            className="mt-5 lg:mt-32 w-[99px] h-[30px] lg:w-[242px] lg:h-[50px] text-sm bg-white text-black border border-black hover:bg-white absolute -right-[70%] top-8 lg:static"
            onClick={handleOnClick}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoveIn;
