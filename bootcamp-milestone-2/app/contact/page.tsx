"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // validate form
    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      setLoading(false);
      return;
    }

    console.log("Attempting to send email with:");
    console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log("Template params:", {
      from_name: name,
      from_email: email,
      message,
    });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setStatus("Message sent successfully!");

      // clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <br />
        <br />

        <input
          type="submit"
          value={loading ? "Sending..." : "Submit"}
          disabled={loading}
        />

        {status && (
          <p
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: status.includes("success")
                ? "#d4edda"
                : "#f8d7da",
              color: status.includes("success") ? "#155724" : "#721c24",
              borderRadius: "5px",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </main>
  );
}
