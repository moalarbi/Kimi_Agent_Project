import { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white pt-16 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-4"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">متاح للعمل</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4"
            >
              محمد العربي
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-500 mb-4"
            >
              Digital Marketing Manager
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-md"
            >
              قائد تسويق رقمي بخبرة 12+ عام في بناء استراتيجيات نمو العلامات التجارية 
              وتحقيق نتائج ملموسة في السوق السعودي
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                تواصل معي
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#experience"
                className="inline-flex items-center gap-2 border border-gray-200 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                شاهد خبراتي
              </a>
            </motion.div>

            {/* Stats - Mobile Optimized */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-sm"
            >
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-black">60+</div>
                <div className="text-xs text-gray-400">علامة تجارية</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-black">12</div>
                <div className="text-xs text-gray-400">سنة خبرة</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-black">70%</div>
                <div className="text-xs text-gray-400">نمو متوسط</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Main Card */}
              <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                {/* Avatar */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <span className="text-white text-2xl sm:text-3xl font-bold">MA</span>
                </motion.div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-black mb-1">محمد العربي</h3>
                  <p className="text-gray-500 text-sm">Digital Marketing Expert</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <a 
                    href="mailto:dr.al3rbi@gmail.com"
                    className="flex items-center gap-3 p-2.5 bg-white rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm text-gray-600">dr.al3rbi@gmail.com</span>
                  </a>
                  <a 
                    href="https://wa.me/966537311886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-white rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm text-gray-600" dir="ltr">+966 53 731 1886</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/moal3rbi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-white rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm text-gray-600">linkedin.com/in/moal3rbi</span>
                  </a>
                </div>

                {/* Location */}
                <div className="text-center text-sm text-gray-400">
                  📍 الرياض، المملكة العربية السعودية
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg"
              >
                متاح للعمل
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-black py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white text-sm font-medium text-center sm:text-right">
              استراتيجيات نمو تعتمد على البيانات
            </p>
            <div className="flex items-center gap-3">
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
                href="https://wa.me/966537311886"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
