import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  status?: string;
  icon: React.ReactNode;
}

interface Certificate {
  name: string;
  issuer: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'ماجستير إدارة الأعمال (MBA)',
    institution: 'Midocean University',
    status: 'قيد الدراسة',
    icon: <GraduationCap className="w-4 h-4" />
  },
  {
    degree: 'بكالوريوس إعلام',
    institution: 'جامعة طنطا، مصر',
    period: '2016 – 2020',
    icon: <BookOpen className="w-4 h-4" />
  }
];

const certificates: Certificate[] = [
  { name: 'Meta Certified Digital Marketing Associate', issuer: 'Meta' },
  { name: 'Google Ads Search & Display Certification', issuer: 'Google' },
  { name: 'Content Strategy & SEO Specialization', issuer: 'Coursera' },
  { name: 'Advanced Social Media Strategy', issuer: 'LinkedIn Learning' }
];

export default function Education() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          cardsObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      headerObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
            التحصيل العلمي
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            التعليم والشهادات
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            مؤهلاتي الأكاديمية والشهادات الاحترافية في مجال التسويق الرقمي
          </p>
        </div>

        {/* Education Cards */}
        <div ref={cardsRef} className="space-y-3 mb-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex items-start gap-3 transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="text-black">{edu.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-black mb-0.5">{edu.degree}</h3>
                <p className="text-gray-500 text-sm">{edu.institution}</p>
                {edu.period && (
                  <span className="inline-block mt-1.5 text-xs text-gray-400">{edu.period}</span>
                )}
                {edu.status && (
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    {edu.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div 
          className={`transition-all duration-700 delay-300 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-base sm:text-lg font-bold text-black mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            الشهادات الاحترافية
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:border-gray-200 transition-all duration-300"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </div>
                <div className="min-w-0">
                  <p className="text-black text-xs sm:text-sm font-medium truncate">{cert.name}</p>
                  <p className="text-gray-400 text-xs">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
