
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, HeartPulse, Brain, Thermometer, Wind, Stethoscope } from 'lucide-react';

const DemoCases = () => {
  const demoCases = [
    {
      id: 'chest-pain',
      title: 'Chest Pain',
      description: 'Male, 55 - Experiencing central chest pain radiating to left arm',
      category: 'Cardiology',
      icon: <HeartPulse className="h-6 w-6" />,
      complexity: 'Moderate',
    },
    {
      id: 'headache',
      title: 'Chronic Headache',
      description: 'Female, 42 - Recurring headaches with visual disturbances',
      category: 'Neurology',
      icon: <Brain className="h-6 w-6" />,
      complexity: 'Complex',
    },
    {
      id: 'fever',
      title: 'Fever & Fatigue',
      description: 'Male, 28 - High fever with extreme fatigue and joint pain',
      category: 'Infectious Disease',
      icon: <Thermometer className="h-6 w-6" />,
      complexity: 'Simple',
    },
    {
      id: 'sob',
      title: 'Shortness of Breath',
      description: 'Female, 60 - Progressive dyspnea and chronic cough',
      category: 'Pulmonology',
      icon: <Wind className="h-6 w-6" />,
      complexity: 'Complex',
    },
    {
      id: 'abdominal',
      title: 'Abdominal Pain',
      description: 'Female, 32 - Acute lower right quadrant pain with nausea',
      category: 'Gastroenterology',
      icon: <Stethoscope className="h-6 w-6" />,
      complexity: 'Moderate',
    },
    {
      id: 'joint-pain',
      title: 'Joint Pain',
      description: 'Male, 68 - Chronic knee and hip pain with stiffness',
      category: 'Rheumatology',
      icon: <Stethoscope className="h-6 w-6" />,
      complexity: 'Moderate',
    },
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple':
        return 'bg-green-100 text-green-800';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Complex':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="bg-medical-soft-gray py-20">
        <div className="medical-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo Patient Cases</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our pre-configured patient cases to test the digital twin simulator's capabilities.
              Perfect for training, education, or getting familiar with the system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoCases.map((demoCase) => (
              <Card key={demoCase.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-medical-light-blue rounded-lg text-medical-teal">
                      {demoCase.icon}
                    </div>
                    <Badge variant="outline" className={getComplexityColor(demoCase.complexity)}>
                      {demoCase.complexity}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{demoCase.title}</CardTitle>
                  <CardDescription>{demoCase.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{demoCase.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-medical-teal hover:bg-medical-teal/90" asChild>
                    <Link to={`/simulator?case=${demoCase.id}`}>
                      Simulate Case
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Want to create your own patient simulation from scratch?
            </p>
            <Button className="bg-medical-teal hover:bg-medical-teal/90" asChild>
              <Link to="/simulator">
                Start New Simulation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoCases;
