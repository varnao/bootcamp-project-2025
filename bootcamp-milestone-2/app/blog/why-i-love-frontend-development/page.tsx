import Image from "next/image";

export default function WhyILoveFrontendDevelopment() {
  return (
    <main className="blog-post" style={{ padding: "40px 20px" }}>
      <h1>Why I Love Frontend Development</h1>
      <p className="blog-date">Posted on October 14, 2025</p>
      <Image
        src="/frontend.jpeg"
        alt="photo of a computer screen"
        width={800}
        height={400}
      />
      <p>
        I love frontend development because it combines my interests in both
        technology and design. It allows me to create things that are not only
        functional but also visually appealing and enjoyable to use. As someone
        who currently serves as a Graphic Designer for WISH, I've developed a
        strong appreciation for good design and attention to detail, both of
        which carry over into my code. I'm excited to keep improving my frontend
        skills and continue building projects that reflect both my creativity
        and technical growth.
      </p>
    </main>
  );
}
