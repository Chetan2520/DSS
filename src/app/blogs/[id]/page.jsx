import BlogDetail from "@/components/BlogDetail";

export async function generateMetadata({ params }) {
  // Use 'await' on params if required (in Next 15+ params should be awaited)
  const { id } = await params;
  
  return {
    title: `DSS Blog Insights | Digital Marketing Ideas`,
    description: "Read the latest digital marketing insights, strategies, and case studies from Digital Success Solutions.",
    alternates: { canonical: `https://digitalsuccesssolutions.in/blogs/${id}` }
  };
}

export default function BlogDetailRoute() {
  return <BlogDetail />;
}
