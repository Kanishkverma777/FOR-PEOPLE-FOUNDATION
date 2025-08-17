import React, { memo, useMemo } from 'react';
import { Hero } from '../components/ui/Hero';

// Static data moved outside component to prevent recreation on re-renders
const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'ISHRAT RIZVI',
    role: 'Acting President',
    image: '/ishrat.jpeg',
    bio: '10+ years in education and non-profit leadership',
    contact:'+91 9899471992'
  },
  {
    id: 2,
    name: 'KHALID ANSARI',
    role: 'Vice President',
    image: '/khalid.jpeg',
    bio: 'A dedicated philanthropist committed to educational equity.',
    contact: '+91 8447918786'
  },
  {
    id: 3,
    name: 'Dr. TANVEER KHAN',
    role: 'National General Secretary',
    image: '/tanveer.jpeg',
    bio: 'Manages public relations and external communications.',
    contact: '+91 8743949436'
  },
  {
    id: 4,
    name: 'SALIM MIRZA',
    role: 'Treasurer',
    image: '/salim.jpeg',
    bio: 'A dedicated philanthropist and treasurer.',
    contact: '+91 9667524656'
  }
];

const MILESTONES = [
  { id: 1, year: '2019', event: 'FOR PEOPLE FOUNDATION was established' },
  { id: 2, year: '2020', event: 'First community classroom opened' },
  { id: 3, year: '2021', event: 'Spread government awareness on education' },
  { id: 4, year: '2022', event: 'Launched digital literacy program' },
  { id: 5, year: '2023', event: 'Expanded to 25 communities' },
  { id: 6, year: '2024', event: 'Celebrating 2,000+ students reached' }
];

// team member cards
const TeamMemberCard = memo(({ member }) => (
  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={member.image}
      alt={`${member.name}, ${member.role}`}
      className="w-full h-64 object-cover"
      loading="lazy"
      width="300"
      height="256"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm">{member.bio}</p>
      <p className="text-gray-600 text-sm py-2">{member.contact}</p>
    </div>
  </article>
));

TeamMemberCard.displayName = 'TeamMemberCard';

// milestone items
const MilestoneItem = memo(({ milestone, isLast }) => (
  <div className="relative flex items-center mb-8">
    <div className="flex-shrink-0 w-24 text-right">
      <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
    </div>
    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mx-6" aria-hidden="true"></div>
    <div className="flex-1">
      <p className="text-lg text-gray-700">{milestone.event}</p>
    </div>
    {!isLast && (
      <div className="absolute left-28 top-8 w-0.5 h-8 bg-blue-200" aria-hidden="true"></div>
    )}
  </div>
));

MilestoneItem.displayName = 'MilestoneItem';

export const About = memo(() => {
  // about wala part
  const heroProps = useMemo(() => ({
    title: "About 'For People Foundation'",
    subtitle: "We're dedicated to making quality learning accessible to underprivileged children. Our programs empower students and strengthen grassroots education systems.",
    backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    height: "large"
  }), []);


  return (
    <div className="min-h-screen">
      <Hero {...heroProps} />

      {/* Team wala part */}
      <section className="py-16 bg-gray-50" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Passionate professionals dedicated to making education accessible for all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>


      {/* story wala part */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small initiative to a national movement, discover the journey that brought us here.
            </p>
          </div>

          <div className="max-w-4xl mx-auto" role="list" aria-label="Company milestones">
            {MILESTONES.map((milestone, index) => (
              <MilestoneItem 
                key={milestone.id} 
                milestone={milestone} 
                isLast={index === MILESTONES.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>

      

      
    </div>
  );
});