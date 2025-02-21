"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/email", {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        message,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.log("ERROR: ", err);
      alert("Could not submit your details");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="w-[45%]">
          <p className="text-[20px] text-black mb-5">First Name</p>
          <Input
            className="px-[16px] lg:px-[32px] py-[26px] border border-black rounded-[4px]"
            placeholder="Your First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="w-[45%]">
          <p className="text-[20px] text-black mb-5">Last Name</p>
          <Input
            className="px-[16px] lg:px-[32px] py-[26px] border border-black rounded-[4px]"
            placeholder="Your Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
      <div className="w-full mt-[30px]">
        <p className="text-[20px] text-black mb-5">Email Address</p>
        <Input
          className="px-[16px] lg:px-[32px] py-[26px] border border-black rounded-[4px]"
          placeholder="Your Email Address"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="w-full mt-[30px]">
        <p className="text-[20px] text-black mb-5">Phone Number</p>
        <Input
          className="px-[16px] lg:px-[32px] py-[26px] border border-black rounded-[4px]"
          placeholder="Your Phone Number"
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div className="w-full mt-[30px]">
        <p className="text-[20px] text-black mb-5">Message</p>
        <Textarea
          className="px-[16px] lg:px-[32px] py-[26px] border border-black rounded-[4px]"
          placeholder="Your Message"
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="w-[300px] h-[60px] rounded-full bg-white border border-[#D7B47B] mt-[70px] text-black hover:bg-white"
          onClick={handleOnSubmit}
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
