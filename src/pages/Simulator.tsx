
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import HumanBody from '@/components/simulator/HumanBody';
import SymptomsPanel from '@/components/simulator/SymptomsPanel';
import TestResultsPanel from '@/components/simulator/TestResultsPanel';
import DiagnosisPanel from '@/components/simulator/DiagnosisPanel';
import SelectedItemsPanel from '@/components/simulator/SelectedItemsPanel';
import TreatmentPanel from '@/components/simulator/TreatmentPanel';
import { Activity, Stethoscope, Beaker, Pill } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Simulator = () => {
  const { toast } = useToast();
  const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([]);
  const [selectedBodyPartName, setSelectedBodyPartName] = useState<string>('');
  const [symptoms, setSymptoms] = useState<any[]>([]);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [diagnoses, setDiagnoses] = useState<any[]>([]);
  
  const handleSelectBodyPart = (id: string, name: string) => {
    if (selectedBodyParts.includes(id)) {
      setSelectedBodyParts(selectedBodyParts.filter(partId => partId !== id));
      setSelectedBodyPartName('');
    } else {
      setSelectedBodyParts([...selectedBodyParts, id]);
      setSelectedBodyPartName(name);
    }
  };
  
  const handleAddSymptom = (symptom: any) => {
    setSymptoms([...symptoms, symptom]);
    toast({
      title: "Symptom added",
      description: `${symptom.name} has been added to your simulation.`,
    });
    
    simulateDiagnosisUpdate();
  };
  
  const handleRemoveSymptom = (id: string) => {
    setSymptoms(symptoms.filter(symptom => symptom.id !== id));
    
    if (symptoms.length <= 1) {
      setDiagnoses([]);
    } else {
      simulateDiagnosisUpdate();
    }
  };
  
  const handleAddTestResult = (result: any) => {
    setTestResults([...testResults, result]);
    toast({
      title: "Test result added",
      description: `${result.testType} result has been added to your simulation.`,
    });
    
    simulateDiagnosisUpdate();
  };
  
  const handleRemoveTestResult = (id: string) => {
    setTestResults(testResults.filter(result => result.id !== id));
    simulateDiagnosisUpdate();
  };
  
  const simulateDiagnosisUpdate = () => {
    setDiagnoses([...diagnoses]);
  };
  
  return (
    <Layout>
      <div className="bg-medical-soft-gray py-10">
        <div className="medical-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Medical Digital Twin Simulator</h1>
            <p className="mt-2 text-gray-600">
              Build a digital twin by selecting body parts, adding symptoms, and inputting test results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-5 w-5 text-medical-teal" />
                  <h2 className="text-lg font-medium text-gray-900">Human Body</h2>
                </div>
                <HumanBody 
                  onSelectBodyPart={handleSelectBodyPart} 
                  selectedParts={selectedBodyParts}
                />
              </div>
              
              <SymptomsPanel 
                bodyPart={selectedBodyPartName} 
                onAddSymptom={handleAddSymptom}
              />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Beaker className="h-5 w-5 text-medical-teal" />
                  <h2 className="text-lg font-medium text-gray-900">Test Results</h2>
                </div>
                <TestResultsPanel onAddTestResult={handleAddTestResult} />
              </div>
              
              <SelectedItemsPanel 
                symptoms={symptoms}
                testResults={testResults}
                onRemoveSymptom={handleRemoveSymptom}
                onRemoveTestResult={handleRemoveTestResult}
              />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Stethoscope className="h-5 w-5 text-medical-teal" />
                  <h2 className="text-lg font-medium text-gray-900">Diagnosis</h2>
                </div>
                <DiagnosisPanel 
                  symptoms={symptoms} 
                  testResults={testResults}
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Pill className="h-5 w-5 text-medical-teal" />
                  <h2 className="text-lg font-medium text-gray-900">Treatment</h2>
                </div>
                <TreatmentPanel diagnoses={diagnoses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Simulator;
