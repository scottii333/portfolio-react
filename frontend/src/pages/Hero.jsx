import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export const Hero = () => {
  const container = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Use SplitText.create for cleaner, safer DOM manipulation
      const splitHeading = SplitText.create(headingRef.current, {
        type: "words",
      });
      const splitParagraph = SplitText.create(paragraphRef.current, {
        type: "words",
      });

      // Animate heading words
      tl.from(splitHeading.words, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });

      // Animate paragraph words
      tl.from(
        splitParagraph.words,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.08,
        },
        "-=0.4"
      );

      // Animate button
      tl.fromTo(
        ".hero-button",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );

      // Clean up on unmount
      return () => {
        splitHeading.revert();
        splitParagraph.revert();
      };
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="text-center mt-20 px-4 max-w-3xl mx-auto"
    >
      <h1
        ref={headingRef}
        className="hero-heading text-4xl font-bold flex flex-wrap justify-center gap-2"
      >
        Web Apps Solutions, Built with Purpose
      </h1>

      <p
        ref={paragraphRef}
        className="hero-paragraph mt-4 text-lg text-gray-700 flex flex-wrap justify-center gap-2"
      >
        I design and develop digital experiences that drive real business
        results.
      </p>

      <button className="hero-button bg-[#626F47] text-white font-semibold py-2 px-6 rounded-2xl mt-6 shadow-md hover:bg-[#4B5A3D] transition duration-300">
        Get Started
      </button>
    </section>
  );
};
