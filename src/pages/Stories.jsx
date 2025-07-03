import React from "react";

const stories = [
  {
    name: "Arjun & Kavya",
    image:
      "https://images.pexels.com/photos/6062585/pexels-photo-6062585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "ShaadiRoots connected us through shared interests. Our families clicked instantly, and we’re now planning our first anniversary trip! Grateful to have met someone who truly understands me.",
  },
  {
    name: "Rahul & Sneha",
    image:
      "https://images.pexels.com/photos/19993201/pexels-photo-19993201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "A single message changed everything. We found true companionship and laughter thanks to ShaadiRoots. The match suggestions were truly aligned with our values.",
  },
  {
    name: "Vikram & Meera",
    image:
      "https://images.pexels.com/photos/20300385/pexels-photo-20300385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "After a year of searching, we met on ShaadiRoots. It was not just a match, it was destiny. Their secure and easy-to-use platform made us feel safe and confident.",
  },
  {
    name: "Naveen & Priya",
    image:
      "https://images.pexels.com/photos/27876570/pexels-photo-27876570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "We’re thankful to ShaadiRoots for helping us find love that felt natural. Their premium plan made our profile stand out, and it all started with a simple smiley.",
  },
  {
    name: "Sathish & Lakshmi",
    image:
      "https://images.pexels.com/photos/27876538/pexels-photo-27876538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "From total strangers to soulmates, all thanks to the personalized matchmaking by ShaadiRoots. We appreciate the support team for always being responsive.",
  },
  {
    name: "Aman & Radhika",
    image:
      "https://images.pexels.com/photos/27876572/pexels-photo-27876572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "It felt like a miracle when we matched. We bonded over books and photography. ShaadiRoots gave us the chance to fall in love for life.",
  },
  {
    name: "Harish & Divya",
    image:
      "https://images.pexels.com/photos/2532215/pexels-photo-2532215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "I didn’t believe in arranged matchmaking until I met Divya. Thank you ShaadiRoots for helping me believe in love again. A platform that truly understands compatibility.",
  },
  {
    name: "Ramesh & Anjali",
    image:
      "https://images.pexels.com/photos/7694286/pexels-photo-7694286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "We connected in just a few days. The app was easy to navigate and secure. Their AI-based recommendations are unbelievably accurate. Forever grateful.",
  },
  {
    name: "Karthik & Shruti",
    image:
      "https://images.pexels.com/photos/27334196/pexels-photo-27334196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "I was nervous as a first-time user but everything was smooth. We chatted for weeks before meeting. Today, we’re planning our wedding. Thank you, ShaadiRoots!",
  },
  {
    name: "Surya & Bhavya",
    image:
      "https://images.pexels.com/photos/8934417/pexels-photo-8934417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    story:
      "We met through a ShaadiRoots video recommendation! Our profiles were a perfect match. The journey has been beautiful and heartfelt. Thank you for bringing us together.",
  },
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-20 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-16">
        💖 Real Love Stories From ShaadiRoots 💖
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {stories.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
