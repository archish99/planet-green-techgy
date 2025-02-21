import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  img: StaticImageData;
}

const ImgContainer: React.FC<Props> = ({ img }) => {
  return (
    <div className="w-[100px] h-[100px] lg:w-[261px] lg:h-[261px] rounded-full border border-[#0000001A] flex flex-row items-center justify-center mx-auto">
      <div className="w-[80px] h-[80px] lg:w-[188px] lg:h-[188px] rounded-full border border-[#0000001A] flex flex-row items-center justify-center">
        <Image
          src={img}
          width={76}
          height={76}
          alt="img"
          className="w-10 h-10 lg:w-[103px] lg:h-[103px]"
        />
      </div>
    </div>
  );
};

export default ImgContainer;
