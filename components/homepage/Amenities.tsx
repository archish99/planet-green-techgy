import Image from "next/image";
import AmenitiesImgFour from "../../assets/images/amenities-four.png";
import AmenitiesLine from "../../assets/images/amenities-line.png";
import AmenitiesImgOne from "../../assets/images/amenities-one.png";
import AmenitiesImgThree from "../../assets/images/amenities-three.png";
import AmenitiesImgTwo from "../../assets/images/amenities-two.png";
import AmenitiesOneImg from "../../assets/images/features-one.png";
import AmenitiesTwoImg from "../../assets/images/features-two.png";
import LeafOneImg from "../../assets/images/leaf-one.png";
import LeafSixImg from "../../assets/images/leaf-six.png";
import ImgContainer from "../amenities/ImgContainer";

const Amenities = () => {
  return (
    <div className="py-14 lg:py-[80px] relative">
      <Image
        src={LeafOneImg}
        width={400}
        height={385}
        alt="leaf"
        className="w-[141px] h-[95px] lg:w-[400px] lg:h-[385px] object-cover absolute top-0 left-0 -z-10"
      />
      <Image
        src={LeafSixImg}
        width={266}
        height={462}
        alt="leaf"
        className="w-[43px] h-[75px] lg:w-[266px] lg:h-[462px] object-cover absolute top-[40%] left-5 lg:left-0 -z-10"
      />
      <p className="text-[24px] lg:text-[90px] text-[#613626] text-center font-serifDisplay">
        Our Features
      </p>
      <p className="text-black mt-5 text-center z-10 block mx-[50px] lg:mx-0">
        Truly a one-of-a-kind experience! A home that makes your world complete.
        With a whole new world around you.
      </p>
      <div className="relative mt-[30px] lg:mt-[100px]">
        <Image
          src={AmenitiesOneImg}
          width={1267}
          height={412}
          alt="amenities"
          className="mx-auto w-[293px] h-[95px] lg:w-[1000px] lg:h-[412px] 2xl:w-[1200px] 2xl:h-[500px] object-cover rounded-[2px] lg:rounded-[10px]"
        />
        <Image
          src={AmenitiesTwoImg}
          width={424}
          height={516}
          alt="amenities"
          className="w-[106px] h-[112px] lg:w-[424px] lg:h-[516px] absolute top-10 right-10 -z-10 rounded-[2px] lg:rounded-[10px] object-cover"
          style={{ transform: "scale(-1, 1)" }}
        />
      </div>
      <div className="relative">
        <Image
          src={AmenitiesLine}
          width={274}
          height={800}
          alt="line"
          className="w-[87px] h-[333px] lg:w-[150px] lg:h-[700px] 2xl:w-[274px] 2xl:h-[800px] absolute top-0 left-[50%] -translate-x-1/2"
        />
      </div>
      <div className="mt-[80px] lg:mt-[200px] w-full lg:w-[70%] mx-auto">
        <div className="grid grid-cols-2 justify-items-center">
          <div>
            <ImgContainer img={AmenitiesImgOne} />
            <p className="text-[16px] lg:text-[24px] text-black font-redHatDisplay mt-5 font-bold text-center">
              Carbon-Free Zone
            </p>
          </div>
          <div>
            <ImgContainer img={AmenitiesImgTwo} />
            <p className="text-[16px] lg:text-[24px] text-black font-redHatDisplay mt-5 font-bold text-center">
              Next to 4000-Acre
              <br />
              Forest Reserve
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center mt-[50px] lg:mt-[135px]">
          <div>
            <ImgContainer img={AmenitiesImgThree} />
            <p className="text-[16px] lg:text-[24px] text-black font-redHatDisplay mt-5 font-bold text-center">
              Naturally Thriving
              <br />
              Ecosystem
            </p>
          </div>
          <div>
            <ImgContainer img={AmenitiesImgFour} />
            <p className="text-[16px] lg:text-[24px] text-black font-redHatDisplay mt-5 font-bold text-center">
              Better AQI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
