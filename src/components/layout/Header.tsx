
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Activity, Menu, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="medical-container py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-medical-teal" />
          <Link to="/" className="text-xl font-semibold text-gray-900">MediTwin</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-medical-teal transition-colors">
            About
          </Link>
          <Link to="/demo-cases" className="text-gray-600 hover:text-medical-teal transition-colors">
            Demo Cases
          </Link>
          <Link to="/research" className="text-gray-600 hover:text-medical-teal transition-colors">
            Research
          </Link>
          <Button variant="ghost" className="text-gray-600 hover:text-medical-teal" asChild>
            <Link to="/login">
              <User className="h-4 w-4 mr-2" />
              Log In
            </Link>
          </Button>
          <Button className="bg-medical-teal hover:bg-medical-teal/90">Get Started</Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
