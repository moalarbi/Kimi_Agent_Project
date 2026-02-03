import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Briefcase, Target } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

function StatItem({ icon, value, label, suffix = '', delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
      <div className="text-2xl sm:text-4xl font-bold text-black mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm">{label}</div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '40', label: 'تحسين كفاءة الحملات %', suffix: '%', delay: 0 },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '70', label: 'نمو المتابعين %', suffix: '%', delay: 100 },
    { icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '60', label: 'علامة تجارية', suffix: '+', delay: 200 },
    { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 text-black" />, value: '12', label: 'سنة خبرة', suffix: '+', delay: 300 },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
