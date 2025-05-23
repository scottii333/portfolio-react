import { Link } from "react-router-dom";
import { AutoScrollBanner } from "./components/autoScrollHook";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./pages/Hero.jsx";
import { Features } from "./pages/features.jsx";
import { Faqs } from "./pages/Faqs.jsx";
import { MainNav } from "./components/MainNav.jsx";
import { Projects } from "./pages/projects.jsx";
export const App = () => {
  return (
    <>
      <aside className="w-full mx-auto flex   ">
        <AutoScrollBanner />
      </aside>
      <main className="bg-white h-auto w-full pt-[5px] pr-[1rem] pl-[1rem] pb-[5px] ">
        <MainNav />

        <section className="border border-gray-300 rounded-2xl flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <Hero />
        </section>

        <section className="border border-gray-300 rounded-2xl flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <Features />
        </section>

        <section className="border border-gray-300 rounded-2xl flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <Projects />
        </section>

        <section className="border border-gray-300 rounded-2xl flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  );
};
