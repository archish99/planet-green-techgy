import Image from "next/image";
import ImgFour from "../../assets/images/one-nature-four.png";
import ImgOne from "../../assets/images/one-nature-one.png";
import ImgThree from "../../assets/images/one-nature-three.png";
import ImgTwo from "../../assets/images/one-nature-two.png";
import ProjectLeftImg from "../../assets/images/project-left.png";

const OneNature = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-[70px] lg:py-[80px] px-[14px] lg:pr-[40px] 2xl:pr-[140px]">
      <div className="w-full lg:w-[60%] 2xl:w-full relative lg:mr-10 2xl:mr-0 mb-10 lg:mb-0">
        <div className="w-[90%] h-[110%] lg:w-[700px] lg:h-[800px] 2xl:w-[811px] 2xl:h-[1100px] border border-[#D09C47] absolute -top-5 lg:-top-7 -left-4 lg:-left-40 -z-10" />
        <Image
          src={ProjectLeftImg}
          width={918}
          height={1030}
          alt="highlights"
          className="w-[355px] h-[436px] lg:w-[800px] lg:h-[750px] 2xl:w-[918px] 2xl:h-[1030px] object-cover"
        />
      </div>
      <div className="lg:w-[60%] 2xl:w-[70%]">
        <p className="text-[24px] lg:text-[70px] text-[#613626] font-serifDisplay text-center lg:text-left">
          Become One With <br />
          <span className="text-center lg:text-right w-[80%] inline-block text-[#055F15]">
            Nature
          </span>
        </p>
        <div
          className="w-full h-[1px] my-6 lg:my-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FFFFFF00, #585858, #FFFFFF00)",
          }}
        />
        <p className="text-[#4F4F4F] text-[16px] lg:text-[22px] text-center lg:text-left lg:mt-[50px] mb-[30px] lg:mb-[80px]">
          At Planet Green, we invite you to reconnect with nature in meaningful
          ways - whether for personal enjoyment, cultivating land, or
          contributing to a cleaner, greener environment. Through our projects,
          we aim to establish farming ecosystems and living communities that
          allow you to engage with the natural world in a fulfilling manner.
        </p>
        <div className="grid grid-cols-2 justify-items-center gap-y-[70px]">
          <div>
            <div className="w-11 h-11 lg:w-[90px] lg:h-[90px] rounded-full bg-[#D09C47] flex items-center justify-center mx-auto">
              <Image
                src={ImgOne}
                width={44}
                height={44}
                alt="img-one"
                className="w-5 h-5 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-[#D09C47] text-[15px] lg:text-[18px] text-center mt-2 lg:mt-5">
              RAINWATER
              <br />
              HARVESTING
            </p>
          </div>
          <div>
            <div className="w-11 h-11 lg:w-[90px] lg:h-[90px] rounded-full bg-[#D09C47] flex items-center justify-center mx-auto">
              <Image
                src={ImgTwo}
                width={44}
                height={44}
                alt="img-one"
                className="w-5 h-5 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-[#D09C47] text-[15px] lg:text-[18px] text-center mt-2 lg:mt-5">
              GROUND WATER
              <br />
              HARVESTING
            </p>
          </div>
          <div>
            <div className="w-11 h-11 lg:w-[90px] lg:h-[90px] rounded-full bg-[#D09C47] flex items-center justify-center mx-auto">
              <Image
                src={ImgThree}
                width={44}
                height={44}
                alt="img-one"
                className="w-5 h-5 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-[#D09C47] text-[15px] lg:text-[18px] text-center mt-2 lg:mt-5">
              30,000+ NATIVE
              <br />
              TREES RETAINED
            </p>
          </div>
          <div>
            <div className="w-11 h-11 lg:w-[90px] lg:h-[90px] rounded-full bg-[#D09C47] flex items-center justify-center mx-auto">
              <Image
                src={ImgFour}
                width={44}
                height={44}
                alt="img-one"
                className="w-5 h-5 lg:w-11 lg:h-11"
              />
            </div>
            <p className="text-[#D09C47] text-[15px] lg:text-[18px] text-center mt-2 lg:mt-5">
              CHEMICAL-FREE &
              <br />
              CARBON-FREE ZONES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneNature;
