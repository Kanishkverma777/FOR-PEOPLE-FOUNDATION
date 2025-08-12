import React, { memo, useMemo } from 'react';
import { Hero } from '../components/ui/Hero';
// import { AboutSection } from '../components/ui/AboutSection';
import { ImpactStats } from '../components/ui/ImpactStats';
import { Users, Target, Heart, Globe } from 'lucide-react';
import { siteData } from '../data/content';

// Static data moved outside component to prevent recreation on re-renders
const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: '15+ years in education and nonprofit leadership'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Program Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Former teacher with expertise in curriculum development'
  },
  {
    id: 3,
    name: 'Dr. Amara Okafor',
    role: 'Research & Evaluation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'PhD in Educational Psychology and impact assessment'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Community Outreach',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Community organizer with local partnership expertise'
  }
];

const MILESTONES = [
  { id: 1, year: '2015', event: 'EduHope Foundation was established' },
  { id: 2, year: '2017', event: 'First community library opened' },
  { id: 3, year: '2019', event: 'Reached 5,000 students milestone' },
  { id: 4, year: '2021', event: 'Launched digital literacy program' },
  { id: 5, year: '2023', event: 'Expanded to 45 communities' },
  { id: 6, year: '2024', event: 'Celebrating 15,000 students reached' }
];

const FEATURES = [
  {
    id: 1,
    icon: Target,
    title: 'Proven Impact',
    description: 'Measurable results with transparent reporting and community feedback.',
    colorClasses: { bg: 'bg-blue-100', text: 'text-blue-600' }
  },
  {
    id: 2,
    icon: Users,
    title: 'Local Partnerships',
    description: 'Working hand-in-hand with communities to create sustainable change.',
    colorClasses: { bg: 'bg-green-100', text: 'text-green-600' }
  },
  {
    id: 3,
    icon: Heart,
    title: 'Holistic Approach',
    description: 'Addressing education alongside health, nutrition, and family support.',
    colorClasses: { bg: 'bg-orange-100', text: 'text-orange-600' }
  },
  {
    id: 4,
    icon: Globe,
    title: 'Global Reach',
    description: 'International expertise with deep local knowledge and cultural sensitivity.',
    colorClasses: { bg: 'bg-purple-100', text: 'text-purple-600' }
  }
];

// Reusable component for team member cards
const TeamMemberCard = memo(({ member }) => (
  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={member.image}
      alt={`${member.name}, ${member.role}`}
      className="w-full h-48 object-cover"
      loading="lazy"
      width="300"
      height="192"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm">{member.bio}</p>
    </div>
  </article>
));

TeamMemberCard.displayName = 'TeamMemberCard';

// Reusable component for milestone items
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

// Reusable component for feature cards
const FeatureCard = memo(({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="text-center p-6">
      <div className={`w-16 h-16 ${feature.colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`h-8 w-8 ${feature.colorClasses.text}`} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export const About = memo(() => {
  // Memoize hero props to prevent unnecessary re-renders
  const heroProps = useMemo(() => ({
    title: "About EduHope Foundation",
    subtitle: "Learn about our mission, values, and the passionate team working to transform education worldwide.",
    backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    height: "large"
  }), []);

  // // Memoize about section props
  // const aboutSectionProps = useMemo(() => ({
  //   title: siteData.about.title,
  //   description: siteData.about.description,
  //   mission: siteData.about.mission,
  //   vision: siteData.about.vision,
  //   values: siteData.about.values,
  //   image: siteData.about.image
  // }), []);

  return (
    <div className="min-h-screen">
      <Hero {...heroProps} />

      {/* Team Section */}
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


      {/* Our Story Section */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small initiative to a global movement - discover the journey that brought us here
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

About.displayName = 'About';