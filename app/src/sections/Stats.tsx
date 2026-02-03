import { useEffect, useState } from 'react';
import { TrendingUp, Users, Briefcase, Target } from 'lucide-react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  index: number;
}

function StatItem({ icon, value, label, suffix = '', index }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => {
        const controls = animate(0, numericValue, {
          duration: 2,
          onUpdate: (latest) => setDisplayValue(Math.floor(latest))
        });
        return () => controls.stop();
      }}
      className="text-center"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
        {icon}
      </div>
      <div className="text-2xl sm:text-4xl font-bold text-black mb-1">
        {displayValue}{suffix}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '40', label: 'تحسين كفاءة الحملات %', suffix: '%' },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '70', label: 'نمو المتابعين %', suffix: '%' },
    { icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '60', label: 'علامة تجارية', suffix: '+' },
    { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '12', label: 'سنة خبرة', suffix: '+' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
