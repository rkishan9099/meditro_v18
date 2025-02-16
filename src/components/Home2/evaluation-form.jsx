import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { services } from "../../utils/data";

// Define Zod schema for form validation
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  practice: z.string().min(1, "Practice Name is required"),
});

const EvaluationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle form submission
  const onSubmit = async (data) => {
    setResponseMessage(""); // Reset previous message
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (response.ok) {
        setResponseMessage("✅ Your request has been submitted successfully!");
        reset(); // Reset form after successful submission
      } else {
        setResponseMessage("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      setResponseMessage("❌ An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="tw-rounded-xl tw-border tw-border-white !tw-p-3 sm:!tw-p-4 md:!tw-p-8 tw-shadow-xl before:tw-backdrop-blur tw-backdrop-blur-lg tw-bg-transparent"
    >
      <h3 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-accent-500">
        Get Your Free Evaluation
      </h3>

      {/* Name Field */}
      <div className="tw-mb-4">
        <label
          htmlFor="name"
          className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-bg-transparent tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-accentOrange-500"
        />
        {errors.name && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="tw-mb-4">
        <label
          htmlFor="email"
          className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-bg-transparent tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-accentOrange-500"
        />
        {errors.email && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="tw-mb-4">
        <label
          htmlFor="phone"
          className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-bg-transparent tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-accentOrange-500"
        />
        {errors.phone && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>




       {/* Service Type (Dropdown) */}
       <div className="tw-mb-6">
        <label htmlFor="practice" className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2">
        Practice Name
        </label>
        <select
          id="practice"
          {...register("practice")}
          className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-bg-transparent tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-accentOrange-500"
        >
          <option value="">Select a  Practice</option>

          {services.map((service, index) => (
            <option key={index} value={service.title}>{service.title}</option>
          ))}
         
        </select>
        {errors.practice && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.practice.message}</p>
        )}
      </div>



      {/* Practice Name Field
      <div className="tw-mb-6">
        <label
          htmlFor="practice"
          className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2"
        >
          Practice Name
        </label>
        <input
          type="text"
          id="practice"
          {...register("practice")}
          className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-bg-transparent tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-accentOrange-500"
        />
        {errors.practice && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.practice.message}
          </p>
        )}
      </div> */}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="tw-w-full tw-bg-accentOrange-500 tw-text-white tw-font-bold tw-py-3 tw-px-4 tw-rounded-md hover:tw-bg-accentOrange-700 tw-transition tw-duration-300 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Get My Free Evaluation"}
      </button>

      {/* API Response Message */}
      {responseMessage && (
        <p
          className={`tw-text-center tw-mt-4 ${
            responseMessage.includes("✅") ? "tw-text-green-500" : "tw-text-red-500"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </motion.form>
  );
};

export default EvaluationForm;
