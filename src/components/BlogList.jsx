"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { FiArrowUpRight, FiCalendar, FiUser } from "react-icons/fi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Backend se blogs fetch karna
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `https://digitalsuccesssolutions.in/php_backend/api/read.php?t=${Date.now()}`,
        );
        let data = res.data;

        // --- BUG FIX: Handle "Connected successfully" prefix from server ---
        if (
          typeof data === "string" &&
          data.includes("Connected successfully")
        ) {
          const jsonPart = data.replace("Connected successfully", "").trim();
          try {
            data = JSON.parse(jsonPart);
          } catch (e) {
            console.error("Failed to parse fixed JSON", e);
          }
        }

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setBlogs([]);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);


  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6 md:px-20 font-sans">
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-20 border-b border-white/10 pb-10">
        <p className="text-[#0078f0] font-semibold tracking-wider text-sm mb-4">
          The Journal
        </p>
        <h1 className="text-5xl md:text-7xl tracking-tighter mb-6">
          Insights & <br />
          <span className="text-white/40">Updates.</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
          Explore our latest thoughts on design, technology, and business
          growth.
        </p>
      </div>

      {/* --- BLOG GRID --- */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-xl font-bold">
            Loading Stories...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug || blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
            key={blog._id}
            className="group block"
          >
            {/* Image Card */}
            <div className="overflow-hidden rounded-2xl mb-6 relative h-[300px] w-full bg-white/5 border border-white/10">
              <img
                src={blog.image || "https://placehold.co/600x400"}
                alt={blog.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white border border-white/10">
                {blog.category || "Tech"}
              </div>
            </div>

            {/* Content */}
            <div className="pr-4">
              <div className="flex items-center gap-4 text-xs text-white/40 font-medium tracking-wider mb-3">
                <span className="flex items-center gap-1">
                  <FiCalendar /> {new Date(blog.createdAt).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <FiUser /> {blog.author || "Team"}
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight mb-3 group-hover:text-[#0078f0] transition-colors line-clamp-2">
                {blog.title}
              </h2>

              {/* Safely stripped Plain Text Preview */}
              <div className="text-[#e5e7eb] leading-relaxed mb-4 line-clamp-3 text-sm">
                {blog.content ? blog.content.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').substring(0, 150) + "..." : ""}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider border-b border-white/20 pb-1 group-hover:text-[#0078f0] group-hover:border-[#0078f0] transition-all">
                Read Full Story <FiArrowUpRight />
              </span>
            </div>
          </Link>
        ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
