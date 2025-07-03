// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, HeartHandshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <div className="flex items-center space-x-2 text-purple-700 text-xl font-bold mb-3">
            <HeartHandshake className="w-6 h-6" />
            <span>ShaadiRoots</span>
          </div>
          <p className="text-sm text-gray-600">
            India’s most trusted matchmaking platform — where roots meet forever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
            <li><Link to="/register" className="hover:text-purple-600">Register</Link></li>
            <li><Link to="/login" className="hover:text-purple-600">Login</Link></li>
            <li><Link to="/dashboard" className="hover:text-purple-600">Dashboard</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/elite" className="hover:text-purple-600">Elite Matchmaking</Link></li>
            <li><Link to="/ai" className="hover:text-purple-600">AI-Based Matches</Link></li>
            <li><Link to="/support" className="hover:text-purple-600">Customer Support</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-purple-700">
            <a href="#"><Facebook className="hover:text-purple-500" /></a>
            <a href="#"><Instagram className="hover:text-purple-500" /></a>
            <a href="#"><Twitter className="hover:text-purple-500" /></a>
            <a href="#"><Linkedin className="hover:text-purple-500" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 border-t pt-4">
        © {new Date().getFullYear()} ShaadiRoots. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
