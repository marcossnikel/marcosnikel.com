"use client";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

emailjs.init("Mycgz4XoGLanX2VYb");

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
      .send("service_pla87qo", "template_3oxfxin", templateParams)
      .then(() => {
        console.log("email sent sucessfully");
        reset();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: "Please tell me your name :)" })}
        type="text"
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
        placeholder="email"
      />
      <input
        {...register("message", { required: true, minLength: 20 })}
        type="text"
        placeholder="message"
      />
      <button type="submit">send email</button>
    </form>
  );
}
