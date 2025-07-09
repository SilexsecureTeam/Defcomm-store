import React, { useEffect, useRef } from "react";
import searcherAnim from "../assets/anim/loader.json";
import Lottie from "lottie-react";
import mainLogoTwo from "../assets/logoB.png";

function Fallback() {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef) {
      lottieRef.current.setSpeed(1.5);
    }
  }, [lottieRef]);

  return (
    <main className="w-full h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Lottie
        lottieRef={lottieRef}
        // style={{ height: "25%" }}
        className="w-[40%] md:w-[25%]"
        animationData={searcherAnim}
      />
      <img src={mainLogoTwo} className="w-[15%]" />
    </main>
  );
}

export default Fallback;
