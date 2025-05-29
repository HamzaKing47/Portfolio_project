import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import API_URL from "../config";
import { format } from "date-fns";
import Loading from "../components/Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogDetails = async () => {
      try {
        const [postResponse, relatedResponse] = await Promise.all([
          axios.get(`${API_URL}/blog/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            signal: controller.signal,
          }),
          axios.get(`${API_URL}/blog/related/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            signal: controller.signal,
          }),
        ]);

        setPost(postResponse.data?.blog);
        setRelatedPosts(relatedResponse.data.relatedBlogs || []);
        setError(null);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Blog details fetch error:", error);
          setError(error.response?.data?.message || "Failed to load post");
          if (error.response?.status === 401) navigate("/login");
          if (error.response?.status === 404) navigate("/blog");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id, token, navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsImageFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Error</h3>
          <p className="mb-6">{error}</p>
          <Link
            to="/blog"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h3 className="text-2xl font-bold mb-4">Post Not Found</h3>
          <Link
            to="/blog"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-green-500 hover:text-green-400 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Articles
          </Link>

          <article className="bg-gray-800 rounded-xl p-6 md:p-8 mb-12">
            {post?.coverImage && (
              <>
                <div
                  className="relative h-64 md:h-80 rounded-lg mb-6 overflow-hidden cursor-pointer"
                  onClick={() => setIsImageFullscreen(true)}
                >
                  <img
                    src={`${API_URL}/blog-image/${post?._id}`}
                    alt={post?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
                </div>

                {isImageFullscreen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsImageFullscreen(false)}
                  >
                    <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setIsImageFullscreen(false)}
                        className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-100 transition"
                        aria-label="Close image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <img
                        src={`${API_URL}/blog-image/${post?._id}`}
                        alt={post?.title}
                        className="max-w-full max-h-[90vh] object-contain rounded"
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-gray-400 text-sm">
                  {post?.createdAt ?
                    format(new Date(post.createdAt), "MMMM dd, yyyy") :
                    "Unknown date"}
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post?.title}</h1>

            <div className="prose prose-invert max-w-none">
              {post.description?.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {post?.tags?.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  TAGS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags
                    .filter(tag => tag)
                    .flatMap(tag =>
                      (tag.toString()?.split(',') || [])
                        .map(t => t.trim())
                        .filter(t => t)
                    )
                    .map((individualTag, index) => (
                      <span
                        key={`${individualTag}-${index}`}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        #{individualTag}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </article>

          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">
                Related <span className="text-green-500">Articles</span>
              </h3>
              <div className="flex overflow-x-auto gap-6 p-4 -mx-4">
                {relatedPosts.map((relatedPost) => (
                  <motion.div
                    key={relatedPost._id}
                    whileHover={{ y: -5 }}
                    className="min-w-[300px] max-w-[300px] bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all flex-shrink-0 flex flex-col h-full"
                  >
                    <Link 
                      to={`/blog/${relatedPost._id}`} 
                      className="block flex flex-col h-full"
                    >
                      <h4 className="text-xl font-bold mb-2 text-gray-100 hover:text-green-500 transition-colors line-clamp-2 min-h-[3rem]">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-auto">
                        <span className="text-green-500 text-sm font-medium">
                          Read more →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogDetails;