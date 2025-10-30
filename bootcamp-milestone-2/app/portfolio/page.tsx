import Image from "next/image";

export default function Portfolio() {
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>

      <div className="project">
        <a href="/">
          <Image
            src="/mywebsite.jpeg"
            alt="picture of Valeria Arnao's website"
            width={600}
            height={350}
          />
        </a>

        <div className="project-details">
          <p className="project-name">Personal Website</p>
          <p className="project-description">
            This website was built using the Hack4Impact Starter Kit! Through
            this project, I refreshed my skills in HTML and CSS while learning
            about key web development concepts. I explored various HTML elements
            such as headers, attributes, classes, and divs, and gained a better
            understanding of how they work together to structure a webpage.
            Click the image to see the updated version of my website!
          </p>
          <a href="/" className="learn-more">
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
