// array of blog objects that stores all blog data
var blogs = [
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

// getting contanter element where all blog cards will be displayed
var blogContainer = document.getElementById("blog-container");
if (blogContainer) {
  // loop through every blog object to dynamically create its card
  blogs.forEach(function (blog) {
    // creating elements for the blog card that will display the image, title, date, and description
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    var title = document.createElement("h1");
    title.textContent = blog.title;

    var date = document.createElement("p");
    date.textContent = blog.date;

    var description = document.createElement("p");
    description.textContent = blog.description;

    // creating link elements to wrap the blog card and direct to individual blog page
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.classList.add("blog-link");

    // creating a container div for styling the blog card
    var blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    // add image, title, date, amd description to the blog card
    blogCard.appendChild(image);
    blogCard.appendChild(title);
    blogCard.appendChild(date);
    blogCard.appendChild(description);

    // wrap blog card in a link and add to main container
    link.appendChild(blogCard);
    blogContainer.appendChild(link);
  });
}
