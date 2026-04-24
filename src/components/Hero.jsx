import fotoRatna from '../assets/foto-ratna.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10 mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10 mix-blend-screen animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hi, I'm <br/>
            <span className="text-gradient">Ratna Puspita Sari</span>
          </h1>
          <p className="text-primary font-medium tracking-wide uppercase mt-2">Informatics Engineering Student</p>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I am currently studying at Politeknik Negeri Cilacap. I have a strong passion for software development and creating intuitive, user-friendly UI/UX designs.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
              View Projects
            </a>
            <a href="#about" className="glass px-8 py-3 rounded-full font-medium transition-transform hover:bg-white/20">
              About Me
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-6 scale-105 opacity-50 blur-xl"></div>
            <img 
              src={fotoRatna} 
              alt="Ratna Puspita Sari" 
              className="relative w-72 md:w-96 aspect-[4/5] rounded-[2rem] object-cover shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
