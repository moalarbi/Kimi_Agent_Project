import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Digital Marketing & Growth Lead',
    company: 'مجموعة إمدادات العطاء',
    location: 'الرياض، المملكة العربية السعودية',
    period: 'يناير 2024 – حتى الآن',
    current: true,
    responsibilities: [
      'قيادة قسم التسويق الرقمي والإبداعي لصناعة خطط نمو شاملة وتطوير الأعمال',
      'الإشراف على إطلاق الحملات لتطبيقات الجوال (Golden Ultra, BATAL)',
      'إدارة ميزانيات الإعلانات الضخمة عبر Meta, TikTok, Google, Snapchat',
      'بناء أنظمة داخلية لربط Creative Performance مع KPIs لتحسين ROI',
      'إدارة وتوجيه فرق متعددة التخصصات (محتوى، تصميم، موشن، إعلانات)'
    ]
  },
  {
    title: 'E-commerce & Growth Consultant',
    company: 'مستقل (استشارات التجارة الإلكترونية)',
    location: 'المملكة العربية السعودية',
    period: '2016 – 2023',
    responsibilities: [
      'تأسيس وإدارة متاجر إلكترونية احترافية على منصات سلة (Salla) وزد (Zid)',
      'تقديم استشارات وإدارة مشاريع تسويق رقمي لأكثر من 60 علامة تجارية',
      'تطوير استراتيجيات عروض وFunnels مخصصة للمتاجر الإلكترونية لرفع معدل التحويل',
      'تحسين تجربة المستخدم (UX) في المتاجر لزيادة متوسط قيمة الطلب (AOV)',
      'بناء استراتيجيات علامة تجارية وهوية تسويقية متكاملة'
    ]
  }
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={ref}
      className={`bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 transition-all duration-700 hover:border-gray-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-4 h-4 text-black" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-black mb-0.5">{experience.title}</h3>
            <p className="text-gray-500 text-sm">{experience.company}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
            <Calendar className="w-3 h-3" />
            <span>{experience.period}</span>
            {experience.current && (
              <span className="px-1.5 py-0.5 bg-green-100 text-green-600 rounded-full text-xs mr-1">
                حالياً
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
            <MapPin className="w-3 h-3" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2">
        {experience.responsibilities.map((resp, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600 text-sm leading-relaxed">{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
            مسيرتي المهنية
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            الخبرات المهنية
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            رحلة عمل تمتد لأكثر من 12 عاماً في مجال التجارة الإلكترونية، تطوير الأعمال، والتسويق الرقمي
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
