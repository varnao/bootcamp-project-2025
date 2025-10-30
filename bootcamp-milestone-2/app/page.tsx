import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="page-title">Valeria Arnao's Website</h1>
      <div className="about">
        <div className="about-image">
          <Image
            src="/slo.jpeg"
            alt="landscape picture of cal poly campus"
            width={750}
            height={450}
          />
        </div>
        <div className="about-text">
          <p>
            Hello! My name is <strong>Valeria Arnao</strong>, I'm from Los
            Angeles, and I'm a third-year Computer Science student at Cal Poly
            SLO. On my campus, I serve as the Graphic Designer for the Women
            Involved in Software & Hardware club and am also part of the Cal
            Poly Scholars program. Outside of academics, I love watching movies,
            making music, reading, and working out!
          </p>
        </div>
      </div>
    </main>
  );
}
