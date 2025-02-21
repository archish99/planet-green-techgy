import Image from "next/image";
import LogoImgWhite from "../../assets/images/logo-white.png";
import NoMailContact from "../common/NoMailContact";
import Social from "../header/Social";

interface Props {
  mailsSubmitted: () => void;
}

const NoMailScreen: React.FC<Props> = ({ mailsSubmitted }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex items-start lg:items-center relative pt-[100px] lg:pt-0"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9b2b/dc91/b32c35871622b263ed9ecf687388d9e7?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S~qQptXVxbJzLcE1TL9OuYSKV-3fQuFLcQZPyK~dndTfpHV4o~nI5BABEoARxWwfvnzR6nXmtiJI8EkSP1N8o1b6u1k~P5VCj52Iqj6DRODmhuXb8-Jp2ddrvQ-rDr6muC6DL1hPOFvwKt5V~pQyR39yA9PI6mG1VhwGkbDHr4FxcAJ4WqVlMLp8teBdy9yTzvrv9H0vAWV5LkTIWOfsaMhrecH0Nh-OLTaWOolbBbTNEtxDwOj1pNMmKjbdc8tGtLvYLjgFkwTqc8PUbiFeGfcS1fM5Zt06zoIW7OMf3~cv~KHE0KFQ-5pE9pvXiTYPY8idAUqTF7r1MhLk1NlqUw__')`,
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-5 lg:pt-0 px-[14px] lg:px-[40px] 2xl:px-[134px]">
        <div className="flex flex-row items-center justify-between absolute top-5 left-5 w-[90%] lg:w-[95%]">
          <Image
            src={LogoImgWhite}
            width={266}
            height={95}
            alt="logo"
            className="w-[200px] h-[80px] lg:w-[266px] lg:h-[95px] object-cover"
          />
        </div>
        <div className="w-full lg:w-[50%] 2xl:w-[45%]">
          <p className="text-[24px] lg:text-[50px] 2xl:text-[70px] font-normal text-white font-serifDisplay text-center lg:text-left mb-5">
            What If Your Home And Nature Can Thrive In Harmony?
          </p>
          <p className="text-base lg:text-2xl text-white text-center lg:text-left mb-[30px font-sofiaPro]">
            At Planet Green, we build with nature, not over it.
          </p>
        </div>
        <div className="absolute lg:right-32 bottom-20 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-[90%] lg:w-[40%]">
          <NoMailContact mailsSubmitted={mailsSubmitted} />
        </div>
        <div className="absolute bottom-5 lg:bottom-36 lg:top-0 lg:-right-5 2xl:right-10 lg:h-full w-full lg:w-auto lg:mr-10 2xl:mr-0">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default NoMailScreen;
