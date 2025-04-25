import React, { useState, useEffect } from 'react';
import { Sun, Home, Battery, Zap } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  target: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ 
  icon, 
  value, 
  target, 
  label, 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * target));
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);
  
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-primary-100 text-primary-600">
          {icon}
        </div>
      </div>
      <div className="text-4xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const stats = [
  {
    icon: <Sun className="w-8 h-8" />,
    value: 0,
    target: 500,
    label: "Installations Completed",
    suffix: "+"
  },
  {
    icon: <Home className="w-8 h-8" />,
    value: 0,
    target: 1500,
    label: "Happy Clients",
    suffix: "+"
  },
  {
    icon: <Battery className="w-8 h-8" />,
    value: 0,
    target: 95,
    label: "Customer Satisfaction",
    suffix: "%"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: 0,
    target: 12000,
    label: "MWh Generated Annually",
    suffix: "+"
  }
];

const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isVisible && stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              target={stat.target}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;