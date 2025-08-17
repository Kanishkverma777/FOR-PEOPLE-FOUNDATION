import React, { useEffect, useRef, useState } from 'react';

export const ImpactStats = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better triggering
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      
      stats.forEach((stat, index) => {
        const duration = 2500;
        const startTime = Date.now();
        
        const animateValue = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const newValue = Math.floor(stat.value * easeOutCubic);
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = newValue;
            return newValues;
          });

          if (progress < 1) {
            requestAnimationFrame(animateValue);
          }
        };
        
        requestAnimationFrame(animateValue);
      });
    }
  }, [isVisible, stats]);

  return (
    <section ref={sectionRef} className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100">
            See the difference we're making together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {animatedValues[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};