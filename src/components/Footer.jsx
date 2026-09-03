const Footer = () => {
  return (
    <footer className="bg-primary/5 py-8 border-t border-primary/10 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-display font-bold text-dark mb-4">Ratna Puspita Sari</h2>
        <p className="text-dark/60 max-w-lg mx-auto mb-6 font-medium leading-relaxed">
          Committed to continuously advancing skills in technology, specializing in information systems development and modern application design.
        </p>
        <div className="text-sm text-dark/40 font-medium">
          &copy; {new Date().getFullYear()} Ratna Puspita Sari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
