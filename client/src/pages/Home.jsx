import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import API_URL from "../config";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen h-full flex flex-col">
      <section className="bg-gray-900 text-white py-12 flex-grow">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-4">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start md:mb-0 md:ml-[80px] border-4 border-green-500 rounded-2xl p-6">
            <div className="group relative w-[220px] sm:w-[260px] md:w-[290px] lg:w-[320px] xl:w-[360px] h-[294px] sm:h-[347px] md:h-[387px] lg:h-[427px] xl:h-[480px]">
              <img
                src="/dp.jpg"
                alt="Profile Picture"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
              />
              <img
                src="/hoveredDp.jpg"
                alt="Hovered Profile Picture"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>

          <motion.div // Text Section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 0.77, 0.47, 0.97], // Custom cubic-bezier curve
              delay: 0.2,
            }}
            className="w-full md:w-1/2 text-center md:text-left md:pl-28"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug">
                Hi, I&apos;m{" "}
                <span className="text-green-500">Ameer Hamza.</span>
                <br />
                <motion.span
                  className="text-white text-2xl md:text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Typewriter
                    words={[
                      "A Website Developer.",
                      "A MERN Stack Expert.",
                      "A Backend Architect.",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl mt-10 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I&apos;m a MERN Stack Developer specializing in building dynamic,
              scalable web applications. With expertise in React, Node.js, and
              Tailwind CSS, I create user-centric interfaces and reliable
              backend systems. I focus on delivering fast, secure,
              high-performing solutions tailored to clients&apos; needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex justify-center mt-6">
                <Link
                  to={`${API_URL}/resume/download-resume`}
                  className="bg-green-600 text-white font-semibold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:shadow-[0_10px_25px_rgba(72,199,116,0.8)] hover:-translate-y-1 hover:tracking-wider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV/Resume
                </Link>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
