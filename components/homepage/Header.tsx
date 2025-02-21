"use client";
import { CAROUSEL_ITEMS } from "@/constants";
import Image from "next/image";
import LogoWhiteImg from "../../assets/images/logo-white.png";
import Social from "../header/Social";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Header = () => {
  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    getInTouch?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Carousel id="header">
      <CarouselContent>
        {CAROUSEL_ITEMS.map((item, idx) => {
          return (
            <CarouselItem
              key={idx}
              className="min-h-screen bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${item.img}')`,
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-5 lg:pt-0 px-[14px] lg:px-[40px] 2xl:px-[134px] relative">
                <div className="flex flex-row items-center justify-center absolute top-5 left-5 w-[90%] lg:w-[95%]">
                  <Image
                    src={LogoWhiteImg}
                    width={266}
                    height={95}
                    alt="logo"
                    className="w-[200px] h-[80px] lg:w-[266px] lg:h-[95px] object-cover"
                  />
                  {/* <Button
                    className="w-[150px] h-[50px] bg-white border border-[#D09C47] text-black rounded-full hover:bg-white"
                    onClick={handleOnClick}
                  >
                    Contact Us
                  </Button> */}
                </div>
                <div className="w-full">
                  <p className="text-[24px] lg:text-[70px] font-normal text-white font-serifDisplay text-center mb-5">
                    {item.title}
                  </p>
                  <p className="text-base lg:text-2xl text-white text-center mb-[30px font-sofiaPro]">
                    {item.subTitle}
                  </p>
                  {/* <p className="text-base lg:text-2xl text-white mt-2 font-sofiaPro text-center lg:text-left">
                    {item.description}
                  </p> */}
                </div>
                <div className="absolute bottom-5 lg:bottom-36 lg:top-0 lg:-right-5 2xl:right-10 lg:h-full w-full lg:w-auto lg:mr-10 2xl:mr-0">
                  <Social />
                </div>
                <div className="absolute bottom-32 lg:bottom-10 left-1/2 -translate-x-1/2">
                  <Button
                    className="w-[150px] h-[50px] bg-white border border-[#D09C47] text-black rounded-full hover:bg-white"
                    onClick={handleOnClick}
                  >
                    Contact Us
                  </Button>
                  {/* <Mouse className="w-[30px] h-[60px] text-white mx-auto" />
                  <p className="text-lg text-white mt-[10px]">Scroll Down</p> */}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Header;
