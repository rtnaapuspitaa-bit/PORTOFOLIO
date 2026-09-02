const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Riwayat <span className="text-gradient">Pendidikan</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 md:pl-10 border-l-4 border-primary/30 space-y-12">
            {/* Education Timeline Item */}
            <div className="relative group">
              {/* Glowing Pulse Dot */}
              <div className="absolute top-2 -left-[31px] md:-left-[47px] w-6 h-6 bg-primary border-4 border-light rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300">
                <span className="w-full h-full rounded-full bg-primary/50 animate-ping absolute top-0 left-0"></span>
              </div>

              <div className="glass p-8 rounded-[2rem] border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <div>
                    <span className="text-xs font-extrabold text-primary uppercase tracking-wider bg-primary/10 px-3.5 py-1 rounded-full inline-block mb-2">
                      Diploma III / Ahli Madya
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark group-hover:text-primary transition-colors">
                      Teknik Informatika
                    </h3>
                    <p className="text-sm font-bold text-dark/70 mt-1">
                      Politeknik Negeri Cilacap
                    </p>
                  </div>

                  <span className="text-primary font-extrabold text-xs md:text-sm px-4 py-2 bg-primary/10 rounded-full border border-primary/20 w-fit shadow-sm">
                    Saat Ini - Semester 5
                  </span>
                </div>

                <p className="text-dark/75 font-medium leading-relaxed text-sm md:text-base pt-2 border-t border-primary/10">
                  Fokus utama pada pengembangan perangkat lunak (Software Engineering), jaringan komputer, serta desain antarmuka pengguna (UI/UX). Aktif dalam pengerjaan proyek sistem berbasis web, basis data, dan prototyping antarmuka dengan Figma.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-white/70 text-dark/70 rounded-lg border border-primary/10">
                    Software Engineering
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/70 text-dark/70 rounded-lg border border-primary/10">
                    UI/UX Design
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/70 text-dark/70 rounded-lg border border-primary/10">
                    Computer Networks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
