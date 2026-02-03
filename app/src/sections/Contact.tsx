import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isPhone?: boolean;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'البريد الإلكتروني',
    value: 'dr.al3rbi@gmail.com',
    href: 'mailto:dr.al3rbi@gmail.com'
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: 'رقم الهاتف',
    value: '+966 53 731 1886',
    href: 'https://wa.me/966537311886',
    isPhone: true
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moal3rbi',
    href: 'https://linkedin.com/in/moal3rbi'
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: 'الموقع',
    value: 'الرياض، المملكة العربية السعودية'
  }
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
            دعنا نتواصل
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            تواصل معي
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            هل لديك مشروع أو فرصة عمل؟ أنا متحمس للسماع منك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-2 sm:space-y-3"
          >
            <h3 className="text-base sm:text-lg font-bold text-black mb-4">معلومات التواصل</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <div className="text-black">{info.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-black hover:text-gray-600 transition-colors font-medium text-sm truncate block"
                      dir="ltr"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-black font-medium text-sm truncate">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black rounded-xl p-4 sm:p-5 mt-4 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium text-sm">متاح للعمل</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                أنا حالياً أبحث عن فرص جديدة في مجال التسويق الرقمي والنمو. 
                إذا كنت تبحث عن شخص يمكنه قيادة استراتيجيات النمو لديك، فأنا هنا للمساعدة.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-black mb-4">أرسل رسالة</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-black mb-1">تم الإرسال بنجاح!</h4>
                  <p className="text-gray-500 text-sm">سأتواصل معك في أقرب وقت ممكن</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-600 text-xs sm:text-sm mb-1.5">الاسم</label>
                      <input 
                        type="text"
                        placeholder="اسمك"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-black text-sm placeholder:text-gray-400 focus:border-black focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-xs sm:text-sm mb-1.5">البريد الإلكتروني</label>
                      <input 
                        type="email"
                        placeholder="بريدك الإلكتروني"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-black text-sm placeholder:text-gray-400 focus:border-black focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm mb-1.5">الموضوع</label>
                    <input 
                      type="text"
                      placeholder="موضوع الرسالة"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-black text-sm placeholder:text-gray-400 focus:border-black focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm mb-1.5">الرسالة</label>
                    <textarea 
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-black text-sm placeholder:text-gray-400 focus:border-black focus:outline-none transition-colors min-h-[100px] resize-none"
                      required
                    />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    إرسال الرسالة
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
