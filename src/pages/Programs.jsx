import React from 'react';
import { Hero } from '../components/ui/Hero';
import { ProgramsGrid } from '../components/ui/ProgramsGrid';
import { siteData } from '../data/content';

export const Programs = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Our Programs"
        subtitle="Comprehensive educational initiatives designed to empower communities and create lasting change through quality learning opportunities."
        backgroundImage="/programs_background.jpeg"
        height="large"
      />

      <ProgramsGrid programs={siteData.programs} showAll={true} />

      {/* Program Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Programs Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures sustainable impact and measurable results in every community we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Assessment</h3>
              <p className="text-gray-600">
                We work closely with local leaders to understand unique needs, challenges, and opportunities in each community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Implementation</h3>
              <p className="text-gray-600">
                Our team delivers tailored educational programs with local partnerships, ensuring cultural relevance and sustainability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Evaluation</h3>
              <p className="text-gray-600">
                Continuous assessment ensures program effectiveness and provides data for improvement and scaling successful initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};