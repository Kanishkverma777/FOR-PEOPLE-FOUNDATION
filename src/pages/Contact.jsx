import React from 'react';
import { Hero } from '../components/ui/Hero';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Calendar } from 'lucide-react';
import { siteData } from '../data/content';

export const Contact = () => {
  const contactReasons = [
    {
      icon: MessageCircle,
      title: 'General Inquiry',
      description: 'Questions about our programs or organization'
    },
    {
      icon: Users,
      title: 'Volunteer Opportunities',
      description: 'Join our team of dedicated volunteers'
    },
    {
      icon: Calendar,
      title: 'Partnership',
      description: 'Collaborate with us on educational initiatives'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Contact us about our programs, volunteer opportunities, or partnerships."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        height="large"
      />

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="text-center space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  Whether you're interested in our programs, want to volunteer, or explore partnerships, 
                  we're here to help. Reach out to us using any of the methods below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{siteData.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">{siteData.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{siteData.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">{siteData.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Reasons */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">How Can We Help?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {contactReasons.map((reason, index) => {
                    const IconComponent = reason.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{reason.title}</h4>
                          <p className="text-sm text-gray-600">{reason.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our programs and organization
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I volunteer with For People Foundation?
              </h3>
              <p className="text-gray-600">
                We welcome volunteers with various skills and backgrounds. Contact us to learn about current opportunities 
                in teaching, program coordination, fundraising, and administrative support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Where do donations go exactly?
              </h3>
              <p className="text-gray-600">
                90% of donations go directly to our educational programs. We provide detailed impact reports 
                showing exactly how your contribution is making a difference in communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can my organization partner with 'For People Foundation'?
              </h3>
              <p className="text-gray-600">
                Yes! We actively seek partnerships with schools, businesses, and other nonprofits. 
                Contact us to discuss how we can collaborate to expand educational opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you measure program success?
              </h3>
              <p className="text-gray-600">
                We use various metrics including literacy rates, school enrollment, teacher training completion, 
                and long-term community feedback to evaluate our impact and improve our programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};