import fotoRatna from '../assets/foto-ratna.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden bg-gradient-to-b from-light via-accent/10 to-light">
      {/* Dynamic Animated Background Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/15 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-secondary/25 rounded-full blur-[140px] -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Text Content (Order 1 on both mobile & desktop) */}
        <div className="order-1 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Teknik Informatika • Semester 5
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold leading-tight text-dark">
            Hi, I'm <br/>
            <span className="text-gradient">Ratna Puspita Sari</span>
          </h1>

          <p className="text-dark/75 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
            Student at <span className="font-bold text-primary">Politeknik Negeri Cilacap</span> with a strong passion for software engineering, web development, and intuitive UI/UX design.
          </p>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
            <div className="glass p-3 rounded-2xl border border-primary/10 text-center">
              <span className="text-xl md:text-2xl font-bold text-primary block">Sem 5</span>
              <span className="text-[11px] font-semibold text-dark/60">Informatika</span>
            </div>
            <div className="glass p-3 rounded-2xl border border-primary/10 text-center">
              <span className="text-xl md:text-2xl font-bold text-primary block">5+</span>
              <span className="text-[11px] font-semibold text-dark/60">Projects</span>
            </div>
            <div className="glass p-3 rounded-2xl border border-primary/10 text-center">
              <span className="text-xl md:text-2xl font-bold text-primary block">5</span>
              <span className="text-[11px] font-semibold text-dark/60">Certifications</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 flex items-center gap-2"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#about" 
              className="glass hover:bg-primary/10 text-dark px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 border border-primary/15 hover:border-primary/30"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right Image Container (Order 2 on both mobile & desktop) */}
        <div className="order-2 flex justify-center">
          <div className="relative group">
            {/* Glowing Gradient Backdrop Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-accent rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
            
            {/* Image Box */}
            <div className="relative glass p-3 rounded-[2.5rem] border border-white/60 shadow-2xl overflow-hidden">
              <img 
                src={fotoRatna} 
                alt="Ratna Puspita Sari" 
                className="w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-[2rem] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl border border-white/40 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">
                    💻
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark">UI/UX & Web Dev</h4>
                    <p className="text-xs text-dark/70 font-medium">Politeknik Negeri Cilacap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
