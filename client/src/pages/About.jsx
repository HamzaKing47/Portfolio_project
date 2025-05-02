import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const skills = [
    { name: "HTML5", percentage: "95%" },
    { name: "CSS3", percentage: "95%" },
    { name: "JavaScript", percentage: "75%" },
    { name: "ReactJS", percentage: "75%" },
    { name: "NodeJS", percentage: "87%" },
    { name: "Bootstrap", percentage: "70%" },
  ];

  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-100 font-sans min-h-screen h-full flex flex-col"
    >
      <section className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-green-500 text-center"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Bio Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold mb-10 text-center"
              >
                Professional Summary
              </motion.h3>

              <motion.ul
                variants={containerVariants}
                className="space-y-4 mb-10 list-disc pl-6 text-lg"
              >
                {[
                  "Software Engineer & Recent Graduate",
                  "3-month MERN Stack training at Devsaar IT Solutions",
                  "2 years of freelancing experience on Fiverr (Level 1 Seller)",
                  "Certified Website Designer and Developer from PSDF",
                  "Specialized in building full-stack web applications",
                  "Proven track record of client-focused solutions",
                  "Expertise in secure and user-friendly application development",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center mt-6"
              >
                <Link
                  to="/v1/resume/download-resume"
                  className="bg-green-600 text-white font-semibold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:shadow-[0_10px_25px_rgba(72,199,116,0.8)] hover:-translate-y-1 hover:tracking-wider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV/Resume
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats Boxes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-5 h-min mt-2 mr-10"
            >
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "2+", label: "Years of Experience" },
                { value: "25+", label: "Happy Clients" },
                { value: "70+", label: "Customer Reviews" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-5 rounded-lg text-center aspect-square flex flex-col items-center justify-center"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    border: "2px solid #10B981",
                    transition: { duration: 0.25, ease: "easeInOut" },
                  }}
                  style={{ border: "2px solid transparent" }}
                >
                  <h4 className="text-4xl font-bold text-green-500 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-lg font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Section at Bottom */}
          <div ref={skillsRef} className="overflow-hidden">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Technical Skills
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                opacity: isSkillsInView ? 1 : 0,
                x: isSkillsInView ? 0 : "-100%",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSkillsInView ? 1 : 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-4">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="text-green-500 text-lg">
                      {skill.percentage}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isSkillsInView ? skill.percentage : 0 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.3,
                        ease: "anticipate",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
