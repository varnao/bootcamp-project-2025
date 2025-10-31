import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 150px)",
        padding: "40px 20px",
      }}
    >
      <h1
        className="page-title"
        style={{ marginTop: "20px", marginBottom: "auto" }}
      >
        Valeria Arnao's Website
      </h1>
      <div className="about" style={{ marginBottom: "auto" }}>
        <div className="about-image">
          <Image
            src="/slo.jpeg"
            alt="landscape picture of cal poly campus"
            width={800} // Made even bigger
            height={600} // Made even bigger
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
