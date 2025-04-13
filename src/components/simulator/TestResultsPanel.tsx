
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Beaker, Plus, FileText } from 'lucide-react';

interface TestResultsPanelProps {
  onAddTestResult: (result: any) => void;
}

const TestResultsPanel = ({ onAddTestResult }: TestResultsPanelProps) => {
  const [testType, setTestType] = useState('');
  const [testValue, setTestValue] = useState('');
  const [testUnit, setTestUnit] = useState('');
  
  const testTypes = [
    { id: 'blood-pressure', name: 'Blood Pressure', defaultUnit: 'mmHg' },
    { id: 'heart-rate', name: 'Heart Rate', defaultUnit: 'BPM' },
    { id: 'temperature', name: 'Body Temperature', defaultUnit: '°C' },
    { id: 'glucose', name: 'Blood Glucose', defaultUnit: 'mg/dL' },
    { id: 'cholesterol', name: 'Cholesterol', defaultUnit: 'mg/dL' },
    { id: 'white-blood-cell', name: 'White Blood Cell Count', defaultUnit: 'cells/μL' },
    { id: 'red-blood-cell', name: 'Red Blood Cell Count', defaultUnit: 'cells/μL' },
    { id: 'hemoglobin', name: 'Hemoglobin', defaultUnit: 'g/dL' },
    { id: 'platelets', name: 'Platelets', defaultUnit: '×10^9/L' },
  ];
  
  const handleSelectTestType = (value: string) => {
    setTestType(value);
    const selectedTest = testTypes.find(test => test.id === value);
    if (selectedTest) {
      setTestUnit(selectedTest.defaultUnit);
    }
  };
  
  const handleAddTestResult = () => {
    if (!testType || !testValue) return;
    
    const selectedTest = testTypes.find(test => test.id === testType);
    if (!selectedTest) return;
    
    onAddTestResult({
      id: `${testType}-${Date.now()}`,
      testType: selectedTest.name,
      value: testValue,
      unit: testUnit,
    });
    
    // Reset form
    setTestType('');
    setTestValue('');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Test Results</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Test Type
          </label>
          <Select 
            value={testType} 
            onValueChange={handleSelectTestType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select test type" />
            </SelectTrigger>
            <SelectContent>
              {testTypes.map(test => (
                <SelectItem key={test.id} value={test.id}>
                  {test.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Value
            </label>
            <Input
              type="text"
              value={testValue}
              onChange={(e) => setTestValue(e.target.value)}
              placeholder="Enter test value"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Unit
            </label>
            <Input
              type="text"
              value={testUnit}
              onChange={(e) => setTestUnit(e.target.value)}
              placeholder="Unit"
              disabled={!testType}
            />
          </div>
        </div>
        
        <Button 
          className="w-full bg-medical-teal hover:bg-medical-teal/90"
          onClick={handleAddTestResult}
          disabled={!testType || !testValue}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Test Result
        </Button>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <FileText className="mr-2 h-4 w-4" />
            Upload Test Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestResultsPanel;
