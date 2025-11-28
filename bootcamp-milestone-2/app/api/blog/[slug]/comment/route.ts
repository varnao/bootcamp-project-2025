import { NextResponse } from "next/server";
import connectDB from "../../../../../../src/database/db";
import Blog from "../../../../../../src/database/blogSchema";

export async function POST(
  req: Request,
  context: { params: { slug: string } }
) {
  try {
    const { slug } = await context.params;
    const { user, comment } = await req.json();

    // validate
    if (!user || !comment) {
      return NextResponse.json(
        { error: "Missing user or comment" },
        { status: 400 }
      );
    }

    // connect to DB
    await connectDB();

    // find the blog
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // add comment
    blog.comments.push({
      user,
      comment,
      time: new Date(),
    });

    await blog.save();

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
