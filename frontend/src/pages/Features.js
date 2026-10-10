import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Import icons from react-icons
import {
  FaUtensils,
  FaDumbbell,
  FaRobot,
  FaWater,
  FaCalculator,
  FaDatabase,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

// Feature card component updated to use Tailwind with new color scheme
const FeatureCard = ({ title, description, link, icon }) => {
  return (
    <div className="h-full mb-4 text-center bg-[#131625] rounded-2xl border border-gray-800 shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-[#7e57c2] hover:shadow-2xl hover:shadow-[#7e57c2]/10 flex flex-col justify-between">
      <div className="p-6 flex flex-col h-full items-center">
        {icon && (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1a1f36] to-[#252b48] border border-gray-700/60 flex items-center justify-center mb-4 shadow-inner">
            {React.cloneElement(icon, {
              size: 30,
              className: "text-[#00f2fe] filter drop-shadow",
            })}
          </div>
        )}
        <div className="h-[2px] w-8 bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] mb-4 rounded-full"></div>
        <h3 className="mb-2 text-white font-bold text-xl tracking-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{description}</p>
        <Link
          to={link}
          className="inline-block mt-auto w-full py-2.5 px-4 bg-gradient-to-r from-[#7e57c2] to-[#9c27b0] hover:from-[#6c47b5] hover:to-[#88219c] font-semibold text-white rounded-xl transition duration-200 text-xs tracking-wider uppercase shadow-md"
        >
          Explore Feature
        </Link>
      </div>
    </div>
  );
};


const FeaturesPage = () => {
  // Rearranged features with Dashboard first and Create Account removed
  const features = [
    {
      title: "Dashboard",
      description:
        "Access all your fitness metrics, progress tracking, and personalized recommendations in one centralized dashboard.",
      link: "/pages/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Exercise Planner",
      description:
        "Let our AI plan exercises tailored to your weight and fitness goals. Create customized workout plans that suit you.",
      link: "/pages/exercise-planner",
      icon: <FaDumbbell />,
    },
     {
      title: "Meal Planner",
      description:
        "The Meal Planner helps you plan your meals for the day—a great way to save time, money, and eat healthier!",
      link: "/pages/profile/meal-plan",
      icon: <FaUtensils />,
    },
    {
      title: "Workout Database",
      description:
        "Our workout database is a comprehensive resource for anyone looking to improve their fitness. Find the perfect routine to target your specific goals.",
      link: "/pages/workouts",
      icon: <FaDatabase />,
    },
    {
      title: "Nutrition Checker",
      description:
        "With Nutrition Checker, you can quickly and easily see the nutritional value of any food, including calories, fat, protein, carbohydrates.",
      link: "/pages/nutrition-checker",
      icon: <FaCalculator />,
    },
    {
      title: "BMR Calculator",
      description:
        "Calculate your Basal Metabolic Rate (BMR) to determine your daily calorie needs. Get insights into your metabolism.",
      link: "/pages/bmr-calculator",
      icon: <FaCalculator />,
    },
   
    
    
    {
      title: "AI ChatBot",
      description:
        "Get instant fitness advice, workout tips, and nutrition guidance from our smart AI assistant, customized for your journey.",
      link: "/pages/Ai",
      icon: <FaRobot />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d17] text-white">
      <Header />
      <div className="flex-grow container mx-auto py-14 px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#00f2fe] uppercase mb-2 block">
            Powerful Modules
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            FITLY AI{" "}
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] text-transparent bg-clip-text">
              FEATURES
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Transform your fitness journey with our intelligent tools designed to
            help you generate workout routines, meal plans, and track progress.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#9c27b0] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                link={feature.link}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;