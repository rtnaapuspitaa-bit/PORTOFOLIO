const Projects = () => {
  const projects = [
    {
      title: 'Beasiswa',
      category: 'Web Development & UI/UX',
      description: 'Project kelompok untuk merancang dan mengembangkan sistem informasi beasiswa. Melibatkan kerja sama tim, pembagian tugas, serta komunikasi yang baik.',
      tags: ['React', 'Figma', 'Teamwork'],
      github: 'https://github.com/rtnaapuspitaa-bit/BEASISWA',
      figma: 'https://www.figma.com/design/UHEkau4wYTiM2eQPh3ljmY/DIP?node-id=20-4&t=PX95jlzmGEfk4ZwH-0',
    },
    {
      title: 'Aplikasi Sederhana',
      category: 'Web Development',
      description: 'Mini project berbasis pengelolaan data barang dengan fitur CRUD (Menambah, Menghapus, Mencari, dan Menampilkan data).',
      tags: ['CRUD', 'JavaScript', 'Logic'],
      github: 'https://github.com/rtnaapuspitaa-bit/APLIKASI-SEDERHANA',
    },
    {
      title: 'Sistem Manajemen Jadwal Kuliah Pengganti',
      category: 'UI/UX Design',
      description: 'Merancang tampilan antarmuka (UI/UX) aplikasi menggunakan Figma. Fokus pada penciptaan desain yang user-friendly dan nyaman digunakan.',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      figma: 'https://www.figma.com/design/AHrs9kCw3H8Id5kBtTU4Yd/Untitled?node-id=0-1&t=LlK81p8rUoYBgIgV-1',
    },
    {
      title: 'Kalkulator dan Konversi Suhu',
      category: 'Programming Basics',
      description: 'Pembuatan sistem kalkulator dan konversi suhu sebagai latihan dasar logika pemrograman dan algoritma.',
      tags: ['HTML/CSS', 'JavaScript', 'Logic'],
      github: 'https://github.com/rtnaapuspitaa-bit/KALKULATOR-DAN-KONVERSI-SUHU-PBO',
    },
    {
      title: 'Pustaka',
      category: 'Web Development',
      description: 'Pengembangan aplikasi berbasis web untuk sistem pustaka digital yang interaktif dan responsif.',
      tags: ['Web Dev', 'Pustaka', 'Frontend'],
      github: 'https://github.com/rtnaapuspitaa-bit/PUSTAKA',
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-dark">
          Proyek yang <span className="text-gradient">Saya Kerjakan</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-3xl p-8 hover:bg-primary/5 transition-all duration-300 group border border-primary/5 hover:border-primary/20 relative overflow-hidden flex flex-col shadow-xl shadow-primary/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-4 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-dark/60 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.github || project.figma) && (
                  <div className="flex gap-6 pt-5 border-t border-primary/10">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-dark/60 hover:text-primary flex items-center gap-2 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                        GitHub
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-dark/60 hover:text-primary flex items-center gap-2 transition-colors">
                        <svg className="w-4 h-5" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
                        Figma
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
