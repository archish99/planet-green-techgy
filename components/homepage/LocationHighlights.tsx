import Image from "next/image";
import LocationFiveImg from "../../assets/images/location-five.png";
import LocationFourImg from "../../assets/images/location-four.png";
import BgImg from "../../assets/images/location-highlights.png";
import LocationOneImg from "../../assets/images/location-one.png";
import LocationThreeImg from "../../assets/images/location-three.png";
import LocationTwoImg from "../../assets/images/location-two.png";
import MapPinImg from "../../assets/images/map-pin.png";

const LocationHighlights = () => {
  return (
    <div className="relative">
      {/* <div className="absolute left-20 hidden lg:block">
        <Image src={FlowerLineImg} width={220} height={843} alt="flower-line" />
        <Image
          src={FlowerImg}
          width={309}
          height={206}
          alt="flower"
          className="absolute -left-10 -bottom-[13%] w-[309px] h-[206px] object-contain"
        />
      </div> */}
      <Image
        src={BgImg}
        width={1931}
        height={1420}
        alt="bg"
        className="object-cover 2xl:object-contain w-full h-[1195px] lg:h-[1420px]"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-[15%] lg:top-[20%] w-full">
        <div className="flex flex-row items-center justify-center mb-3 lg:mb-0">
          <Image
            src={MapPinImg}
            width={92}
            height={92}
            alt="map"
            className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] mr-3 lg:mr-0"
          />
          <p className="text-[24px] lg:text-[70px] text-center text-white font-serifDisplay">
            KANDUKUR
          </p>
        </div>
        <p className="text-[#D09C47] text-[24px] font-medium font-sofiaPro text-center mb-5 lg:mb-0">
          The Future City of Hyderabad - Srisailam Highway
        </p>
        <p className="mt-3 text-white text-center font-sofiaPro px-10 lg:px-0 mx-auto w-full lg:w-[50%]">
          Our eco-friendly & sustainable developments are strategically situated
          in the most promising location in Hyderabad with high potential for
          appreciation, ensuring that your investment not only enhances your
          well-being.
        </p>
        <div className="w-full lg:w-[80%] mx-auto mt-[30px] lg:mt-[70px]">
          <div className="grid grid-cols-1 gap-y-[30px] lg:gap-y-0 lg:grid-cols-3 justify-items-center font-cinzel">
            <div>
              <div className="w-[45px] h-[45px] lg:w-[133px] lg:h-[133px] rounded-full bg-white flex items-center justify-center mx-auto mb-[14px] lg:mb-[30px]">
                <Image
                  src={LocationOneImg}
                  width={64}
                  height={64}
                  alt="location-one"
                  className="w-[20px] h-[20px] lg:w-[64px] lg:h-[64px]"
                />
              </div>
              <p className="text-white text-[12px] lg:text-[20px] text-center">
                20 Minutes From
                <br />
                Outer Ring Road
              </p>
            </div>
            <div>
              <div className="w-[45px] h-[45px] lg:w-[133px] lg:h-[133px] rounded-full bg-white flex items-center justify-center mx-auto mb-[14px] lg:mb-[30px]">
                <Image
                  src={LocationTwoImg}
                  width={64}
                  height={64}
                  alt="location-one"
                  className="w-[20px] h-[20px] lg:w-[64px] lg:h-[64px]"
                />
              </div>
              <p className="text-white text-[12px] lg:text-[20px] text-center">
                25 Minutes From Hyderabad
                <br />
                International Airport
              </p>
            </div>
            <div>
              <div className="w-[45px] h-[45px] lg:w-[133px] lg:h-[133px] rounded-full bg-white flex items-center justify-center mx-auto mb-[14px] lg:mb-[30px]">
                <Image
                  src={LocationThreeImg}
                  width={64}
                  height={64}
                  alt="location-one"
                  className="w-[20px] h-[20px] lg:w-[64px] lg:h-[64px]"
                />
              </div>
              <p className="text-white text-[12px] lg:text-[20px] text-center">
                Proposed Metro
                <br />
                Rail Connectivity
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-[30px] lg:gap-y-0 lg:grid-cols-2 justify-items-center font-cinzel mt-[20px] lg:mt-[60px]">
            <div>
              <div className="w-[45px] h-[45px] lg:w-[133px] lg:h-[133px] rounded-full bg-white flex items-center justify-center mx-auto mb-[14px] lg:mb-[30px]">
                <Image
                  src={LocationFourImg}
                  width={64}
                  height={64}
                  alt="location-one"
                  className="w-[20px] h-[20px] lg:w-[64px] lg:h-[64px]"
                />
              </div>
              <p className="text-white text-[12px] lg:text-[20px] text-center">
                Upcoming Skill
                <br />
                University
              </p>
            </div>
            <div>
              <div className="w-[45px] h-[45px] lg:w-[133px] lg:h-[133px] rounded-full bg-white flex items-center justify-center mx-auto mb-[14px] lg:mb-[30px]">
                <Image
                  src={LocationFiveImg}
                  width={64}
                  height={64}
                  alt="location-one"
                  className="w-[20px] h-[20px] lg:w-[64px] lg:h-[64px]"
                />
              </div>
              <p className="text-white text-[12px] lg:text-[20px] text-center">
                Upcoming
                <br />
                AI City
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-[30px] lg:mt-[100px]">
          <a
            className="w-[340px] h-[40px] lg:h-[60px] bg-transparent border border-[#D7B47B] rounded-full hover:bg-transparent font-kumbhSans font-semibold text-[15px] lg:text-[18px] text-white flex items-center justify-center"
            href="/brochure.pdf"
            target="_blank"
            download
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationHighlights;
