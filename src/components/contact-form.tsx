"use client";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { SiGmail } from "react-icons/si";
import Button from "./button";
emailjs.init("Mycgz4XoGLanX2VYb");
const SERVICE_ID = "service_pla87qo";
const TEMPLATE_ID = "template_3oxfxin";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        console.log("email sent sucessfully");
        reset();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  w-full mt-4 gap-4 justify-center flex-col items-center"
    >
      <input
        {...register("name", { required: "Please tell me your name :)" })}
        type="text"
        className="outline-none border-b-4 border-yellow-400 rounded-lg p-2 w-full"
        placeholder="name"
      />
      <input
        {...register("email", {
          required: true,
          minLength: {
            value: 10,
            message: "Your e-mail is required to we enter in contact, pleasee",
          },
        })}
        type="email"
        className="outline-none border-b-4 border-yellow-400 rounded-lg p-2 w-full"
        placeholder="email"
      />
      <textarea
        {...register("message", { required: true, minLength: 20 })}
        placeholder="message"
        className="outline-none border-b-4 border-yellow-400 rounded-lg p-2 w-full"
      />
      <Button text="Send Email !">
        <SiGmail />
      </Button>
    </form>
  );
}
