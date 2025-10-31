import Image from "next/image";

export default function MyInvolvementInWish() {
  return (
    <main className="blog-post" style={{ padding: "40px 20px" }}>
      <h1>My Involvement in WISH</h1>
      <p className="blog-date">Posted on October 14, 2025</p>
      <Image
        src="/wishclublogo.png"
        alt="cal poly wish club logo"
        width={800}
        height={400}
      />
      <p>
        I first discovered the Women Involved In Software & Hardware (WISH) club
        in my freshman year. Throughout the year, I attended their general
        meetings, events, and trips. I really liked the community of people
        there and decided to apply for a leadership position for the following
        year.
      </p>
      <p>
        My sophomore year, I was part of the Mentorship team, which was in
        charge of WISH's mentorship program. As a team, we planned bonding
        events, fun themed meetings and outings, and also helped plan several
        general meetings. I sincerely enjoyed getting to work together with this
        team and grow as a leader while improving my communication and
        organization skills.
      </p>
      <p>
        This school year, I serve as the Graphic Designer. I am in charge of
        creating all of our graphics as well as managing our social media
        accounts. I also had the opportunity to design new merchandise for our
        club, which will help us do a bit of fundraising. In this role, I've
        gotten the chance to sharpen my skills in design, planning, and time
        management.
      </p>
    </main>
  );
}
