import ciscoCert from '../assets/cisco-cert.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: "IT Essentials",
      issuer: "Cisco Networking Academy",
      date: "23 Jan 2025",
      institution: "Politeknik Negeri Cilacap",
      image: ciscoCert,
      description: "Sertifikasi dalam dasar-dasar perangkat keras komputer, perangkat lunak, serta konsep jaringan dan keamanan IT."
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-dark">
          Sertifikasi <span className="text-gradient">& Penghargaan</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass p-6 md:p-8 rounded-[2.5rem] border border-primary/10 hover:border-primary/20 transition-all duration-300 group shadow-2xl shadow-primary/5 flex flex-col items-center"
            >
              <div className="w-full mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-bold text-lg">{cert.issuer} • {cert.institution}</p>
                <div className="inline-block mt-4 text-primary font-bold text-sm bg-primary/10 px-6 py-2 rounded-full">
                  Issued: {cert.date}
                </div>
              </div>

              {/* Large Image Container */}
              <div className="w-full bg-white/50 rounded-2xl overflow-hidden shadow-inner border border-primary/5 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto object-contain max-h-[600px] mx-auto p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
