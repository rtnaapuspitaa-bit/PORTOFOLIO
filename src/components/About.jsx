const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-dark">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="glass p-8 md:p-12 rounded-3xl space-y-6 text-dark/70 font-medium leading-relaxed shadow-xl border border-primary/5">
            <p>
              I am a 5th-semester Informatics Engineering student with a strong interest in software development and UI/UX design. I actively enhance my skills through various projects and continuously deepen my understanding of computer systems.
            </p>
            <p>
              I am passionate about interface design and leverage Figma to craft intuitive, user-friendly application interfaces. For me, design is not just about visuals, but also about delivering a seamless user experience.
            </p>
            <p>
              I am a disciplined and responsible individual, dedicated to continuous growth in technology to make meaningful and impactful contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
