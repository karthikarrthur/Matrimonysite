import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialMatches = Array.from({ length: 30 }).map((_, idx) => ({
  id: idx + 1,
  name: `Match ${idx + 1}`,
  age: 22 + (idx % 10),
  location: ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"][idx % 6],
  profession: ["Engineer", "Doctor", "Designer", "Teacher", "Entrepreneur", "Photographer"][idx % 6],
  image: `https://randomuser.me/api/portraits/${idx % 2 === 0 ? "women" : "men"}/${(idx + 10) % 100}.jpg`,
}));

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [interestsSent, setInterestsSent] = useState([]);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const filteredMatches = initialMatches.filter(
    (match) =>
      match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInterest = (match) => {
    if (interestsSent.includes(match.id)) {
      showToast(`You already expressed interest in ${match.name}`, "error");
    } else {
      setInterestsSent((prev) => [...prev, match.id]);
      showToast(`Interest sent to ${match.name} 💌`, "success");
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-10 px-4 sm:px-8 md:px-16 relative">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10 drop-shadow">
        Your Perfect Matches 💕
      </h1>

      {/* Toast Message */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg text-white animate-fade-in-down transition-all
          ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {toast.message}
        </div>
      )}

      {/* 🔍 Search */}
      <div className="max-w-lg mx-auto mb-12">
        <input
          type="text"
          placeholder="Search by name, city, or profession..."
          className="w-full px-5 py-3 rounded-full bg-white bg-opacity-80 backdrop-blur-md shadow-md border border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 👤 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-purple-100 shadow-xl hover:shadow-2xl transition hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <img
                src={match.image}
                alt={match.name}
                className="w-full h-52 object-cover rounded-xl mb-4 border-2 border-purple-200"
              />
              <h3 className="text-xl font-bold text-purple-700">{match.name}</h3>
              <p className="text-sm text-gray-700">{match.age} years old</p>
              <p className="text-sm text-gray-700">{match.location}</p>
              <p className="text-sm text-gray-700 mb-2">{match.profession}</p>

              <div className="flex gap-2 mb-4">
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                  Verified
                </span>
                <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full font-medium">
                  Active
                </span>
              </div>

              <button
                onClick={() => handleInterest(match)}
                className={`w-full text-white py-2 rounded-full font-semibold transition
                ${interestsSent.includes(match.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"}`}
                disabled={interestsSent.includes(match.id)}
              >
                {interestsSent.includes(match.id) ? "💌 Interest Sent" : "💌 Express Interest"}
              </button>

              <button
                onClick={() => navigate(`/profile/${match.id}`, { state: match })}
                className="mt-2 w-full text-purple-600 underline text-sm hover:text-purple-800"
              >
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No matches found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
