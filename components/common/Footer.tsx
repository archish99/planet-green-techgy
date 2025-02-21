import Image from "next/image";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="px-[14px] lg:px-[40px] 2xl:px-[140px] pt-10 pb-4 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:border-b border-b-[#71777D] pb-5 lg:pb-[70px]">
        <div>
          <Image
            src={Logo}
            width={418}
            height={139}
            alt="logo"
            className="w-[166px] h-[55px] mx-auto lg:w-[418px] lg:h-[139px] object-contain"
          />
          {/* <div className="hidden lg:flex flex-row items-center lg:mt-12">
            <p className="text-[#2D2D2D] text-sm lg:text-base cursor-pointer text-center mr-2 lg:mr-11 font-bold">
              Home
            </p>
            <p className="text-[#2D2D2D] text-sm lg:text-base cursor-pointer text-center mr-2 lg:mr-11">
              About Us
            </p>
            <p className="text-[#2D2D2D] text-sm lg:text-base cursor-pointer text-center mr-2 lg:mr-11">
              Project
            </p>
            <p className="text-[#2D2D2D] text-sm lg:text-base cursor-pointer text-center mr-2 lg:mr-11">
              Location
            </p>
            <p className="text-[#2D2D2D] text-sm lg:text-base cursor-pointer text-center mr-2 lg:mr-11">
              Masterplan
            </p>
            <p className="text-[#2D2D2D] text-sm lg:text-base cursor-pointer text-center">
              Contact Us
            </p>
          </div> */}
        </div>
        <div className="flex flex-col lg:flex-row items-start font-josefinSans">
          <p className="text-sm text-center lg:text-left lg:text-base text-[#92989F] lg:mr-10 mt-2 lg:mt-0">
            2nd Floor, Regent Square Building
            <br className="hidden lg:block" />
            Q-City Road, Gowlidoddi
            <br />
            Hyderabad - 500075
          </p>
          <p className="text-sm text-center lg:text-left w-full lg:w-auto lg:text-base text-[#92989F] mt-2 lg:mt-0">
            +91 9555700900
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-end mt-5 lg:mt-10 pb-0 lg:pb-[90px] font-josefinSans">
        {/* <div className="flex flex-row items-center mb-4 lg:mb-0">
          <p className="text-sm lg:text-base text-[#92989F]">Privacy Policy</p>
          <p className="text-sm lg:text-base text-[#92989F] mx-10">|</p>
          <p className="text-sm lg:text-base text-[#92989F]">Accessibility</p>
          <p className="text-sm lg:text-base text-[#92989F] mx-10">|</p>
          <p className="text-sm lg:text-base text-[#92989F]">Legal</p>
        </div> */}
        <p className="text-sm lg:text-base text-[#92989F] mt-0">
          Designed with love by TechGy Innovations 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
