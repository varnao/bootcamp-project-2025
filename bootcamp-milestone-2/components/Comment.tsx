export default function Comment({ comment }: { comment: any }) {
  const date = new Date(comment.time);

  // format: September 16 2024 8:30AM
  const formattedDate =
    date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).replace(" ", " "); 

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        marginTop: "15px",
        borderRadius: "8px",
        background: "#fafafa",
      }}
    >
      <p style={{ margin: 0, fontWeight: "bold" }}>{comment.user}</p>

      <p style={{ margin: "4px 0", color: "#666", fontSize: "0.9rem" }}>
        {formattedDate}
      </p>

      <p style={{ marginTop: "6px" }}>{comment.comment}</p>
    </div>
  );
}
