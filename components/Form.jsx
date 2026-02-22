"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "loading"}
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea
          name="message"
          id="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div className="flex items-center gap-x-2 text-green-600 dark:text-green-400">
          <CheckCircle size={20} />
          <span>Message sent successfully!</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-x-2 text-red-600 dark:text-red-400">
          <XCircle size={20} />
          <span>{errorMessage || "Failed to send message"}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center gap-x-1 max-w-[166px]"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Let's Connect
            <ArrowRightIcon size={20} />
          </>
        )}
      </Button>
    </form>
  );
};

export default Form;
