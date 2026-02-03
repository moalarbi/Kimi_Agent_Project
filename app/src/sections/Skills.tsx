import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Smartphone, 
  FileText, 
  BarChart3, 
  Users, 
  Bot,
  Megaphone,
  Funnel
} from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const skillsData: Skill[] = [
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: 'Brand Growth Strategy',
    description: 'استراتيجيات نمو العلامات التجارية',
    skills: ['Awareness', 'Consideration', 'Conversion', 'Retention']
  },
  {
    icon: <Megaphone className="w-4 h-4" />,
    title: 'Performance Marketing',
    description: 'تسويق الأداء والإعلانات المدفوعة',
    skills: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Snapchat Ads']
  },
  {
    icon: <Smartphone className="w-4 h-4" />,
    title: 'App Marketing',
    description: 'تسويق تطبيقات الجوال',
    skills: ['User Acquisition', 'Retention', 'ASO', 'App Installs']
  },
  {
    icon: <Funnel className="w-4 h-4" />,
    title: 'Funnel Optimization',
    description: 'تحسين مسارات التحويل',
    skills: ['Offer Strategy', 'Landing Pages', 'Conversion Rate', 'A/B Testing']
  },
  {
    icon: <FileText className="w-4 h-4" />,
    title: 'Content Systems',
    description: 'أنظمة المحتوى والإنتاج',
    skills: ['Content Calendar', 'Creative Pipeline', 'UGC', 'Short-form Video']
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: 'Analytics & Reporting',
    description: 'التحليلات والتقارير',
    skills: ['Dashboards', 'KPIs', 'Insights', 'Data Analysis']
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: 'Team Management',
    description: 'إدارة الفرق والموردين',
    skills: ['Design Teams', 'Content Teams', 'Media Buying', 'Production']
  },
  {
    icon: <Bot className="w-4 h-4" />,
    title: 'AI Tools & Automation',
    description: 'أدوات الذكاء الاصطناعي',
    skills: ['ChatGPT', 'Midjourney', 'n8n/Zapier', 'Prompt Engineering']
  }
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
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
      className={`bg-white border border-gray-100 rounded-xl p-4 sm:p-5 hover:border-gray-200 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Icon */}
      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
        <div className="text-black">
          {skill.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-bold text-black mb-1">{skill.title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm mb-3">{skill.description}</p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-1.5">
        {skill.skills.map((s, idx) => (
          <span 
            key={idx}
            className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
            ما أتميز به
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            المهارات الأساسية
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            مجموعة متكاملة من المهارات التقنية والاستراتيجية في مجال التسويق الرقمي
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
