import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Wrapper from "../shared/wrapper/Wrapper";
import map from "../../asset/svg/map.svg";
import phone from "../../asset/svg/phone-email.svg";
import { IoCheckmark } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
    projectDetails: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { fullName: "", email: "", mobile: "", projectDetails: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    const mobilePattern = /^\d+$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      valid = false;
    } else if (!mobilePattern.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
      valid = false;
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oitpf8k",
        "template_a8k680f",
        form.current,
        "pEi8xz8VdtL32ds-f"
      )
      .then(
        () => {
          setSubmitSuccess("Your message has been sent!");
          console.log("Success");

          // Reset form fields
          form.current.reset();

          setTimeout(() => {
            setSubmitSuccess("");
          }, 3000);
        },
        (error) => {
          setSubmitError("", error.text);
        }
      );
  };

  const modalVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  return (
    <Wrapper>
      <footer className="px-3 xl:px-0 pb-10 mt-0 md:mt-20" id="contact">
        <div className="flex flex-col-reverse md:flex-row xl:flex-row h-full justify-between xl:mt-16">
          <motion.div
            className="lg:w-1/2 wow fadeInLeft"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 2.5 }}
          >
            <div className="xl:mt-0 md:mt-0 mt-20">
              <h2 className="text-[32px] xl:text-6xl font-bold mt-6 md:mt-0 xl:mt-0">
                let’s do something awesome
              </h2>
              <ul>
                <li className="flex items-start gap-x-5 mt-10 xl:mt-20">
                  <Image
                    src={map}
                    alt=" "
                    width={1080}
                    height={1080}
                    className="w-[30px] mt-1 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">Address</h3>
                    <p className="text-lg text-primary-white/80">
                      Karachi, Pakistan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-5 mt-10 lg:mt-14">
                  <Image
                    src={phone}
                    alt=" "
                    width={1080}
                    height={1080}
                    className="w-[30px] mt-1 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl xl:text-2xl font-semibold">
                      Phone & Email
                    </h3>
                    <p className="text-lg text-primary-white/80">
                      <a
                        href="tel:(+92)1234567"
                        className="hover:text-gray-300 transition"
                      >
                        (+92) 03322090197
                      </a>
                      <br />
                      <a
                        href="mailto:hassanahmed4987427@gmail.com"
                        className="hover:text-gray-300 transition"
                      >
                        hassanahmed4987427@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-primary-green text-sm xl:text-xl mb-5 xl:mb-0 mt-10 xl:mt-64">
              Copyright © 2024 User. All rights reserved.
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 wow fadeIn lg:pl-20 mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl mb-6 text-primary-white/80 font-semibold">
              Hey, how about we catch up over coffee and have a chat?
            </h3>
            <form onSubmit={handleSubmit} ref={form} className="space-y-6">
              <div>
                <label className="block mb-2 text-lg xl:text-xl text-primary-white/80">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  className={`w-full px-4 py-3 border ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-primary-white/80"
                  } rounded-xl bg-transparent text-white focus:border-primary-green focus:outline-none`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-lg xl:text-xl text-primary-white/80">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-primary-white/80"
                  } rounded-xl bg-transparent text-white focus:border-primary-green focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-lg xl:text-xl text-primary-white/80">
                  Mobile*
                </label>
                <input
                  type="text"
                  name="mobile"
                  className={`w-full px-4 py-3 border ${
                    errors.mobile ? "border-red-500" : "border-primary-white/80"
                  } rounded-xl bg-transparent text-white focus:border-primary-green focus:outline-none`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-lg xl:text-xl text-primary-white/80">
                  Write Project Details*
                </label>
                <textarea
                  name="projectDetails"
                  cols="30"
                  rows="5"
                  className={`w-full px-4 py-3 border ${
                    errors.projectDetails
                      ? "border-red-500"
                      : "border-primary-white/80"
                  } rounded-xl bg-transparent text-white focus:border-primary-green focus:outline-none`}
                ></textarea>
                {errors.projectDetails && (
                  <p className="text-red-500 text-sm">
                    {errors.projectDetails}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium text-xl max-w-[200px] bg-white text-black rounded-xl ease-in duration-300 hover:bg-primary-green  transition"
              >
                Send Message
              </button>
            </form>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  className="fixed inset-0 flex items-end justify-center p-5"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
                    <IoCheckmark className="text-3xl" />
                    <span>{submitSuccess}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {submitError && (
              <p className="text-red-500 text-sm mt-4">{submitError}</p>
            )}
          </motion.div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
