import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaHeartbeat, FaBrain, FaChartLine } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d17] text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-14 max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase mb-2 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] text-transparent bg-clip-text">
              FITLY AI
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            An intelligent fitness and nutrition web application designed to help users adopt healthy lifestyles through personalized AI-driven guidance.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-[#141829] border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
            FITLY AI combines modern web technologies with Google Gemini artificial intelligence to simplify fitness management. Whether you aim to lose weight, gain muscle, or maintain balanced daily habits, FITLY provides tailored workout routines and meal plans suited to your personal health metrics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-gray-800">
            <div className="bg-[#0b0d17]/60 border border-gray-800/80 rounded-2xl p-5 text-center">
              <FaHeartbeat className="text-[#00f2fe] text-2xl mx-auto mb-3" />
              <h3 className="font-semibold text-white text-base mb-1">Personalized</h3>
              <p className="text-gray-400 text-xs">Calculated BMR, calorie targets, and dietary preferences.</p>
            </div>

            <div className="bg-[#0b0d17]/60 border border-gray-800/80 rounded-2xl p-5 text-center">
              <FaBrain className="text-[#9c27b0] text-2xl mx-auto mb-3" />
              <h3 className="font-semibold text-white text-base mb-1">AI-Powered</h3>
              <p className="text-gray-400 text-xs">Dynamic exercise splits and nutrition recommendations.</p>
            </div>

            <div className="bg-[#0b0d17]/60 border border-gray-800/80 rounded-2xl p-5 text-center">
              <FaChartLine className="text-emerald-400 text-2xl mx-auto mb-3" />
              <h3 className="font-semibold text-white text-base mb-1">Progress Tracking</h3>
              <p className="text-gray-400 text-xs">Real-time point scoring, progress tracking, and leaderboard.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

