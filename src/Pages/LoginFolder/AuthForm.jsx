import React, { useState } from "react";
import defcommlogo from "../../assets/defcommlogo.png";
import AuthTabs from "./AuthTabs";
import RegisterForm from "./RegisterForm";
import PhoneLoginForm from "./PhoneLoginForm";
import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white flex justify-center text-black p-8 rounded-2xl shadow-lg w-max">
        <section className="w-full">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>

          {/* Logo */}
          <motion.div
            className="flex justify-center items-center mt-4 w-[40px] h-[40px] bg-lime-800 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={defcommlogo} alt="Defcomm logo" className="w-[30px]" />
          </motion.div>

          <p className="text-xs text-gray-500 my-2">
            {activeTab === "login" ? "Login with email" : "Register with email"}
          </p>

          {/* Render either RegisterForm or PhoneLoginForm */}
          <AnimatePresence mode="wait">
            {activeTab === "register" && (
              <motion.div key="register" {...transitionVariants}>
                <RegisterForm />
              </motion.div>
            )}

            {activeTab === "login" && (
              <motion.div key="login" {...transitionVariants}>
                <PhoneLoginForm />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default AuthForm;
