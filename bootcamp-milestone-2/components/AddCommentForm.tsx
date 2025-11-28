"use client";

import { useState } from "react";

// component for adding a comment to a blog post
export default function AddCommentForm({ slug }: { slug: string }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handles form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`/api/blog/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) {
        setMessage("Error adding comment.");
        setLoading(false);
        return;
      }

      // clear form on success
      setUser("");
      setComment("");
      setMessage("Comment added! Refresh to see it.");
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }
  // render the form
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--cg-white)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        width: "100%",
      }}
    >
      <label style={{ color: "var(--cg-black)" }}>Name</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />

      <label style={{ color: "var(--cg-black)" }}>Comment</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        required
      />

      <input
        type="submit"
        value={loading ? "Posting..." : "Post Comment"}
        style={{
          backgroundColor: "var(--cg-black)",
          color: "var(--cg-white)",
          fontFamily: "Georgia",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
      />
    </form>
  );
}
