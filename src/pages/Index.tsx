
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Button,
  buttonVariants
} from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { 
  Activity, 
  Stethoscope, 
  FlaskConical, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  User,
  BookOpen,
  Medal
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const features = [
    {
      title: 'Interactive Body Mapping',
      description: 'Visualize and track symptoms across different body regions',
      icon: <Activity className="h-10 w-10 text-medical-teal" />,
    },
    {
      title: 'Comprehensive Symptom Tracking',
      description: 'Log and monitor detailed health indicators and symptoms',
      icon: <FlaskConical className="h-10 w-10 text-medical-teal" />,
    },
    {
      title: 'Advanced Health Visualization',
      description: 'Dynamic graphical representation of health signs and symptoms',
      icon: <Stethoscope className="h-10 w-10 text-medical-teal" />,
    },
    {
      title: 'Health Trend Analysis',
      description: 'Visualize symptom progression and health patterns over time',
      icon: <Clock className="h-10 w-10 text-medical-teal" />,
    },
  ];

  const testimonials = [
    {
      quote: "This health visualization system has transformed how I discuss treatment options with my patients. It's an invaluable tool.",
      author: "Dr. Sarah Chen",
      role: "Cardiologist",
    },
    {
      quote: "The ability to visually demonstrate how different treatments might affect outcomes helps patients make informed decisions.",
      author: "Dr. Marcus Williams",
      role: "Internal Medicine",
    },
    {
      quote: "A game-changer for medical education. Students can explore different diagnostic paths in a safe environment.",
      author: "Prof. James Taylor",
      role: "Medical Educator",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-medical-light-blue pt-20 pb-32">
        <div className="medical-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              IDP-2 Project: Health Visualization Platform
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Advanced body mapping and symptom visualization software for healthcare professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-6 text-lg" asChild>
                <Link to="/simulator">
                  Start Visualization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link to="/demo-cases">
                  View Demo Cases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How the Health Visualization Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced health visualization software creates comprehensive representations 
              of symptoms, body regions, and health indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg transition-transform hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-medical-soft-gray">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Intuitive Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our step-by-step process guides you from symptoms to diagnosis and treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-medical-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex justify-center mb-6">
                <Activity className="h-16 w-16 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Input Symptoms</h3>
              <p className="text-gray-600">
                Select body parts and add relevant symptoms with their intensity and duration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-medical-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex justify-center mb-6">
                <FlaskConical className="h-16 w-16 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Add Test Results</h3>
              <p className="text-gray-600">
                Enter laboratory findings and other diagnostic test results to enhance accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-medical-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex justify-center mb-6">
                <Stethoscope className="h-16 w-16 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Review & Treat</h3>
              <p className="text-gray-600">
                Examine diagnostic suggestions and simulate various treatment approaches.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/simulator" className={cn(buttonVariants({ variant: "default" }), "bg-medical-teal hover:bg-medical-teal/90")}>
              Try it now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what doctors and medical educators are saying about our health visualization technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <span className="text-5xl text-medical-teal mr-2">"</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="bg-medical-light-blue rounded-full p-2 mr-3">
                      <User className="h-6 w-6 text-medical-teal" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-teal">
        <div className="medical-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to transform your diagnostic process?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join thousands of healthcare professionals already using our health visualization platform
              to improve patient outcomes and treatment accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-medical-teal hover:bg-white/90 px-8 py-6 text-lg" asChild>
                <Link to="/simulator">
                  Start Your Visualization
                </Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose IDP-2?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform offers unique benefits for healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-medical-light-blue p-4 rounded-full mb-6">
                <BookOpen className="h-10 w-10 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Built on the latest medical research and continuously updated with new findings.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-medical-light-blue p-4 rounded-full mb-6">
                <CheckCircle2 className="h-10 w-10 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clinically Validated</h3>
              <p className="text-gray-600">
                Tested and verified in clinical settings with high accuracy and reliability.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-medical-light-blue p-4 rounded-full mb-6">
                <Medal className="h-10 w-10 text-medical-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award-Winning</h3>
              <p className="text-gray-600">
                Recognized for innovation in healthcare technology and medical education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
