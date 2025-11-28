import { IComment } from "../../../../src/types";
import Comment from "@/components/Comment";
import connectDB from "../../../../src/database/db";
import Blog from "../../../../src/database/blogSchema";
import { IBlog } from "../../../../src/types";
import AddCommentForm from "../../../components/AddCommentForm";

type Props = {
  params: Promise<{ slug: string }>;
};

// helper function to format blog date into readable format
function formatDate(d: Date | string | undefined) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  await connectDB();

  // query the blog by slug
  const blog = (await Blog.findOne({ slug }).lean()) as IBlog | null;

  if (!blog) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Blog not found</h1>
        <p>
          No blog exists with slug: <strong>{slug}</strong>
        </p>
      </main>
    );
  }

  // render blog content when blog exists
  return (
    <main className="page-wrapper">
      <article className="blog-article">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-date">{formatDate(blog.date)}</p>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.image_alt || blog.title}
            className="blog-image"
          />
        )}

        <p className="blog-content">{blog.content}</p>

        <section className="comment-section">
          <h2>Comments</h2>

          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: IComment, index: number) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p>No comments yet.</p>
          )}

          <AddCommentForm slug={slug} />
        </section>
      </article>
    </main>
  );
}
