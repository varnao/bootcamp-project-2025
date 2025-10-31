import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function BlogPage() {
  return (
    <main style={{ padding: "40px 20px" }}>
      <h1 className="page-title">Blog</h1>
      <div
        id="blog-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* mapping through the blogs array to create blogPreview component for each blog */}
        {/* {...blog} spreads all blog properties as props to BlogPreview */}
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
