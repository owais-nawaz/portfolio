"use client";

import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_edpnjma", // Replace with your EmailJS service ID
        "template_2qwkn8h", // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: "jp2v-BmHMwM1Q-EcP",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
    e.target.reset();
  };

  return (
    <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="text" name="user_name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" name="user_email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea
          name="message"
          id="message"
          placeholder="Type your message here"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        value="Send"
        className="flex items-center gap-x-1 max-w-[166px]"
      >
        Let's Connect
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
