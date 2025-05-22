import { Link } from "react-router-dom";
import { AutoScrollBanner } from "./components/autoScrollHook";
import { Footer } from "./components/footer.jsx";

export const App = () => {
  return (
    <>
      <aside className="w-full mx-auto flex   ">
        <AutoScrollBanner />
      </aside>
      <main className="bg-[#EAEBD0] h-auto w-full pt-[5px] pr-[1rem] pl-[1rem] pb-[5px] ">
        <nav className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md sticky top-3 z-50">
          {/* Left: Logo */}
          <div>
            <Link to="/" className="text-black text-2xl font-bold">
              Angel Scott
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <ul className="flex gap-6 text-black font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>

            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>

          {/* Right: Contact Us */}
          <div>
            <Link to="/" className="text-black font-semibold">
              Contact Us
            </Link>
          </div>
        </nav>

        <section className="border flex flex-col items-center justify-center h-[30rem] text-center mb-[5rem]">
          <h1 className="text-4xl font-bold">
            Full-Stack Solutions, Built with Purpose
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I design and develop digital experiences that drive real business
            results.
          </p>
          <button className="bg-[#626F47] text-white font-semibold py-2 px-4 rounded-2xl mt-3 shadow-md cursor-pointer hover:bg-[#4B5A3D] transition duration-300 ">
            Get Started
          </button>
        </section>

        <section className="border flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-gray-700">
            We offer a range of services to help you succeed.
          </p>
        </section>

        <section className="border flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <p className="mt-4 text-lg text-gray-700">
            Check out our latest projects and case studies.
          </p>
        </section>

        <section className="border flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="mt-4 text-lg text-gray-700">
            Hear what our clients have to say about us.
          </p>
        </section>

        <section className="border flex flex-col items-center justify-center h-[20rem] text-center mb-[5rem]">
          <h2 className="text-3xl font-bold">FAQ </h2>
          <p className="mt-4 text-lg text-gray-700">
            Have questions? We have answers.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};
