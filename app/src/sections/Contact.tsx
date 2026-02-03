import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
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
    href: 'tel:+966537311886'
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
  const [headerVisible, setHeaderVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
          formObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    return () => {
      headerObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
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
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div 
            className={`space-y-2 sm:space-y-3 transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-base sm:text-lg font-bold text-black mb-4">معلومات التواصل</h3>
            
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:bg-gray-100 transition-all duration-300"
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
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-black font-medium text-sm truncate">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="bg-black rounded-xl p-4 sm:p-5 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium text-sm">متاح للعمل</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                أنا حالياً أبحث عن فرص جديدة في مجال التسويق الرقمي والنمو. 
                إذا كنت تبحث عن شخص يمكنه قيادة استراتيجيات النمو لديك، فأنا هنا للمساعدة.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-black mb-4">أرسل رسالة</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-black mb-1">تم الإرسال بنجاح!</h4>
                  <p className="text-gray-500 text-sm">سأتواصل معك في أقرب وقت ممكن</p>
                </div>
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
                  
                  <button 
                    type="submit"
                    className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
