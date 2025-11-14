import BlogPreview from "@/components/blogPreview";
import connectDB from "../../../src/database/db";
import Blog from "../../../src/database/blogSchema";

// server-side function to fetch blogs from mongoDB
async function getBlogs() {
  await connectDB(); // function from db.ts

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogPage() {
  // call the function to get blogs from database
  const blogs = await getBlogs();

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
        {/* handle case where no blogs are found */}
        {!blogs || blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          // map through the blogs array from mongoDB
          blogs.map((blog) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              date={blog.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.image_alt}
              slug={blog.slug}
            />
          ))
        )}
      </div>
    </main>
  );
}
