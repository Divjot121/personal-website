"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define animation variants
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Set up animation control
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_f1w5zxh",
          "template_6p2yq9h", // Replace with your actual template ID
          formData,
          "vApEYVAmij6_DTDCI"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("ERROR!", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <Toaster />
      <motion.h2
        ref={ref}
        variants={container(0.5)}
        initial="hidden"
        animate={controls}
        className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100"
      >
        Get In Touch!
      </motion.h2>
      <motion.form
        ref={ref}
        onSubmit={handleSubmit}
        variants={container(0.7)}
        initial="hidden"
        animate={controls}
      >
        <div className="mb-4">
          <motion.input
            ref={ref}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            variants={container(1)}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <motion.input
            ref={ref}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            variants={container(1.2)}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <motion.textarea
            ref={ref}
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            variants={container(1.4)}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div className="text-center">
          <motion.button
            ref={ref}
            type="submit"
            disabled={isSending}
            variants={container(1.6)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            animate={controls}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
