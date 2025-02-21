"use client";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Social = () => {
  return (
    <div className="w-full lg:h-full flex flex-row lg:flex-col items-center justify-center">
      <div className="mx-7 lg:my-7 flex flex-row lg:flex-col items-center justify-between w-full">
        <Instagram
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.instagram.com/planetgreeneco_official/",
              "_blank"
            )
          }
        />
        <Facebook
          className="text-white lg:my-12 cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/PlanetGreenInfra/", "_blank")
          }
        />
        <Youtube
          className="text-white lg:mb-12 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCoClvBsQCNd5kgbN12dMYDA",
              "_blank"
            )
          }
        />
        <Linkedin
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/planet-green-infra/",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default Social;
