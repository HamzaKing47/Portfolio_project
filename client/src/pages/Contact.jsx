import axios from "axios";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import API_URL from "../config";

const ContactPage = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, margin: "-100px" });

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await axios.post(`${API_URL}/contact`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-100 font-sans min-h-screen h-full flex flex-col"
    >
      <section className="container mx-auto px-4 py-8 sm:py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-green-500"
          >
            Get in <span className="text-gray-100">Touch</span>
          </motion.h2>

          <div ref={contactRef} className="grid md:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-6 sm:p-8"
            >
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-base sm:text-lg mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gray-700 rounded-lg p-2 sm:p-3 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-base sm:text-lg mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-700 rounded-lg p-2 sm:p-3 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-base sm:text-lg mb-2">Message</label>
                  <textarea
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-gray-700 rounded-lg p-2 sm:p-3 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-2 sm:pt-4"
                >
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold text-base sm:text-lg py-2 sm:py-3 px-6 rounded-lg 
                      transform transition-all duration-300 hover:scale-[1.02] hover:bg-green-700 
                      hover:shadow-[0_8px_20px_rgba(16,185,129,0.2)] active:scale-95"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-6 sm:p-8 space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-green-500">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 p-3 sm:p-4 rounded-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-green-500 text-xl sm:text-2xl" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm sm:text-base">Email</p>
                    <p className="text-sm sm:text-base break-words">
                      hamzashahid1535@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 p-3 sm:p-4 rounded-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <FaPhoneAlt className="text-green-500 text-xl sm:text-2xl" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm sm:text-base">Phone</p>
                    <p className="text-sm sm:text-base">
                      +92 301 8097701<br />
                      +92 318 8097701
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 p-3 sm:p-4 rounded-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <FaGithub className="text-green-500 text-xl sm:text-2xl" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm sm:text-base">GitHub</p>
                    <p className="text-sm sm:text-base break-all">
                      github.com/HamzaKing47
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 p-3 sm:p-4 rounded-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <FaLinkedin className="text-green-500 text-xl sm:text-2xl" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm sm:text-base">LinkedIn</p>
                    <p className="text-sm sm:text-base break-all">
                      linkedin.com/in/ameer-hamza-malik-862159262
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;