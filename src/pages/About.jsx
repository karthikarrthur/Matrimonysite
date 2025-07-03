import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">About ShaadiRoots</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
          ShaadiRoots is more than just a matrimony platform — it's a commitment to bringing hearts together
          with safety, transparency, and integrity. Our mission is to help individuals find meaningful, lasting relationships
          rooted in trust and shared values.
        </p>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-left">
          <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-purple-700">12,000+</h3>
            <p className="text-gray-600 mt-2">Successful Marriages Facilitated</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-purple-700">95%</h3>
            <p className="text-gray-600 mt-2">Verified User Profiles</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-purple-700">24/7</h3>
            <p className="text-gray-600 mt-2">Support & Safety Monitoring</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6">Our Core Values</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-gray-700 text-base">
            <li>✅ Trust & Transparency First</li>
            <li>✅ 100% Profile Verification</li>
            <li>✅ Culturally Diverse Matches</li>
            <li>✅ Respect for Privacy & Data</li>
            <li>✅ Personalized Match Suggestions</li>
            <li>✅ Community Support & Success Stories</li>
          </ul>
        </div>

        {/* Final Note */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 italic">
            “At ShaadiRoots, your journey to love begins with security, sincerity, and soul connections.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
