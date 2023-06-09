"use client";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { SiGmail } from "react-icons/si";
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
      className="flex  w-full p-5 gap-4 justify-center flex-col"
    >
      <input
        {...register("name", { required: "Please tell me your name :)" })}
        type="text"
        className="outline-none border-b-4 border-beige rounded-lg p-2"
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
        className="outline-none border-b-4 border-beige rounded-lg p-2 "
        placeholder="email"
      />
      <textarea
        {...register("message", { required: true, minLength: 20 })}
        placeholder="message"
        className="outline-none border-b-4 border-beige rounded-lg p-2"
      />
      <button
        type="submit"
        className="flex justify-around items-center min-w-min max-w-sm border rounded-lg bg-beige font-medium p-2 text-navy hover:bg-navy hover:text-txcolor"
      >
        Send Email !
        <SiGmail />
      </button>
    </form>
  );
}
