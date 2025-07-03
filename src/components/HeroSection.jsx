// src/pages/Home.jsx
import React from "react";
import { ShieldCheck, BadgeCheck, Bot, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; 
import emailjs from '@emailjs/browser';




const features = [
  {
    icon: <ShieldCheck className="text-purple-700 w-8 h-8" />,
    title: "30 Day Money Back Guarantee",
    desc: "Get matched with someone special within 30 days, or we’ll refund your money—guaranteed!",
  },
  {
    icon: <BadgeCheck className="text-purple-700 w-8 h-8" />,
    title: "Blue Tick to find your Green Flag",
    desc: "Blue-tick profiles get 40% more connection requests than others!",
  },
  {
    icon: <Bot className="text-purple-700 w-8 h-8" />,
    title: "Matchmaking Powered by AI",
    desc: "Tech + 20 years of expertise to help you find 'the one'.",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img2.shaadi.com/assests/2017/images/home-page-banner-tvc-v3.jpg')",
        }}
      >
        <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-2">
        Find your foreve<span className="-ml-1 inline-block">❤️</span>
       </h1>
  

          <p className="text-white text-lg mb-6">
            Discover a world beyond matrimony
          </p>
          <Link
            to="/register"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full text-lg transition"
          >
            Find Your Match
          </Link>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">The ShaadiRoots Experience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ VIP Consultation Section */}
      <section className="bg-purple-100 mx-4 md:mx-10 p-6 md:p-10 rounded-2xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Gem className="text-purple-700 w-10 h-10" />
          <div>
            <h4 className="text-lg font-semibold text-purple-900">
              Experience elite personalised matchmaking by ShaadiRoots
            </h4>
            <p className="text-sm text-gray-700">No.1 matchmaking service for elites</p>
          </div>
        </div>
        <Link
          to="/contact"
          className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 shadow transition"
        >
          Free Consultation
        </Link>

      </section>
      {/* ✅ Success Stories Section */}
<section className="py-20 px-6 md:px-20 bg-white">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left Text Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Real Stories, True Connections
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        At ShaadiRoots, thousands of people have found their soulmates through meaningful conversations and shared values.
        You could be the next success story!
      </p>
      <Link to="/stories">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition">
          Know More →
        </button>
      </Link>
    </div>

    {/* Right Cards */}
    <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
      {/* Couple Card 1 */}
      <div className="min-w-[280px] md:min-w-[300px] bg-white border rounded-2xl shadow hover:shadow-lg transition p-5">
        <img
          src="https://images.pexels.com/photos/6062585/pexels-photo-6062585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Arjun & Kavya"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">Arjun & Kavya</h3>
        <p className="text-sm text-gray-600 mt-2">
          "We connected over a shared love for music and travel. Thanks to ShaadiRoots, our families met, and we tied the knot in April 2025!"
        </p>
      </div>

      {/* Couple Card 2 */}
      <div className="min-w-[280px] md:min-w-[300px] bg-white border rounded-2xl shadow hover:shadow-lg transition p-5">
        <img
          src="https://images.pexels.com/photos/19993201/pexels-photo-19993201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
"
          alt="Rahul & Sneha"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">Rahul & Sneha</h3>
        <p className="text-sm text-gray-600 mt-2">
          "Our story began with a simple message on ShaadiRoots. Within weeks, we knew it was meant to be. Thank you for making this possible!"
        </p>
      </div>
    </div>
  </div>
</section>



    <section className="bg-gray-50 py-20 px-6 md:px-20">

  <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16">
    Frequently Asked Questions
  </h2>

  <div className="max-w-6xl mx-auto space-y-10">
    {[
      {
        question: "Is ShaadiRoots free to use?",
        answer: "Yes, you can create your profile, view matches, and express interest for free. For advanced features like personalized matchmaking and profile boosts, you can upgrade to our premium plans.",
      },
      {
        question: "How does ShaadiRoots match users?",
        answer: "We use advanced AI algorithms that consider preferences, interests, values, and lifestyle to suggest highly compatible profiles.",
      },
      {
        question: "Are profiles verified?",
        answer: "Absolutely. We verify user identities and photos to ensure a safe and authentic experience. Verified users are marked with a blue tick.",
      },
      {
        question: "Can I hide or delete my profile?",
        answer: "Yes. You can easily hide your profile temporarily or permanently delete it from your dashboard settings anytime.",
      },
      {
        question: "How secure is my data?",
        answer: "We follow industry best practices with end-to-end encryption and secure servers. Your personal information is never shared without your consent.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">
          {item.question}
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">{item.answer}</p>
      </div>
    ))}
  </div>
</section>




      {/* Footer */}

     
    </div>
  );
};

export default Home;
