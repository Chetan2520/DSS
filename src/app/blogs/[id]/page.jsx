import BlogDetail from "@/components/BlogDetail";
import axios from "axios";

export const dynamicParams = false; // Required for static export with dynamic routes

// This is required for 'output: export' - it fetches all blogs at build time
export async function generateStaticParams() {
  console.log("--- STARTING STATIC PARAMS GENERATION ---");
  try {
    const apiUrl = `https://digitalsuccesssolutions.in/php_backend/api/read.php?t=${Date.now()}`;
    const res = await axios.get(apiUrl);
    
    let data = res.data;
    // Handle the "Connected successfully" prefix if it exists
    if (typeof data === 'string' && data.includes('Connected successfully')) {
      data = JSON.parse(data.replace('Connected successfully', '').trim());
    }
    
    const blogs = Array.isArray(data) ? data : [];
    console.log(`Found ${blogs.length} blogs for static generation.`);
    
    if (blogs.length === 0) {
      console.warn("WARNING: No blogs found in API. Only generating test-blog.");
      return [{ id: 'test-blog' }];
    }

    const params = blogs.map((blog) => ({
      id: blog.slug || blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    }));

    console.log("Generated Slugs:", params.map(p => p.id));
    return params;
  } catch (error) {
    console.error("CRITICAL ERROR generating static params:", error.message);
    return [{ id: 'error-fallback' }];
  }
}


// Fetch metadata dynamically from the PHP API for SEO
export async function generateMetadata({ params }) {
  const { id } = await params; // 'id' is our slug in the URL
  
  try {
    const res = await axios.get(`https://digitalsuccesssolutions.in/php_backend/api/read_single.php?slug=${id}`);
    const blog = res.data;
    
    return {
      title: blog.meta_title || blog.title,
      description: blog.meta_desc || "Read the latest digital marketing insights from Digital Success Solutions.",
      alternates: { canonical: `https://digitalsuccesssolutions.in/blogs/${id}` },
      openGraph: {
        title: blog.title,
        description: blog.meta_desc,
        images: [blog.image],
      }
    };
  } catch (error) {
    return {
      title: "Blog Not Found | DSS",
      description: "The requested blog post could not be found."
    };
  }
}

export default function BlogDetailRoute() {
  return <BlogDetail />;
}
