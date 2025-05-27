import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import bgImage from "../images/wavy-bg.jpg"; // ✅ Adjust if needed

export const LoadingScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const buttonRef = useRef(null);
  const [dots, setDots] = useState("");

  const loadingText = "Loading your experience";

  // Animate loading dots ". .. ..." endlessly
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Animate screen and button using useGSAP
  useGSAP(
    () => {
      // Fade in the screen
      gsap.fromTo(
        loaderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Animate the button in
      gsap.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        delay: 2,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    },
    { scope: loaderRef }
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ Loading text with animated dots */}
      <div className="text-xl md:text-2xl font-semibold text-[#1f2d16] drop-shadow mb-8">
        {loadingText} {dots}
      </div>

      {/* ✅ Animated button */}
      <button
        ref={buttonRef}
        onClick={onComplete}
        className="opacity-0 translate-y-6 px-6 py-2 bg-[#4B5A3D] text-white text-sm font-semibold rounded-xl shadow-md hover:bg-[#3a472f] transition-all duration-300 cursor-pointer"
        aria-label="Start Application"
      >
        Click to Start
      </button>
    </div>
  );
};
