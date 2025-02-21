import { GALLERY_IMGS } from "@/constants";
import Image from "next/image";

const LocationView = () => {
  return (
    <div>
      <p className="text-[24px] lg:text-[90px] text-[#613626] font-serifDisplay ml-5 lg:ml-20 mb-5 lg:mb-20">
        Gallery
      </p>
      <div
        id="gallery"
        className="flex flex-row items-center overflow-x-scroll"
      >
        {GALLERY_IMGS.map((item, idx) => (
          <Image
            key={idx}
            src={item}
            width={488}
            height={1079}
            alt="img"
            className="w-[488px] h-[1079px] object-cover mr-[6px]"
          />
        ))}
      </div>
    </div>
  );
};

export default LocationView;
