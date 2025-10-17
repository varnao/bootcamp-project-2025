type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Why I Love Frontend Development",
    date: "October 14, 2025",
    description:
      "Discussing why frontend development is my favorite part of programming, from bringing designs to life to creating experiences that feel intuitive and engaging.",
    image: "./frontend.jpeg",
    imageAlt: "photo of a computer screen",
    slug: "",
  },
  {
    title: "My Involvement In WISH at Cal Poly",
    date: "October 15, 2025",
    description:
      "A look into my involvement with WISH at Cal Poly and how the club has strengthened my technical skills, leadership, and sense of community in tech.",
    image: "./wishclublogo.png",
    imageAlt: "cal poly wish club logo",
    slug: "",
  },
];

const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
  blogs.forEach((blog) => {
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("p");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;

    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.appendChild(image);
    blogCard.appendChild(title);
    blogCard.appendChild(date);
    blogCard.appendChild(description);
    blogContainer.appendChild(blogCard);
  });
}
