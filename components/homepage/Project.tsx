"use client";
import Image from "next/image";
import { useState } from "react";
import CommunitiesImg from "../../assets/images/communities.png";
import DatesCountyImgFive from "../../assets/images/dates-county-five.png";
import DatesCountyImgFour from "../../assets/images/dates-county-four.png";
import DatesCountyImgOne from "../../assets/images/dates-county-one.png";
import DatesCountyImgThree from "../../assets/images/dates-county-three.png";
import DatesCountyImgTwo from "../../assets/images/dates-county-two.png";
import FarmNaturaImgFive from "../../assets/images/farm-natura-five.png";
import FarmNaturaImgFour from "../../assets/images/farm-natura-four.png";
import FarmNaturaImgOne from "../../assets/images/farm-natura-one.png";
import FarmNaturaImgThree from "../../assets/images/farm-natura-three.png";
import FarmNaturaImgTwo from "../../assets/images/farm-natura-two.png";
import DatesCountyImg from "../../assets/images/project-dates-county.png";
import FarmNaturaImg from "../../assets/images/project.png";
import Bullet from "../project/bullet";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<
    "dates_county" | "farm_natural"
  >("dates_county");

  return (
    <div className="mb-0 lg:mb-20">
      <div className="text-center mb-5 relative">
        <p className="text-[32px] lg:text-[70px] font-cormorandGaramond text-black lg:-ml-20">
          Our
        </p>
        <p className="text-[32px] lg:text-[70px] text-[#613626] font-allura ml-40 lg:ml-60">
          Communities
        </p>
        <Image
          src={CommunitiesImg}
          width={110}
          height={15}
          alt="communities"
          className="w-[60px] h-[11px] lg:w-[110px] lg:h-[15px] absolute bottom-5 left-[35%] lg:left-[35%] 2xl:left-[40%] object-cover"
        />
      </div>
      <div
        className="w-[40%] mx-auto h-[1px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF00, #585858, #FFFFFF00)",
        }}
      />
      <div className="flex flex-row items-center justify-between mb-[56px] w-[80%] lg:w-[20%] mx-auto mt-6">
        <div
          className={`w-[164px] h-[34px] rounded-full ${
            selectedProject === "dates_county" ? "border" : "border-0"
          } border-[#D7B47B] flex items-center justify-center cursor-pointer`}
          onClick={() => setSelectedProject("dates_county")}
        >
          <p className="text-base text-black">Dates County</p>
        </div>
        <div
          className={`w-[164px] h-[34px] rounded-full ${
            selectedProject === "farm_natural" ? "border" : "border-0"
          } border-[#D7B47B] flex items-center justify-center cursor-pointer`}
          onClick={() => setSelectedProject("farm_natural")}
        >
          <p className="text-base text-black">Farm Natura</p>
        </div>
      </div>
      <div
        className="py-[14px] lg:py-[80px] px-[14px] lg:pr-[40px] 2xl:pr-[80px] flex flex-col lg:flex-row items-center justify-between"
        id="projects"
      >
        <div className="relative">
          <Image
            src={
              selectedProject === "dates_county"
                ? DatesCountyImg
                : FarmNaturaImg
            }
            width={1030}
            height={918}
            alt="project"
            className="w-[355px] h-[436px] lg:w-[650px] lg:h-[1000px] 2xl:w-[1030px] 2xl:h-[918px] object-cover"
          />
          <div className="w-[80%] h-[110%] lg:w-[700px] lg:h-[900px] 2xl:w-[1099px] 2xl:h-[818px] border border-[#D09C47] absolute -top-5 lg:top-10 2xl:top-10 -left-10 lg:left-0 -z-10" />
        </div>
        <div className="w-full lg:w-[35%] 2xl:w-[30%]">
          <div className="mt-20 lg:mt-10">
            <p className="text-[32px] font-bold text-black font-nunito">
              {selectedProject === "dates_county"
                ? "Hyderabad #1 Eco-Luxury Villa Plot Community"
                : "India’s First Natural Farming Estates"}
            </p>
            <p className="mt-3 mb-[30px] lg:my-[60px] text-[#4F4F4F] text-[18px] font-nunito">
              {selectedProject === "dates_county"
                ? "Dates County is a sanctuary where nature meets luxury, offering a life of peace, beauty, and timeless elegance. Here, the future of living unfolds in perfect harmony with the environment."
                : "Farm Natura is a place where you can live close to nature, grow your own food, and enjoy a peaceful lifestyle. It’s where home meets harmony, a community built to nourish you and the earth."}
            </p>
            {selectedProject === "dates_county" ? (
              <div>
                <Bullet
                  img={DatesCountyImgOne}
                  point="Adjacent to 4000 Acre Forest Reserve"
                />
                <Bullet
                  img={DatesCountyImgTwo}
                  point="Natural Stream Within Development"
                />
                <Bullet
                  img={DatesCountyImgThree}
                  point="30,000+ Native Trees Retained"
                />
                <Bullet
                  img={DatesCountyImgFour}
                  point="40% Recreational Spaces"
                />
                <Bullet
                  img={DatesCountyImgFive}
                  point="25 Minutes From RGI Airport"
                />
              </div>
            ) : (
              <div>
                <Bullet
                  img={FarmNaturaImgOne}
                  point="Adjacent to 4000 Acre Forest Reserve"
                />
                <Bullet img={FarmNaturaImgTwo} point="Chemical-Free Living" />
                <Bullet img={FarmNaturaImgThree} point="Nutrient-Rich Soil" />
                <Bullet img={FarmNaturaImgFour} point="Carbon-Free Zone" />
                <Bullet
                  img={FarmNaturaImgFive}
                  point="Crops & Fruit-Bearing Plantations"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
