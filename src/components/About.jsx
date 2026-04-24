const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="glass-dark p-8 md:p-12 rounded-3xl space-y-6 text-gray-300 leading-relaxed shadow-xl">
            <p>
              Saya adalah mahasiswa Teknik Informatika semester 4 dengan minat pada pengembangan perangkat lunak dan desain UI/UX. Saya aktif mengembangkan keterampilan melalui berbagai proyek serta memperdalam pemahaman tentang sistem.
            </p>
            <p>
              Saya juga tertarik pada desain antarmuka dan menggunakan Figma untuk membuat tampilan aplikasi yang intuitif dan mudah digunakan. Bagi saya, desain tidak hanya soal visual, tetapi juga kenyamanan pengguna.
            </p>
            <p>
              Saya pribadi yang disiplin, bertanggung jawab, dan terus berkomitmen untuk berkembang di bidang teknologi agar dapat memberikan kontribusi yang bermanfaat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
