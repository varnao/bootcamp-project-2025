// definign the shape of a blog object

type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// list of blog posts to display on the blog page
const blogs: Blog[] = [
  {
    title: "Why I Love Frontend Development",
    date: "October 14, 2025",
    description:
      "Discussing why frontend development is my favorite part of programming, from bringing designs to life to creating experiences that feel intuitive and engaging.",
    image: "./frontend.jpeg",
    imageAlt: "photo of a computer screen",
    slug: "why-i-love-frontend-development",
  },
  {
    title: "My Involvement In WISH at Cal Poly",
    date: "October 15, 2025",
    description:
      "A look into my involvement with WISH at Cal Poly and how the club has strengthened my technical skills, leadership, and sense of community in tech.",
    image: "./wishclublogo.png",
    imageAlt: "cal poly wish club logo",
    slug: "my-involvement-in-wish",
  },
];

// getting contanter element where all blog cards will be added
const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
  blogs.forEach((blog) => {
    // creating elements for the blog card and populate with blog data
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("p");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;

    // creating a link element to wrap the blog card and point to the individual blog page
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.classList.add("blog-link");

    // creating a container div for blog card and add all elements to it
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.appendChild(image);
    blogCard.appendChild(title);
    blogCard.appendChild(date);
    blogCard.appendChild(description);

    // wrap the blog card in the link and add it to the main containter
    link.appendChild(blogCard);
    blogContainer.appendChild(link);
  });
}
