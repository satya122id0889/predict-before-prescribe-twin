
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="medical-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-medical-teal" />
              <span className="text-xl font-semibold text-gray-900">IDP-2</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Advanced health visualization and body mapping software for medical professionals
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-medical-teal transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-medical-teal transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/demo-cases" className="text-gray-600 hover:text-medical-teal transition-colors">
                  Visualization Cases
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-medical-teal transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-medical-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2025 IDP-2 Project. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for medical innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

