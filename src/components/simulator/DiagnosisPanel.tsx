
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Stethoscope, Pill, AlertCircle } from 'lucide-react';

interface Diagnosis {
  id: string;
  name: string;
  confidence: number;
  description: string;
}

interface DiagnosisPanelProps {
  symptoms: any[];
  testResults: any[];
}

const DiagnosisPanel = ({ symptoms, testResults }: DiagnosisPanelProps) => {
  // This would typically come from an AI model based on symptoms and test results
  // For demo purposes, we'll generate some mock diagnoses based on input data
  const generateDiagnoses = (): Diagnosis[] => {
    if (symptoms.length === 0) {
      return [];
    }
    
    // Very simplified mock logic - in reality, this would be a complex AI model
    const hasHeadache = symptoms.some(s => s.symptomId === 'headache');
    const hasFever = symptoms.some(s => s.symptomId === 'fever');
    const hasChestPain = symptoms.some(s => s.symptomId === 'chest-pain');
    const hasAbdominalPain = symptoms.some(s => s.symptomId === 'abdominal-pain');
    
    const diagnoses: Diagnosis[] = [];
    
    if (hasHeadache && hasFever) {
      diagnoses.push({
        id: 'influenza',
        name: 'Influenza',
        confidence: 85,
        description: 'Viral infection that attacks your respiratory system',
      });
      
      diagnoses.push({
        id: 'covid',
        name: 'COVID-19',
        confidence: 65,
        description: 'Respiratory illness caused by the SARS-CoV-2 virus',
      });
    }
    
    if (hasChestPain) {
      diagnoses.push({
        id: 'angina',
        name: 'Angina',
        confidence: 70,
        description: 'Chest pain caused by reduced blood flow to the heart',
      });
      
      if (hasChestPain && symptoms.some(s => s.symptomId === 'shortness-of-breath')) {
        diagnoses.push({
          id: 'myocardial-infarction',
          name: 'Myocardial Infarction',
          confidence: 40,
          description: 'Heart attack caused by blocked blood flow',
        });
      }
    }
    
    if (hasAbdominalPain) {
      diagnoses.push({
        id: 'gastritis',
        name: 'Gastritis',
        confidence: 75,
        description: 'Inflammation of the lining of the stomach',
      });
      
      if (symptoms.some(s => s.symptomId === 'nausea')) {
        diagnoses.push({
          id: 'food-poisoning',
          name: 'Food Poisoning',
          confidence: 60,
          description: 'Illness caused by consuming contaminated food or water',
        });
      }
    }
    
    // If no specific conditions match, provide a generic diagnosis
    if (diagnoses.length === 0) {
      diagnoses.push({
        id: 'general',
        name: 'General Discomfort',
        confidence: 50,
        description: 'Non-specific symptoms that might require further testing',
      });
    }
    
    return diagnoses.sort((a, b) => b.confidence - a.confidence);
  };
  
  const diagnoses = generateDiagnoses();
  const hasSufficientData = symptoms.length > 0;
  
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-500';
    if (confidence >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Stethoscope className="h-5 w-5 text-medical-teal" />
        <h3 className="text-lg font-medium text-gray-900">Diagnostic Assessment</h3>
      </div>
      
      {!hasSufficientData ? (
        <div className="flex flex-col items-center justify-center h-40 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <AlertCircle className="h-8 w-8 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500">
            Add symptoms and test results to generate diagnoses
          </p>
        </div>
      ) : diagnoses.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-40">
          <p className="text-gray-500">Processing your inputs...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {diagnoses.map((diagnosis) => (
            <div key={diagnosis.id} className="pb-4 border-b border-gray-200 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{diagnosis.name}</h4>
                  <p className="text-sm text-gray-500">{diagnosis.description}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {diagnosis.confidence}%
                </span>
              </div>
              
              <div className="mt-2">
                <Progress 
                  value={diagnosis.confidence} 
                  className={getConfidenceColor(diagnosis.confidence)}
                />
              </div>
            </div>
          ))}
          
          {diagnoses.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Recommended Actions</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Pill className="h-4 w-4 text-medical-teal mr-2 mt-0.5" />
                  <span>Consult with a healthcare professional for a complete evaluation</span>
                </li>
                <li className="flex items-start">
                  <Pill className="h-4 w-4 text-medical-teal mr-2 mt-0.5" />
                  <span>Consider additional tests to confirm diagnosis</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DiagnosisPanel;
