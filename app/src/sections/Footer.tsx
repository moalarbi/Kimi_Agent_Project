import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-black text-sm font-bold">MA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">محمد العربي</h3>
            </div>
            <p className="text-gray-500 text-sm">Digital Marketing Expert</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">الرئيسية</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">الخبرات</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">المهارات</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">المشاريع</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">التواصل</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://linkedin.com/in/moal3rbi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:dr.al3rbi@gmail.com"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="tel:+966537311886"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-6 sm:my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
            © 2025 محمد العربي. جميع الحقوق محفوظة
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">
            صنع بـ ❤️ في الرياض
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-black border border-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-50 shadow-lg"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
}
