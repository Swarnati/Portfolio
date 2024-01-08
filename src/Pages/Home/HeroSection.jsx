export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Swarnati</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A passionate and motivated front-end developer eager to make my mark in the world of web development.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero.png" alt="Hero Section" />
      </div>
    </section>
  );
}
