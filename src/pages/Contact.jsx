import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8frrux9", 
        "template_fvg606w", 
        form.current,
        "_HGYVB3D7Dn-tL6zC" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Request a Free Consultation
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-400"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Submit Request
        </button>

        {status && (
          <p className="text-center mt-4 text-sm font-medium text-green-600">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
