import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Syncra',
      category: 'UI/UX Design & Web Development',
      description: 'Konsep sistem informasi jadwal kuliah pengganti yang membantu mahasiswa dan dosen mengatur perubahan jadwal secara lebih terarah, jelas, dan mudah dipantau.',
      tags: ['React', 'Figma', 'System Design'],
      github: 'https://github.com/rtnaapuspitaa-bit/Sistem-Informasi-Jadwal-Pengganti',
      figma: 'https://www.figma.com/design/AHrs9kCw3H8Id5kBtTU4Yd/Syncra?node-id=0-1&t=8GH18g1KQQBHhSOY-1',
      icon: '✦',
      featured: true
    },
    {
      title: 'Beasiswa',
      category: 'Web Development & UI/UX',
      description: 'Project kelompok untuk merancang dan mengembangkan sistem informasi beasiswa. Melibatkan kerja sama tim, pembagian tugas, serta komunikasi yang baik.',
      tags: ['React', 'Figma', 'Teamwork'],
      github: 'https://github.com/rtnaapuspitaa-bit/BEASISWA',
      figma: 'https://www.figma.com/design/UHEkau4wYTiM2eQPh3ljmY/DIP?node-id=20-4&t=PX95jlzmGEfk4ZwH-0',
      icon: '🎓'
    },
    {
      title: 'Aplikasi Sederhana',
      category: 'Web Development',
      description: 'Mini project berbasis pengelolaan data barang dengan fitur CRUD (Menambah, Menghapus, Mencari, dan Menampilkan data).',
      tags: ['CRUD', 'JavaScript', 'Logic'],
      github: 'https://github.com/rtnaapuspitaa-bit/APLIKASI-SEDERHANA',
      icon: '📦'
    },
    {
      title: 'Sistem Manajemen Jadwal Kuliah Pengganti',
      category: 'UI/UX Design',
      description: 'Merancang tampilan antarmuka (UI/UX) aplikasi menggunakan Figma. Fokus pada penciptaan desain yang user-friendly dan nyaman digunakan.',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      figma: 'https://www.figma.com/design/AHrs9kCw3H8Id5kBtTU4Yd/Untitled?node-id=0-1&t=LlK81p8rUoYBgIgV-1',
      icon: '📅'
    },
    {
      title: 'Kalkulator & Konversi Suhu',
      category: 'Programming Basics',
      description: 'Pembuatan sistem kalkulator dan konversi suhu sebagai latihan dasar logika pemrograman dan algoritma.',
      tags: ['HTML/CSS', 'JavaScript', 'Logic'],
      github: 'https://github.com/rtnaapuspitaa-bit/KALKULATOR-DAN-KONVERSI-SUHU-PBO',
      icon: '🧮'
    },
    {
      title: 'Pustaka Digital',
      category: 'Web Development',
      description: 'Pengembangan aplikasi berbasis web untuk sistem pustaka digital yang interaktif dan responsif.',
      tags: ['Web Dev', 'Pustaka', 'Frontend'],
      github: 'https://github.com/rtnaapuspitaa-bit/PUSTAKA',
      icon: '📚'
    },
    {
      title: 'SIBEA Mobile',
      category: 'Mobile Development & UI/UX',
      description: 'Perancangan dan pengembangan aplikasi mobile SIBEA dengan fokus pada pengalaman pengguna yang intuitif dan responsif.',
      tags: ['Mobile', 'Figma', 'UI/UX'],
      github: 'https://github.com/rtnaapuspitaa-bit/SIBEA-MOBILE',
      figma: 'https://www.figma.com/design/UHEkau4wYTiM2eQPh3ljmY/DIP?node-id=20-4&p=f',
      icon: '📱'
    }
  ];

  const filters = ['All', 'UI/UX Design', 'Web Development', 'Mobile Development', 'Programming Basics'];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative bg-light overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary mb-4">Selected work / 2024—2026</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-dark/65 font-medium max-w-xl mx-auto">Kumpulan eksperimen, sistem, dan interface yang membentuk cara saya belajar membuat produk digital.</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter project berdasarkan fokus">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${activeFilter === filter ? 'bg-dark text-white border-dark shadow-lg shadow-dark/15 -translate-y-0.5' : 'bg-white/70 text-dark/60 border-primary/10 hover:border-primary/30 hover:text-primary'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              style={{ '--card-delay': `${index * 100}ms` }}
              className={`glass card-reveal rounded-[2rem] p-8 border transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl ${project.featured ? 'project-featured border-secondary/40 shadow-secondary/10 lg:col-span-2 bg-gradient-to-br from-white via-white to-secondary/10' : 'border-primary/10 shadow-primary/5 hover:border-primary/30 hover:shadow-primary/15'}`}
            >
              {project.featured && <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl bg-dark text-white text-[10px] font-extrabold uppercase tracking-[0.2em]">New / Featured</div>}
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-extrabold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm ${project.featured ? 'bg-secondary text-white project-icon-pulse' : 'bg-primary/10'}`}>
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-dark group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-dark/70 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-primary/10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-semibold px-3 py-1 bg-white/70 text-dark/75 rounded-lg border border-primary/10">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 py-2.5 px-4 rounded-xl bg-dark text-white text-xs font-bold hover:bg-dark/80 transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                      GitHub
                    </a>
                  )}
                  {project.figma && (
                    <a 
                      href={project.figma} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20"
                    >
                      <svg className="w-3.5 h-4" viewBox="0 0 38 57" fill="none"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
                      Figma UI/UX
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-dark/45 font-semibold mt-8">Menampilkan {filteredProjects.length} dari {projects.length} project</p>
      </div>
    </section>
  );
};

export default Projects;
