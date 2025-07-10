import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import defcommlogo from "../../assets/defcommlogo.png";
import AuthTabs from "./AuthTabs";
import RegisterForm from "./RegisterForm";
import PhoneLoginForm from "./PhoneLoginForm";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const transitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

const AuthForm = ({ activeTab = "register", userType = "individual" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [tab, setTab] = useState(activeTab);

  useEffect(() => {
    setTab(activeTab);
  }, [activeTab]);

  const currentType = userType;

  const isRegister = tab === "register";
  const toggleTab = isRegister ? "login" : "register";

  const handleTabSwitch = () => {
    navigate(`/membership/${currentType}/${toggleTab}`);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white flex justify-center text-black p-8 rounded-2xl shadow-lg w-max">
        <section className="w-full">
          {/* Back Button */}
          <div className="mb-4">
            <button
              className="cursor-pointer text-sm text-lime-700 hover:underline flex items-center gap-1"
              onClick={() => navigate(`/membership/${userType}`)}
            >
              <FiArrowLeft size={24} /> Back to{" "}
              {userType === "individual" ? "Individual" : "Organization"} Info
            </button>
          </div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AuthTabs
              activeTab={tab}
              setActiveTab={(newTab) => {
                setTab(newTab);
                navigate(`/membership/${currentType}/${newTab}`);
              }}
            />
          </motion.div>

          {/* Logo */}
          <motion.div
            className="flex justify-center items-center w-[48px] h-[48px] bg-[#36460A] rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={defcommlogo} alt="Defcomm logo" className="w-[30px]" />
          </motion.div>

          {/* Label */}
          <p className="text-xs text-gray-500 my-2 mb-4">
            {tab === "login" ? "Login with email" : "Register with email"}
          </p>

          {/* Animated Form Display */}
          <AnimatePresence mode="wait">
            {tab === "register" && (
              <motion.div key="register" {...transitionVariants}>
                <RegisterForm userType={currentType} />
              </motion.div>
            )}
            {tab === "login" && (
              <motion.div key="login" {...transitionVariants}>
                <PhoneLoginForm />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tab Switch CTA */}
          <p className="text-center text-sm mt-6">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-lime-600 underline cursor-pointer font-semibold"
              onClick={handleTabSwitch}
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AuthForm;
