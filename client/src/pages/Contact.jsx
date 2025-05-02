import axios from "axios";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import toast from "react-hot-toast";

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

      // Sending form data as form-data
      const response = await axios.post("/v1/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to sent message. Try again.");
    }

  }

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
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-green-500"
          >
            Get in <span className="text-gray-100">Touch</span>
          </motion.h2>

          <div ref={contactRef} className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-lg mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gray-700 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-lg mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-700 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-lg mb-2">Message</label>
                  <textarea
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-gray-700 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold text-lg py-3 px-8 rounded-lg 
                      transform transition-all duration-300 hover:scale-105 hover:bg-green-700 
                      hover:shadow-[0_10px_25px_rgba(16,185,129,0.3)]"
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
              className="bg-gray-800 rounded-xl p-8 space-y-8"
            >
              <h3 className="text-2xl font-bold text-green-500">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-green-500 text-2xl" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg">hamzashahid1535@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaPhoneAlt className="text-green-500 text-2xl" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-lg">+92 3018097701, +92 3188097701</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaGithub className="text-green-500 text-2xl" />
                  <div>
                    <p className="text-gray-400">GitHub</p>
                    <p className="text-lg">github.com/HamzaKing47</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <FaLinkedin className="text-green-500 text-2xl" />
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <p className="text-lg">
                      www.linkedin.com/in/ameer-hamza-malik-862159262/
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
