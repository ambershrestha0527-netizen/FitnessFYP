import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaComments,
  FaDumbbell,
} from "react-icons/fa";

function Contactus() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d17] text-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-14 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-[#00f2fe] uppercase mb-2 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] text-transparent bg-clip-text">
              FITLY AI
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Have questions about our AI fitness platform, workout generation, or project details? Reach out to our team.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#141829] border border-gray-800 rounded-2xl p-6 text-center shadow-xl hover:border-[#00f2fe]/40 transition duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#00f2fe]/10 text-[#00f2fe] flex items-center justify-center text-2xl mx-auto mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
            <p className="text-sm text-gray-400 mb-3">Direct support & feedback</p>
            <p className="text-[#00f2fe] font-medium text-base">support@fitly.com</p>
          </div>

          <div className="bg-[#141829] border border-gray-800 rounded-2xl p-6 text-center shadow-xl hover:border-[#9c27b0]/40 transition duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#9c27b0]/10 text-[#9c27b0] flex items-center justify-center text-2xl mx-auto mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Call Helpline</h3>
            <p className="text-sm text-gray-400 mb-3">Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p className="text-[#9c27b0] font-medium text-base">+1 (555) 123-4567</p>
          </div>

          <div className="bg-[#141829] border border-gray-800 rounded-2xl p-6 text-center shadow-xl hover:border-indigo-500/40 transition duration-300">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl mx-auto mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Campus Location</h3>
            <p className="text-sm text-gray-400 mb-3">XAIVER INT' COLLEGE</p>
            <p className="text-indigo-400 font-medium text-base">Computer Science Dept</p>
          </div>
        </div>

        {/* Informational Showcase Banner */}
        <div className="bg-gradient-to-r from-[#141829] via-[#1a1f36] to-[#141829] border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                <FaClock className="text-xs" />
                <span>24/7 AI Availability</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Instant AI Assistance
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Got questions regarding your workout plan, dietary needs, or macronutrient splits? Our built-in conversational AI assistant is available inside the application anytime.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center"><FaDumbbell className="mr-1.5 text-[#00f2fe]" /> Smart Workouts</span>
                <span className="flex items-center"><FaComments className="mr-1.5 text-[#9c27b0]" /> Gemini AI Chat</span>
              </div>
            </div>

            <div className="bg-[#0b0d17]/60 border border-gray-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Project Information</h4>
              <div className="border-t border-gray-800 pt-3 text-sm space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Project Title:</span>
                  <span className="text-white font-medium">FITLY AI – Fitness Web App</span>
                </div>
                <div className="flex justify-between">
                  <span>Stack:</span>
                  <span className="text-white font-medium">MERN + Google Gemini AI</span>
                </div>
                <div className="flex justify-between">
                  <span>Evaluation:</span>
                  <span className="text-emerald-400 font-medium">Final Year Project (FYP)</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-[#00f2fe] font-medium">Online & Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contactus;

