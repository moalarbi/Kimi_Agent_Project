import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  name: string;
  category: string;
  description: string;
  results: string[];
  color: string;
}

const projects: Project[] = [
  {
    name: 'AI Support Automation',
    category: 'أتمتة الدعم الفني',
    description: 'بناء أنظمة رد آلي ذكية وربطها بأنظمة CRM لأتمتة عمليات الدعم الفني وضمان سرعة الاستجابة',
    results: [
      'تقليل وقت الاستجابة بنسبة 90%',
      'ربط تلقائي لبيانات العملاء مع نظام CRM',
      'تحسين رضا العملاء عبر الردود الفورية'
    ],
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    name: 'Shift Chat Integration',
    category: 'أنظمة الدردشة الذكية',
    description: 'تطوير ودمج منصات Shift Chat لتحسين تجربة التواصل المباشر مع العملاء وزيادة معدلات التحويل',
    results: [
      'إدارة محادثات متعددة في وقت واحد',
      'تحويل الزوار إلى عملاء محتملين تلقائياً',
      'تحليل سلوك المستخدمين أثناء الدردشة'
    ],
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Voice AI Automation',
    category: 'الأتمتة الصوتية',
    description: 'أتمتة خدمة العملاء الصوتية باستخدام تقنيات الذكاء الاصطناعي لإدارة المكالمات والردود الآلية الاحترافية',
    results: [
      'نظام رد صوتي تفاعلي (IVR) ذكي',
      'تحليل المشاعر في المكالمات الصوتية',
      'توفير تكاليف مراكز الاتصال بنسبة 60%'
    ],
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'n8n Workflow Automation',
    category: 'أتمتة العمليات',
    description: 'بناء سير عمل (Workflows) متقدمة باستخدام n8n لربط الأنظمة وأتمتة العمليات التسويقية والإدارية',
    results: [
      'أتمتة جمع وتحليل البيانات من منصات الإعلانات',
      'ربط المتاجر الإلكترونية بأنظمة CRM',
      'توفير 80% من الوقت في المهام المتكررة'
    ],
    color: 'bg-purple-100 text-purple-700'
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
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-all duration-500 hover:shadow-md"
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
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white overflow-hidden">
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
            أعمالي
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            المشاريع والخبرات البارزة
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            نبذة عن بعض المشاريع والخبرات الاستراتيجية في الأتمتة، الدعم الفني، وتطوير الأعمال
          </p>
        </motion.div>

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
