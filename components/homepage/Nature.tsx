"use client";
import Image from "next/image";
import LeafOneImg from "../../assets/images/leaf-one.png";
import LeafTwoImg from "../../assets/images/leaf-two.png";
import { Button } from "../ui/button";

const Nature = () => {
  const handleOnClick = () => {
    const projects = document.getElementById("projects");
    projects?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-[250px] pb-20 lg:pt-[82px] lg:pb-[82px] px-[14px] lg:px-0 relative overflow-x-hidden">
      <p className="text-2xl lg:text-[70px] 2xl:text-[90px] text-center text-black font-serifDisplay font-normal">
        Find the Balance Of Life In
        <br />
        <span className="inline-block mt-0 lg:mt-20 text-[#055F15]">
          Nature
        </span>
      </p>
      <p className="w-full lg:max-w-[50%] mx-auto text-center mt-[60px] font-sofiaPro">
        Welcome to Planet Green, we’re on a mission to bring nature back into
        urban life, blending eco-friendly living with the timeless wisdom of
        Vedic farming. Here, green spaces don’t just look good – they make life
        feel meaningful. From fresh air to peaceful surroundings, we believe
        being close to nature helps us all live healthier, happier, and more
        balanced lives.
      </p>
      <div className="flex flex-row justify-center mt-[80px]">
        <Button
          className="w-[340px] h-[60px] rounded-full border border-[#D7B47B] bg-white text-[#434343] hover:bg-white"
          onClick={handleOnClick}
        >
          Explore More
        </Button>
      </div>
      <div>
        <Image
          src={LeafOneImg}
          width={400}
          height={385}
          alt="leaf"
          className="absolute top-0 lg:-top-10 -left-5 w-52 h-52 lg:w-[350px] lg:h-[300px] 2xl:w-[400px] 2xl:h-[385px] object-cover"
        />
        <Image
          src={LeafTwoImg}
          width={256}
          height={440}
          alt="leaf"
          className="absolute top-10 lg:-top-10 -right-5 w-52 h-52 lg:w-[256px] lg:h-[440px] -z-10 lg:z-0 object-cover"
        />
        {/* <Image
          src={LeafThreeImg}
          width={260}
          height={193}
          alt="leaf"
          className="absolute top-80 left-0 hidden lg:block"
        />
        <Image
          src={LeafFourImg}
          width={366}
          height={272}
          alt="leaf"
          className="absolute bottom-0 left-0 hidden lg:block"
        />
        <Image
          src={LeafFiveImg}
          width={366}
          height={272}
          alt="leaf"
          className="absolute bottom-10 right-10 hidden lg:block"
        /> */}
      </div>
    </div>
  );
};

export default Nature;
