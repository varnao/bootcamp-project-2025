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
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
