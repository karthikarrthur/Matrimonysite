import React from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle, FaUserShield, FaUserPlus, FaRegHeart } from "react-icons/fa";

const HelpSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6 sm:p-12">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-2xl animate-fade-in-up transition-all duration-700">
        <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-6 tracking-tight">
          Need Help? <span className="inline-block animate-wiggle">🤝</span>
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10">
          We’re here to guide you every step of the way. Check our FAQs or reach out directly to our support team.
        </p>

        {/* FAQs Section */}
        <div className="space-y-8">
          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
              <FaUserPlus /> How do I create a profile?
            </h3>
            <p className="text-gray-700 mt-2">
              Simply click on "Register", fill in your personal details and preferences. Once submitted, your profile will be created instantly!
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-pink-500">
            <h3 className="text-2xl font-semibold text-pink-600 flex items-center gap-2">
              <FaUserShield /> Is my data secure?
            </h3>
            <p className="text-gray-700 mt-2">
              Absolutely. We use Firebase Authentication, Firestore security rules, and end-to-end encryption to ensure your data stays private and protected.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              <FaRegHeart /> What happens when I express interest?
            </h3>
            <p className="text-gray-700 mt-2">
              Once you show interest in a profile, the other user will be notified. They can then choose to accept or decline your interest. Mutual matches will unlock chat access.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-14 border-t pt-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2">
            <FaQuestionCircle className="text-purple-600" /> Still have questions?
          </h2>

          <p className="text-gray-600 mb-4">
            No worries! Our support team is ready to help you via email or phone.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-600 text-xl" />
              <span className="text-lg">
                Email:{" "}
                <a href="mailto:karthik782004@gmail.com" className="text-blue-500 hover:underline">
                  karthik782004@gmail.com
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span className="text-lg">
                Phone:{" "}
                <a href="tel:+919514439496" className="text-blue-500 hover:underline">
                  +91 95144 39496
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
