import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteData } from '../../data/content';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">{siteData.organizationName}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {siteData.description}
            </p>
            <div className="flex space-x-4">
              <a href={siteData.social.facebook} className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href={siteData.social.twitter} className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </a>
              <a href={siteData.social.instagram} className="text-gray-300 hover:text-pink-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-pink-500 rounded"></div>
              </a>
              <a href={siteData.social.linkedin} className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-blue-700 rounded"></div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteData.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteData.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteData.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteData.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {siteData.navigation.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 {siteData.organizationName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};