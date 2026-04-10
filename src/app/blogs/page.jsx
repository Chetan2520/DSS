import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Blogs | Digital Marketing Insights & Trends",
  description: "Learn digital marketing strategies, SEO tips, and industry trends from the experts at Digital Success Solutions.",
  alternates: { canonical: "https://digitalsuccesssolutions.in/blogs" }
};

export default function BlogsRoute() {
  return <BlogList />;
}
