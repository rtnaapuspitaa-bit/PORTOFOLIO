const Footer = () => {
  return (
    <footer className="bg-primary/5 py-8 border-t border-primary/10 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-display font-bold text-dark mb-4">Ratna Puspita Sari</h2>
        <p className="text-dark/60 max-w-md mx-auto mb-6 font-medium">
          Berkomitmen untuk terus mengembangkan kemampuan di bidang teknologi, khususnya pengembangan sistem informasi dan desain aplikasi.
        </p>
        <div className="text-sm text-dark/40 font-medium">
          &copy; {new Date().getFullYear()} Ratna Puspita Sari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
