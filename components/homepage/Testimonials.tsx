import { TESTIMONIAL_IMAGES } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="pt-[100px] pb-[50px] lg:pb-[200px] relative px-[14px] lg:px-0">
      <div className="lg:pl-[80px] 2xl:pl-[150px]">
        <p className="text-[24px] font-poppins text-[#4B4B4B]">Testimonials</p>
        <div className="flex flex-row items-center overflow-x-scroll mt-5">
          {TESTIMONIAL_IMAGES.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              width={200}
              height={200}
              alt="testimonial"
              className="w-[300px] h-[300px] lg:w-[400px] lg:h-[600px] mr-2 rounded-[6px] object-cover"
            />
          ))}
        </div>
        {/* <p className="mt-5 text-[24px] lg:text-[46px] font-serifDisplay">
          Where Dreams Find Their <br className="hidden lg:block" />
          Perfect Address
        </p>
        <p className="text-[300px] text-[#939393] font-libreCaslonDisplay absolute -top-20 left-[40%] hidden lg:block">
          &ldquo;
        </p>
        <TestimonialItem
          name={TESTIMONIALS?.[0]?.name}
          content={TESTIMONIALS?.[0]?.content}
          title={TESTIMONIALS?.[0]?.title}
          designation={TESTIMONIALS?.[0]?.designation}
        /> */}
        {/* <Carousel>
          <CarouselContent>
            {TESTIMONIALS.map((item) => (
              <CarouselItem key={item.id}>
                <TestimonialItem
                  name={item.name}
                  title={item.title}
                  content={item.content}
                  designation={item.designation}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Testimonials;
