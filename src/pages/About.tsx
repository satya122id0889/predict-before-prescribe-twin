
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  CheckCircle2, 
  Shield, 
  Database, 
  Brain, 
  Users,
  ArrowRight
} from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-white to-medical-light-blue py-20">
        <div className="medical-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About MediTwin</h1>
            <p className="text-xl text-gray-600">
              Our mission is to revolutionize healthcare by providing powerful yet
              intuitive digital twin technology for medical professionals.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Science Behind Our Digital Twin
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                MediTwin combines advanced physiological models with machine learning algorithms
                trained on extensive medical datasets to create accurate digital representations
                of human physiology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our system can predict how different interventions might affect patient outcomes,
                providing healthcare professionals with valuable insights for treatment planning
                and patient education.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-medical-light-blue rounded-full text-medical-teal">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Evidence-Based Models</h3>
                    <p className="text-gray-600">
                      Built on peer-reviewed medical research and clinical guidelines
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-medical-light-blue rounded-full text-medical-teal">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Continuously Updated</h3>
                    <p className="text-gray-600">
                      Regular updates to incorporate the latest medical findings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-medical-light-blue rounded-full text-medical-teal">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Clinically Validated</h3>
                    <p className="text-gray-600">
                      Tested in real clinical environments for accuracy and reliability
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-medical-soft-gray rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Technologies</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-white rounded-lg shadow-sm text-medical-teal">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Advanced AI Models</h4>
                    <p className="text-gray-600">
                      Neural networks trained on millions of patient records to recognize patterns
                      and correlations between symptoms, test results, and diagnoses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-white rounded-lg shadow-sm text-medical-teal">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Comprehensive Medical Database</h4>
                    <p className="text-gray-600">
                      Extensive collection of conditions, treatments, and outcome data from trusted
                      medical resources and institutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-white rounded-lg shadow-sm text-medical-teal">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Privacy & Security</h4>
                    <p className="text-gray-600">
                      Enterprise-grade security protocols to ensure all simulations and data
                      remain private and protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-medical-soft-gray">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              MediTwin brings together experts in medicine, artificial intelligence,
              and software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-6 bg-medical-light-blue rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Professionals</h3>
              <p className="text-gray-600">
                Practicing physicians and specialists who ensure clinical accuracy
                and relevance of our simulator.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-6 bg-medical-light-blue rounded-full flex items-center justify-center">
                <Brain className="h-12 w-12 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Researchers</h3>
              <p className="text-gray-600">
                Leading experts in machine learning and healthcare AI who develop
                our prediction models.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-6 bg-medical-light-blue rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Educators</h3>
              <p className="text-gray-600">
                Academic professionals who help optimize the platform for
                learning and skill development.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-medical-teal text-white">
        <div className="medical-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience MediTwin?</h2>
            <p className="text-xl opacity-90 mb-10">
              Join thousands of healthcare professionals already using our digital twin simulator
              to improve diagnostic accuracy and treatment planning.
            </p>
            <Button className="bg-white text-medical-teal hover:bg-white/90 px-8 py-6 text-lg" asChild>
              <Link to="/simulator">
                Start Your Simulation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
