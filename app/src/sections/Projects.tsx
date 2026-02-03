import { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface Project {
  name: string;
  category: string;
  description: string;
  results: string[];
  color: string;
}

const projects: Project[] = [
  {
    name: 'Salla & Zid Stores',
    category: 'التجارة الإلكترونية',
    description: 'تأسيس وإدارة المتاجر الإلكترونية على منصات سلة وزد وتحسين تجربة المستخدم وزيادة المبيعات',
    results: [
      'تجهيز وإطلاق أكثر من 15 متجراً إلكترونياً',
      'ربط بوابات الدفع وشركات الشحن وتحسين مسارات التحويل',
      'تحسين معدل الارتداد وزيادة متوسط قيمة الطلب'
    ],
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'Business Development',
    category: 'تطوير الأعمال',
    description: 'بناء شراكات استراتيجية وتطوير نماذج العمل لزيادة الحصة السوقية وتحقيق النمو المستدام',
    results: [
      'تطوير استراتيجيات دخول السوق للعلامات التجارية الجديدة',
      'تحسين العمليات الداخلية لرفع كفاءة الأداء التسويقي',
      'بناء نماذج عمل مبتكرة لزيادة مصادر الدخل'
    ],
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Golden Ultra',
    category: 'تطبيق خدمة غسيل سيارات متنقل',
    description: 'تسويق تطبيق جديد لخدمة غسيل السيارات المتنقلة وزيادة قاعدة المستخدمين',
    results: [
      'نمو 70% في المتابعين خلال 6 أشهر',
      '+50 ألف مشاهدة للفيديوهات الترويجية'
    ],
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    name: 'BATAL',
    category: 'تطبيق صيانة ونظافة',
    description: 'تسويق تطبيق خدمات الصيانة والنظافة لجذب شرائح مختلفة من العملاء',
    results: [
      'زيادة عدد الحجوزات بشكل مستمر',
      'تحسين UI/UX بناءً على بيانات التحليل'
    ],
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'EMDADAT ALATTA',
    category: 'نمو B2B',
    description: 'بناء محتوى احترافي لخدمات إدارة المرافق والتشغيل في قطاع B2B',
    results: [
      'زيادة عدد الاستفسارات',
      'تحسين معدلات التحويل'
    ],
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'Shift X',
    category: 'خدمات التجارة الإلكترونية',
    description: 'تسويق خدمات متكاملة للتجارة الإلكترونية وجذب رواد الأعمال',
    results: [
      'زيادة عدد العملاء الجدد',
      'تحسين معدلات التحويل'
    ],
    color: 'bg-purple-100 text-purple-700'
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
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
      className={`group bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Category Badge */}
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${project.color}`}>
        {project.category}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Results */}
      <div className="pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1 text-green-600 text-xs font-medium mb-1">
          <TrendingUp className="w-3 h-3" />
          النتائج
        </div>
        <ul className="space-y-0.5">
          {project.results.map((result, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="w-1 h-1 bg-gray-300 rounded-full mt-1.5 flex-shrink-0" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
            أعمالي
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            المشاريع والخبرات البارزة
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            نبذة عن بعض المشاريع والخبرات الاستراتيجية في التجارة الإلكترونية وتطوير الأعمال
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
