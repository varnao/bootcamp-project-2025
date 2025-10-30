export default function Resume() {
  return (
    <main>
      <h1 className="page-title">Resume</h1>
      <a href="/ValeriaArnaoDevResume.pdf" download className="download-link">
        Download Resume
      </a>
      <hr className="section-divider" />

      <div className="resume">
        {/* Education */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">
              California Polytechnic State University, San Luis Obispo
            </h3>
            <p>Bachelor of Science: Computer Science</p>
          </div>
        </section>

        {/* Activities */}
        <section className="section">
          <h2 className="section-title">Activities</h2>
          <div className="entry">
            <h3 className="entry-title">
              Graphic Designer for Women Involved in Software & Hardware
            </h3>
            <ul className="entry-description">
              <li>
                Design and publish weekly social media content including post
                graphics and interactive stories while managing follower
                inquiries and building online community engagement.
              </li>
              <li>
                Designed and produced custom merchandise collections that
                boosted fundraising efforts and strengthened club identity.
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">
              Mentorship Officer for Women Involved in Software & Hardware
            </h3>
            <ul className="entry-description">
              <li>
                Assisted in managing the mentorship program by pairing 20+
                mentor-mentee pairs based on academic interests, career goals,
                and personality compatibility.
              </li>
              <li>
                Organized 6 events per quarter including 4 targeted mentorship
                bonding activities and 2 general meetings.
              </li>
              <li>
                Collaborated with fellow officers in weekly planning sessions to
                brainstorm event ideas, design presentation materials, and
                oversee logistics for smooth execution.
              </li>
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section className="section">
          <h2 className="section-title">Work Experience</h2>
          <div className="entry">
            <h3 className="entry-title">
              Community Service Leader at Cal Poly SLO Housing Department
            </h3>
            <ul>
              <li>
                Perform regular safety walks through freshman housing areas,
                monitoring for policy violations and unsafe behaviors.
              </li>
              <li>
                Respond to incidents, assess property damage, and coordinate
                with the non-emergency police department when necessary.
              </li>
              <li>
                Write detailed incident reports and submit work orders to
                document events.
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Crew Member at Hot Dog On A Stick</h3>
            <ul>
              <li>
                Maintained low wait times by efficiently taking orders and
                communicating with the kitchen staff.
              </li>
              <li>
                Regularly operated the cash register and processed transactions.
              </li>
              <li>
                Engaged with customers face-to-face, delivering friendly
                service.
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Tutor at Boys and Girls Club</h3>
            <ul>
              <li>
                Reviewed classwork and provided one-on-one assistance with
                homework to improve comprehension.
              </li>
              <li>
                Prepared materials and developed discussion questions tailored
                to each student’s needs.
              </li>
              <li>
                Assessed work and tracked progress to ensure consistent
                improvement.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="entry">
            <h3 className="entry-title">Food Mood Website</h3>
            <ul>
              <li>
                Led a cross-functional team to build a restaurant discovery
                platform for San Luis Obispo.
              </li>
              <li>
                Defined product vision, created user stories, and facilitated
                sprint planning using Agile methods.
              </li>
              <li>
                Developed features with JavaScript, MongoDB, and JWT
                authentication.
              </li>
              <li>
                Conducted code reviews and presented sprint updates to peers and
                instructors.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul>
            <li>
              <strong>Programming:</strong> Python, Java, JavaScript, C, SQL,
              HTML/CSS, MongoDB
            </li>
            <li>
              <strong>Tools & Design:</strong> Google Sheets/Slides, Microsoft
              Excel/PowerPoint, Figma, Canva, GitHub
            </li>
            <li>
              <strong>Soft Skills:</strong> Problem-Solving, Leadership,
              Teamwork, Time Management, Creativity
            </li>
          </ul>
        </section>

        {/* Coursework */}
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <ul>
            <li>CSC 202: Data Structures</li>
            <li>CSC 248: Discrete Structures</li>
            <li>CSC 307: Intro to Software Engineering</li>
            <li>CSC 349: Design & Analysis of Algorithms</li>
            <li>CSC 357: Systems Programming</li>
            <li>CSC 365: Intro to Database Systems</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
