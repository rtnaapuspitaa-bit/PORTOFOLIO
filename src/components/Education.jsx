const Education = () => {
  return (
    <section id="education" className="py-24 bg-accent/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-dark">
          Riwayat <span className="text-gradient">Pendidikan</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 rounded-2xl relative border-l-4 border-l-primary hover:border-l-secondary transition-colors duration-300 shadow-xl shadow-primary/5">
            <div className="absolute top-8 -left-[12px] w-5 h-5 bg-light border-4 border-primary rounded-full"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-dark">Teknik Informatika</h3>
              <span className="text-primary font-bold mt-2 md:mt-0 px-4 py-1 bg-primary/10 rounded-full text-sm">
                Saat Ini - Semester 5
              </span>
            </div>
            <p className="text-dark/70 font-medium leading-relaxed">
              Fokus pada pengembangan perangkat lunak (Software Development) dan desain antarmuka pengguna (UI/UX). Aktif dalam berbagai project pengembangan sistem berbasis web dan desain menggunakan Figma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
