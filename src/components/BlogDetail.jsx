"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import axios from "axios";
import { FiArrowLeft, FiClock, FiUser, FiCalendar } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const BlogDetail = () => {
  const params = useParams();
  const [slug, setSlug] = useState(params?.id);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If slug is not in params (e.g. on 404 page), try to get it from URL
    if (!slug && typeof window !== "undefined") {
      const parts = window.location.pathname.split("/").filter(Boolean);
      const blogIndex = parts.indexOf("blogs");
      if (blogIndex !== -1 && parts[blogIndex + 1]) {
        setSlug(parts[blogIndex + 1]);
      } else if (window.location.href.includes("/blogs/")) {
        // Fallback for weird path handling on some hosts
        const match = window.location.href.match(/\/blogs\/([^/?#]+)/);
        if (match && match[1]) setSlug(match[1]);
      }
    }
  }, [params, slug]);

  useEffect(() => {
    if (!slug) return;
    
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://digitalsuccesssolutions.in/php_backend/api/read_single.php?slug=${slug}&t=${Date.now()}`,
        );
        let data = res.data;

        // Handle the "Connected successfully" prefix if it exists (consistent with BlogList)
        if (typeof data === "string" && data.includes("Connected successfully")) {
          const jsonPart = data.replace("Connected successfully", "").trim();
          try {
            data = JSON.parse(jsonPart);
          } catch (e) {
            console.error("Failed to parse fixed JSON in BlogDetail", e);
          }
        }

        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[85vh] w-full bg-gray-900 flex flex-col pt-[100px]">
        {/* Background Image */}
        {blog && (
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        {/* Hero Content Container */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col h-full justify-between pb-16 md:pl-24 md:pb-24 flex-grow">
          <div className="mt-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold   tracking-[0.2em] transition-all group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
              Back to Journal
            </Link>
          </div>

          <div className="max-w-4xl mt-12 md:mt-20">
            {loading ? (
               <div className="animate-pulse space-y-4">
                 <div className="h-8 bg-white/20 w-24 rounded-full"></div>
                 <div className="h-16 bg-white/20 w-full rounded-xl"></div>
                 <div className="h-10 bg-white/20 w-48 rounded-lg"></div>
               </div>
            ) : blog ? (
              <>
                <div className="mb-6 flex flex-wrap gap-3 items-center text-[10px] md:text-xs font-bold   tracking-widest">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/20">
                    {blog.category || "General"}
                  </span>
                  <span className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                    <FiClock /> 5 Min Read
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-7xl   text-white leading-[1.15] mb-8 tracking-tight">
                  {blog.title}
                </h1>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white shadow-xl">
                    {blog.author ? blog.author.charAt(0) : "A"}
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-bold text-base md:text-lg">
                      {blog.author || "DSS Team"}
                    </p>
                    <p className="text-white/60   tracking-widest text-[10px]">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="text-3xl">Blog not found.</h1>
            )}
          </div>
        </div>
      </div>

      {blog && (
        <div className="relative bg-white">
          <div className="px-6 py-12 md:py-24">
            <div className="max-w-3xl mx-auto">
              <style>{`
                .blog-content {
                  font-family: 'Inter', system-ui, -apple-system, sans-serif;
                  word-wrap: break-word;
                }
                .blog-content h1, .blog-content h2, .blog-content h3 {
                  color: #000;
                  font-weight: 800;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  line-height: 1.2;
                }
                .blog-content h2 { font-size: 2rem; }
                
                .blog-content p { 
                  font-size: 1.15rem; 
                  line-height: 1.9; 
                  margin-bottom: 2rem; 
                  color: #2d3748;
                }
                
                .blog-content img { 
                  width: 100%; 
                  border-radius: 20px; 
                  margin: 3.5rem 0;
                  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }
                
                .blog-content ul { 
                  padding-left: 1rem; 
                  margin-bottom: 2rem; 
                }
                .blog-content li {
                  position: relative;
                  padding-left: 1.5rem;
                  margin-bottom: 1rem;
                  font-size: 1.15rem;
                  color: #2d3748;
                }
                .blog-content li::before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 12px;
                  width: 8px;
                  height: 8px;
                  background: #2563eb;
                  border-radius: 50%;
                }

                .blog-content blockquote { 
                  border-left: 6px solid #2563eb; 
                  padding: 2.5rem; 
                  font-style: italic; 
                  font-size: 1.4rem;
                  color: #1a202c; 
                  background: #f1f5f9; 
                  border-radius: 0 16px 16px 0; 
                  margin: 4rem 0; 
                }

                @media (max-width: 768px) {
                  .blog-content h2 { font-size: 1.6rem; }
                  .blog-content p { font-size: 1.05rem; line-height: 1.8; }
                  .blog-content blockquote { padding: 1.5rem; font-size: 1.1rem; }
                }
              `}</style>

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row gap-8 justify-between items-center">
                <div>
                  <p className="  text-2xl">Liked this article?</p>
                  <p className="text-gray-500 text-sm">
                    Spread the word with your network.
                  </p>
                </div>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <FaFacebookF size={14} />,
                      href: "https://www.facebook.com/p/Digital-Success-Solutions-61567317789854/",
                      label: "Facebook",
                    },
                    {
                      icon: <FaInstagram size={16} />,
                      href: "https://www.instagram.com/digitalsuccess_solutions/",
                      label: "Instagram",
                    },
                    {
                      icon: <FaLinkedinIn size={14} />,
                      href: "https://www.linkedin.com/company/digital-success-solutions-dss/",
                      label: "LinkedIn",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 font-bold text-xs tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {social.icon} {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
