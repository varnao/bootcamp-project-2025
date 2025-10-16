var blogs = [
  {
    title: "Why I Love Frontend Development",
    date: "October 15, 2025",
    description:
      "Discussing why frontend development is my favorite part of programming, from bringing designs to life to creating experiences that feel intuitive and engaging.",
    image: "./images/frontend.jpeg",
    imageAlt: "photo of a computer screen",
    slug: "",
  },
  {
    title: "My Involvement In WISH at Cal Poly",
    date: "October 15, 2025",
    description:
      "A look into my involvement with WISH at Cal Poly and how the club has strengthened my technical skills, leadership, and sense of community in tech.",
    image: "./images/wishlogo.png",
    imageAlt: "cal poly wish club logo",
    slug: "",
  },
];
var blogContainer = document.getElementById("blog-container");
if (blogContainer) {
  blogs.forEach(function (blog) {
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var title = document.createElement("h1");
    title.textContent = blog.title;
    title.style.fontFamily = "Georgia";
    var date = document.createElement("p");
    date.textContent = blog.date;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.appendChild(image);
    blogCard.appendChild(title);
    blogCard.appendChild(date);
    blogCard.appendChild(description);
    blogContainer.appendChild(blogCard);
  });
}
