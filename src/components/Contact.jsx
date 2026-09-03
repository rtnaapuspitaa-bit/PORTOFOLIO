import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      // Mengirimkan pesan langsung ke rtnaapuspitaa@gmail.com via FormSubmit API
      const response = await fetch('https://formsubmit.co/ajax/rtnaapuspitaa@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Pesan Baru dari ${formData.name} (Portofolio)`
        })
      });

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: 'Terima kasih! Pesan Anda telah berhasil terkirim ke email rtnaapuspitaa@gmail.com.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gagal mengirim pesan');
      }
    } catch {
      // Fallback jika API terhalang CORS/offline: Buka Gmail Compose langsung
      const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rtnaapuspitaa@gmail.com&su=${encodeURIComponent(`Pesan dari ${formData.name}`)}&body=${encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      setStatusMessage({
        type: 'info',
        text: 'Membuka Gmail untuk mengirimkan pesan ke rtnaapuspitaa@gmail.com...'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-light via-accent/15 to-light">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header Text */}
        <div className="text-center mb-10 contact-reveal">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-3">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-dark/75 text-base md:text-lg font-medium">
            Mari terhubung dengan saya.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Form Container (Seperti Gambar 1) */}
        <div className="bg-[#18181a] p-7 md:p-8 rounded-xl shadow-2xl border border-white/15 text-white max-w-[558px] mx-auto contact-form-reveal">
          {statusMessage && (
            <div className={`p-4 mb-6 rounded-2xl text-xs md:text-sm font-semibold border ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                : 'bg-primary/20 text-indigo-200 border-primary/30'
            }`}>
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Lengkap */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-200 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan Nama..."
                className="w-full px-3 py-3 rounded-lg bg-[#0c0c0d] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all font-medium text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan Email..."
                className="w-full px-3 py-3 rounded-lg bg-[#0c0c0d] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all font-medium text-sm"
              />
            </div>

            {/* Pesan */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-200 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Pesan..."
                className="w-full px-3 py-3 rounded-lg bg-[#0c0c0d] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all font-medium text-sm resize-none"
              ></textarea>
            </div>

            {/* Tombol Kirim Pesan */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-extrabold text-base hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 active:scale-[0.99] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Mengirim...</span>
                </>
              ) : (
                <span>Kirim Pesan</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
