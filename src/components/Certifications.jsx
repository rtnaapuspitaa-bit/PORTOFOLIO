import { useState } from 'react';

const Certifications = () => {
  const [fullscreenPdf, setFullscreenPdf] = useState(null);

  const certifications = [
    {
      id: "mtcna",
      title: "Sertifikat MTCNA",
      subtitle: "MikroTik Certified Network Associate",
      issuer: "MikroTik",
      pdfUrl: "/mtcna.pdf",
      badge: "Networking",
      description: "Sertifikasi resmi MikroTik yang membuktikan keahlian dalam perencanaan, konfigurasi, manajemen, dan troubleshooting jaringan berbasis MikroTik RouterOS."
    },
    {
      id: "fundamental",
      title: "Sertifikat Fundamental",
      subtitle: "Dasar Development & Teknologi",
      issuer: "Program Sertifikasi Teknologi",
      pdfUrl: "/sertifikat-fundamental.pdf",
      badge: "Fundamental",
      description: "Sertifikat kompetensi tingkat dasar yang mengukur pemahaman konsep dasar teknologi, struktur data, dan prinsip pemrograman."
    },
    {
      id: "intermediate",
      title: "Sertifikat Intermediate",
      subtitle: "Pengembangan Tingkat Lanjut",
      issuer: "Program Sertifikasi Teknologi",
      pdfUrl: "/sertifikat-intermediate.pdf",
      badge: "Intermediate",
      description: "Sertifikat kompetensi tingkat menengah untuk kemampuan implementasi proyek, arsitektur sistem, dan logika tingkat lanjut."
    },
    {
      id: "pengantar",
      title: "Sertifikat Pengantar",
      subtitle: "Pengenalan Bidang & Konsep Dasar",
      issuer: "Program Sertifikasi Teknologi",
      pdfUrl: "/sertifikat-pengantar.pdf",
      badge: "Introductory",
      description: "Sertifikat pengenalan bidang yang mencakup fondasi dasar pengetahuan teoritis dan praktis pada teknologi terkait."
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-accent/20 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
            Sertifikasi <span className="text-gradient">& Penghargaan</span>
          </h2>
          <p className="text-dark/70 font-medium text-lg">
            Dokumen resmi sertifikasi yang dapat diverifikasi dan dibaca langsung melalui preview PDF interaktif di bawah ini.
          </p>
        </div>

        {/* Grid 2 Kolom Responsif */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="glass p-6 md:p-8 rounded-[2rem] border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group"
            >
              {/* Info Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full tracking-wide uppercase">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-medium text-dark/60">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-primary/80 mb-2">
                  {cert.subtitle}
                </p>
                <p className="text-xs md:text-sm text-dark/70 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Window-style Frame untuk Preview PDF */}
              <div className="w-full rounded-2xl overflow-hidden border border-primary/15 bg-dark/5 shadow-inner flex flex-col">
                {/* PDF Frame Header Bar */}
                <div className="bg-dark/80 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
                    <span className="ml-2 font-mono text-xs text-light/70 hidden sm:inline-block">
                      {cert.pdfUrl.replace('/', '')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setFullscreenPdf(cert)}
                      className="text-light/80 hover:text-white transition-colors flex items-center gap-1 font-medium hover:underline text-[11px]"
                      title="Perbesar Preview"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4m-4 0l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span className="hidden sm:inline">Perbesar</span>
                    </button>
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/80 hover:text-white transition-colors flex items-center gap-1 font-medium hover:underline text-[11px]"
                      title="Buka Tab Baru"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Tab Baru</span>
                    </a>
                  </div>
                </div>

                {/* PDF iframe Preview */}
                <div className="relative w-full h-[380px] md:h-[450px] bg-slate-100">
                  <iframe 
                    src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    title={cert.title}
                    className="w-full h-full border-0"
                    loading="lazy"
                  >
                    <p className="p-4 text-center text-xs text-dark/70">
                      Browser Anda tidak mendukung preview PDF langsung. 
                      <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline ml-1">
                        Klik untuk membuka PDF
                      </a>
                    </p>
                  </iframe>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mt-5 flex items-center justify-between">
                <a 
                  href={cert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Buka / Unduh Document PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Fullscreen PDF Preview */}
        {fullscreenPdf && (
          <div className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
            <div className="glass-dark bg-white p-4 rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col relative shadow-2xl animate-fade-in">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-dark/10">
                <div>
                  <h3 className="text-lg font-bold text-dark">{fullscreenPdf.title}</h3>
                  <p className="text-xs text-primary font-semibold">{fullscreenPdf.subtitle}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={fullscreenPdf.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition-colors flex items-center gap-1"
                  >
                    <span>Unduh PDF</span>
                  </a>
                  <button 
                    onClick={() => setFullscreenPdf(null)}
                    className="w-8 h-8 rounded-full bg-dark/10 text-dark hover:bg-dark/20 flex items-center justify-center font-bold text-lg transition-colors"
                    aria-label="Tutup"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full rounded-xl overflow-hidden bg-slate-100">
                <iframe 
                  src={`${fullscreenPdf.pdfUrl}#toolbar=1`}
                  title={fullscreenPdf.title}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
