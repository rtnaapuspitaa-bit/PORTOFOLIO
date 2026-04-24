const Footer = () => {
  return (
    <footer className="bg-black/40 py-8 border-t border-white/10 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Ratna Puspita Sari</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          Berkomitmen untuk terus mengembangkan kemampuan di bidang teknologi, khususnya pengembangan sistem informasi dan desain aplikasi.
        </p>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ratna Puspita Sari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
