import React from 'react';
import { Users, MapPin, ArrowRight } from 'lucide-react';

export const ProgramsGrid = ({ programs, showAll = false }) => {
  const displayPrograms = showAll ? programs : programs.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference through our comprehensive educational initiatives
            designed to empower communities and transform lives.
          </p>
        </div>

        <div className="space-y-12">
          {displayPrograms.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Beneficiaries</p>
                      <p className="font-semibold text-gray-900">{program.beneficiaries}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Locations</p>
                      <p className="font-semibold text-gray-900">{program.locations}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};