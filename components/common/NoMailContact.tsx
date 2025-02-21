"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import ContactImg from "../../assets/images/contact-form.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface Props {
  mailsSubmitted: () => void;
}

const NoMailContact: React.FC<Props> = ({ mailsSubmitted }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = async () => {
    try {
      setIsLoading(true);
      // console.log(name, email, phone, message);
      await axios.post("/api/email", {
        name,
        email,
        phone,
        message,
      });
      toast.success("Details submitted successfully", {
        position: "bottom-center",
      });
      mailsSubmitted();
    } catch (err) {
      console.log("ERROR: ", err);
      alert("Could not submit your details");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-[30px] bg-white px-[20px] lg:px-[75px] py-[20px] lg:py-[60px]">
      <div className="flex flex-row items-center justify-between">
        <p className="text-[24px] lg:text-[40px] text-black font-semibold">
          Submit Details
        </p>
        <Image
          src={ContactImg}
          width={100}
          height={100}
          alt="contact"
          className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] object-cover"
        />
      </div>
      <Input
        placeholder="Name"
        className="w-full p-5 border border-[#8D8D8D] rounded-[6px] mt-10 focus-visible:ring-0"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        className="w-full p-5 border border-[#8D8D8D] rounded-[6px] mt-5 focus-visible:ring-0"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Phone"
        className="w-full p-5 border border-[#8D8D8D] rounded-[6px] mt-5 focus-visible:ring-0"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        className="w-full p-5 border border-[#8D8D8D] rounded-[6px] mt-5 focus-visible:ring-0"
        rows={3}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center justify-center">
        <Button
          className="w-[340px] h-[60px] rounded-[7px] text-white mt-10"
          style={{
            backgroundImage: "linear-gradient(to bottom, #055F15, #ABBC54)",
          }}
          onClick={handleSendMail}
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </div>
    </div>
  );
};

export default NoMailContact;
