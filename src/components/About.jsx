const About = () => {
  const highlights = [
    {
      icon: "💻",
      title: "Software Development",
      description: "Focused on building web applications, logic structure, and clean maintainable code."
    },
    {
      icon: "🎨",
      title: "UI/UX & Figma",
      description: "Designing modern, accessible, and intuitive interfaces with seamless user experience."
    },
    {
      icon: "🚀",
      title: "Growth Mindset",
      description: "Disciplined and committed to expanding knowledge in emerging technologies."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-light via-accent/15 to-light">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Main Description Card */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] space-y-6 text-dark/75 font-medium leading-relaxed shadow-2xl border-l-4 border-l-primary border-t border-r border-b border-primary/10 mb-12 hover:shadow-primary/10 transition-all duration-300">
            <p className="text-base md:text-lg">
              I am a 5th-semester Informatics Engineering student with a strong interest in software development and UI/UX design. I actively enhance my skills through various projects and continuously deepen my understanding of computer systems.
            </p>
            <p className="text-base md:text-lg">
              I am passionate about interface design and leverage Figma to craft intuitive, user-friendly application interfaces. For me, design is not just about visuals, but also about delivering a seamless user experience.
            </p>
            <p className="text-base md:text-lg">
              I am a disciplined and responsible individual, dedicated to continuous growth in technology to make meaningful and impactful contributions.
            </p>
          </div>

          {/* 3 Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex items-center justify-center text-2xl mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-dark/65 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
