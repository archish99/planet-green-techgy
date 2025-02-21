import Image from "next/image";
import GetInTouchImg from "../../assets/images/get-in-touch.png";
import ContactForm from "../common/ContactForm";

const GetInTouch = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between mt-[100px] font-poppins px-[14px] lg:px-0 lg:pr-[100px]"
      id="getInTouch"
    >
      <Image
        src={GetInTouchImg}
        width={897}
        height={1140}
        alt="get-in-touch"
        className="lg:w-[700px] lg:h-[900px] 2xl:w-[897px] 2xl:h-[1140px] lg:mr-10 2xl:mr-0 hidden lg:block"
      />
      <div className="w-full lg:w-[45%]">
        <p className="text-[24px] lg:text-[60px] font-serifDisplay text-[#262626] text-center lg:text-left">
          Get In Touch
        </p>
        <p className="text-[16px] text-[#838383] mt-[6px] lg:mt-[30px] mb-[60px] text-center lg:text-left">
          Fill the form below
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default GetInTouch;
