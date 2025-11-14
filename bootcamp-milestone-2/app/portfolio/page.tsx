import Image from "next/image";
import connectDB from "../../../src/database/db";
import Project from "../../../src/database/projectSchema";

// server-side function to fetch projects from mongoDB
async function getProjects() {
  await connectDB();

  try {
    // query for all projects
    const projects = await Project.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  // call the function to get projects from database
  const projects = await getProjects();

  return (
    <main>
      <h1 className="page-title">Portfolio</h1>

      {/* handle case where no projects are found */}
      {!projects || projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        // map through the projects array from mongoDB
        projects.map((project) => (
          <div className="project" key={project.slug}>
            <a href={project.link || "/"}>
              <Image
                src={project.image}
                alt={project.image_alt}
                width={600}
                height={350}
              />
            </a>

            <div className="project-details">
              <p className="project-name">{project.title}</p>
              <p className="project-description">{project.description}</p>

              {/* dsplay technologies if they exist */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="technologies">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </div>
              )}

              <a href={project.link || "/"} className="learn-more">
                Learn More
              </a>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
