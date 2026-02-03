import { 
  TrendingUp, 
  Smartphone, 
  FileText, 
  BarChart3, 
  Bot,
  Megaphone,
  ShoppingBag,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const skillsData: Skill[] = [
  {
    icon: <ShoppingBag className="w-4 h-4" />,
    title: 'E-commerce Management',
    description: 'إدارة وتطوير المتاجر الإلكترونية',
    skills: ['Salla (سلة)', 'Zid (زد)', 'Product Catalog', 'Checkout Optimization']
  },
  {
    icon: <Megaphone className="w-4 h-4" />,
    title: 'Digital Marketing',
    description: 'التسويق الإلكتروني المتكامل',
    skills: ['Meta Ads', 'TikTok Ads', 'Snapchat Ads', 'Google Search/Display']
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    title: 'Business Development',
    description: 'تطوير الأعمال والنمو',
    skills: ['Market Entry', 'Strategic Partnerships', 'Revenue Growth', 'Process Improvement']
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: 'Growth Strategy',
    description: 'استراتيجيات النمو الرقمي',
    skills: ['Funnel Strategy', 'Retention', 'Customer Acquisition', 'A/B Testing']
  },
  {
    icon: <Smartphone className="w-4 h-4" />,
    title: 'App Marketing',
    description: 'تسويق تطبيقات الجوال',
    skills: ['User Acquisition', 'ASO', 'App Installs', 'Engagement']
  },
  {
    icon: <FileText className="w-4 h-4" />,
    title: 'Content Systems',
    description: 'أنظمة المحتوى والإنتاج',
    skills: ['Content Calendar', 'UGC', 'Short-form Video', 'Copywriting']
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: 'Analytics & Reporting',
    description: 'التحليلات والتقارير',
    skills: ['Dashboards', 'KPIs', 'Data Insights', 'Performance Audit']
  },
  {
    icon: <Bot className="w-4 h-4" />,
    title: 'AI & Automation',
    description: 'الذكاء الاصطناعي والأتمتة',
    skills: ['ChatGPT/Prompting', 'Midjourney', 'Zapier/n8n', 'Workflow Automation']
  }
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 hover:border-gray-200 hover:shadow-sm transition-all"
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
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 overflow-hidden">
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
            ما أتميز به
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            المهارات الأساسية
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            مجموعة متكاملة من المهارات الاستراتيجية في التجارة الإلكترونية، تطوير الأعمال، والتسويق الرقمي
          </p>
        </motion.div>

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
