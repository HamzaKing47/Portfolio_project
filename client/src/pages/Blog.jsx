import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import API_URL from "../config"; 

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const blogRef = useRef(null);
  const isInView = useInView(blogRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });
        setPosts(response.data.blogs);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Blog fetch error:", error);
          if (error.response?.status === 401) navigate("/login");
        }
      }
    };

    fetchBlogs();
    return () => controller.abort();
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col">
      <section className="container mx-auto px-4 py-12 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Latest <span className="text-green-500">Articles</span>
          </h2>

          <div
            ref={blogRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  {post.cover ? (
                    <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    {post.tags?.length > 0 && (
                      <span className="text-green-500 text-sm font-medium">
                        {post.tags[0]}
                      </span>
                    )}
                    <span className="text-gray-400 text-sm">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-100">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.slice(1).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post._id}`}
                    className="inline-flex items-center text-green-500 font-medium 
                      hover:text-green-400 transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-400 py-12"
              >
                No articles found.
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
