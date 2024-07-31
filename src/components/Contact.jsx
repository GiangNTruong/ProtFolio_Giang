import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <span className="text-lg mb-8 block">
          Work together and create value for society
        </span>
        <div className=" flex flex-col md:flex-row items-center justify-between mt-5">
          <div className=" w-[500px] h-[400px] px-8 py-6 rounded-xl mb-5 md:mb-0 md:mr-10">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">
              Feel free to contact me if you have any questions or would like to
              collaborate on a project.
            </p>
            <p className="mb-2">
              <strong>Email:</strong> giangpc7@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 0936553785
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-blue-500">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-blue-500">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" h-[400px] w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-3xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black w-[320px] text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
