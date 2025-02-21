import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  img: StaticImageData;
  point: string;
}

const Bullet: React.FC<Props> = ({ img, point }) => {
  return (
    <div className="flex flex-row items-center mb-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D09C47]">
        <Image src={img} width={24} height={24} alt="img" />
      </div>
      <p className="text-[18px] font-nunito text-[#4F4F4F] ml-5">{point}</p>
    </div>
  );
};

export default Bullet;
