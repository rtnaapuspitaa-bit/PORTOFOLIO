import { useState } from 'react';

const Certifications = () => {
  const [fullscreenCert, setFullscreenCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const certifications = [
    {
      id: "cisco-it-essentials",
      type: "image",
      title: "Cisco IT Essentials",
      subtitle: "PC Hardware & Network Essentials",
      issuer: "Cisco Networking Academy",
      fileUrl: "/cisco-it-essentials.jpg",
      badge: "IT Essentials",
      category: "networking",
      description: "Official Cisco Networking Academy certification covering comprehensive knowledge of computer hardware, operating systems, networking fundamentals, and IT security protocols."
    },
    {
      id: "mtcna",
      type: "pdf",
      title: "MTCNA Certification",
      subtitle: "MikroTik Certified Network Associate",
      issuer: "MikroTik",
      fileUrl: "/mtcna.pdf",
      badge: "Networking",
      category: "networking",
      description: "Official MikroTik certification validating expertise in network planning, configuration, management, and RouterOS-based network troubleshooting."
    },
    {
      id: "fundamental",
      type: "pdf",
      title: "Fundamental Certificate",
      subtitle: "Core Technology & Development",
      issuer: "Technology Certification Program",
      fileUrl: "/sertifikat-fundamental.pdf",
      badge: "Fundamental",
      category: "development",
      description: "Foundational competency certification measuring core understanding of software concepts, data structures, and programming principles."
    },
    {
      id: "intermediate",
      type: "pdf",
      title: "Intermediate Certificate",
      subtitle: "Advanced Software Development",
      issuer: "Technology Certification Program",
      fileUrl: "/sertifikat-intermediate.pdf",
      badge: "Intermediate",
      category: "development",
      description: "Intermediate competency certification focusing on practical project implementation, system architecture, and advanced application logic."
    },
    {
      id: "pengantar",
      type: "pdf",
      title: "Introductory Certificate",
      subtitle: "Tech Foundations & Principles",
      issuer: "Technology Certification Program",
      fileUrl: "/sertifikat-pengantar.pdf",
      badge: "Introductory",
      category: "development",
      description: "Introductory certification covering essential theoretical foundations and hands-on practical principles in relevant software technologies."
    }
  ];

  const filteredCerts = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-accent/20 to-transparent">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Certifications <span className="text-gradient">& Awards</span>
          </h2>
          <p className="text-dark/70 text-sm md:text-base font-medium">
            Official credentials, professional certifications, and technical accomplishments
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm ${
              activeFilter === 'all'
                ? 'bg-primary text-white shadow-primary/20 shadow-md scale-105'
                : 'glass text-dark/75 hover:text-primary hover:bg-white/80'
            }`}
          >
            All Credentials ({certifications.length})
          </button>
          <button
            onClick={() => setActiveFilter('networking')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm ${
              activeFilter === 'networking'
                ? 'bg-primary text-white shadow-primary/20 shadow-md scale-105'
                : 'glass text-dark/75 hover:text-primary hover:bg-white/80'
            }`}
          >
            Networking & IT (2)
          </button>
          <button
            onClick={() => setActiveFilter('development')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm ${
              activeFilter === 'development'
                ? 'bg-primary text-white shadow-primary/20 shadow-md scale-105'
                : 'glass text-dark/75 hover:text-primary hover:bg-white/80'
            }`}
          >
            Software Development (3)
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id} 
              style={{ '--card-delay': `${cert.id * 100}ms` }}
              className="glass card-reveal interactive-card rounded-[2rem] p-7 md:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/15"
            >
              <div>
                {/* Header Badge & Issuer */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-extrabold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {cert.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-dark/75 bg-white/80 px-3 py-1.5 rounded-xl border border-primary/10 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors mb-1.5 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-primary/80 mb-3 tracking-wide">
                  {cert.subtitle}
                </p>
                <p className="text-xs md:text-sm text-dark/70 leading-relaxed font-medium mb-6">
                  {cert.description}
                </p>

                {/* Elegant Preview Cover Box (Tanpa Mac Window Header Bar) */}
                <div 
                  onClick={() => setFullscreenCert(cert)}
                  className="relative h-44 w-full rounded-2xl overflow-hidden border border-primary/15 bg-gradient-to-br from-white via-accent/30 to-accent/10 shadow-inner group/cover cursor-pointer mb-6 flex items-center justify-center p-2 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                  title="Klik untuk memperbesar sertifikat"
                >
                  {cert.type === 'image' ? (
                    <img 
                      src={cert.fileUrl} 
                      alt={cert.title} 
                      className="w-full h-full object-contain group-hover/cover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-white/90 p-4 border border-primary/10 flex flex-col justify-between items-center text-center group-hover/cover:bg-white transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mt-2 group-hover/cover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="my-auto">
                        <span className="text-xs font-bold text-dark block">{cert.badge} Document</span>
                        <span className="text-[11px] font-semibold text-primary/70">{cert.issuer}</span>
                      </div>
                      <div className="w-full py-1 px-3 rounded-lg bg-primary/5 text-[11px] font-bold text-primary flex items-center justify-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Click to Preview PDF</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-dark/40 backdrop-blur-[2px] opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="px-4 py-2 rounded-xl bg-white text-dark font-extrabold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/cover:translate-y-0 transition-transform">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview Certificate
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <button
                  onClick={() => setFullscreenCert(cert)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-primary text-white font-bold text-xs hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 flex items-center justify-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Preview</span>
                </button>
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-dark text-white font-bold text-xs hover:bg-dark/80 transition-colors shadow-md flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open File</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Lightbox Preview Modal (Tanpa Mac Window Header Bar) */}
        {fullscreenCert && (
          <div className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-5xl h-[88vh] flex flex-col relative shadow-2xl overflow-hidden border border-primary/20">
              
              {/* Modal Clean Header */}
              <div className="px-6 py-4 bg-light/80 backdrop-blur-sm border-b border-primary/10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark">{fullscreenCert.title}</h3>
                  <p className="text-xs font-semibold text-primary">{fullscreenCert.subtitle} • {fullscreenCert.issuer}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={fullscreenCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-md flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download / Open</span>
                  </a>
                  <button 
                    onClick={() => setFullscreenCert(null)}
                    className="w-9 h-9 rounded-full bg-dark/10 text-dark hover:bg-dark/20 flex items-center justify-center font-bold text-base transition-colors"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Viewer Content */}
              <div className="flex-1 w-full bg-slate-100 flex items-center justify-center overflow-hidden relative">
                {fullscreenCert.type === 'image' ? (
                  <img 
                    src={fullscreenCert.fileUrl} 
                    alt={fullscreenCert.title} 
                    className="max-w-full max-h-full object-contain p-4 shadow-lg"
                  />
                ) : (
                  <iframe 
                    src={`${fullscreenCert.fileUrl}#toolbar=1`}
                    title={fullscreenCert.title}
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
