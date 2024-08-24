import React, { useState } from "react";
import {UserCheck, Cpu, ArrowUpZA } from "lucide-react";
import TypeDetails from "./TypeDetails";
import { TextGenerateEffect } from "../ui/TextGenerationEffect";
import { motion, useInView } from "framer-motion";

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
  >
    {children}
  </button>
);

const inspectionTypes = [
  {
    id: 1,
    title: "Fully Comprehensive Inspection",
    details: [
      "A thorough examination of over 260 components",
      "Verification of all equipment functionality",
      "Detailed assessment of the car's overall condition"
    ],
    icon: ArrowUpZA 
  },
  {
    id: 2,
    title: "Third-party Inspection",
    details: [
      "Inspection after repairs by an independent party",
      "Verification of repair quality",
      "Objective assessment of the car's post-repair condition"
    ],
    icon: UserCheck
  },
  {
    id: 3,
    title: "Fault Diagnosis Check",
    details: [
      "Computer-based diagnosis of vehicle issues",
      "Precise identification of malfunctions",
      "Streamlined repair process with detailed diagnostics"
    ],
    icon: Cpu
  }
];

const TypesOfInspection = () => {
  const [selectedInspection, setSelectedInspection] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      {/* Container for the title and line */}
      <div ref={ref} className="relative mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <TextGenerateEffect 
            words="Types of Inspection" 
            className="text-center mb-8" 
          />
        </motion.div>
        {/* Horizontal line */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inspectionTypes.map((inspection) => {
          const Icon = inspection.icon;
          return (
            <Card key={inspection.id} className="flex flex-col h-full">
              <CardHeader className="flex items-center justify-between pb-2">
                <h3 className="font-bold text-lg">{inspection.title}</h3>
                <Icon className="w-8 h-8 text-blue-500" />
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {inspection.details.map((detail, index) => (
                    <li key={index} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 py-4 mt-auto">
                <Button 
                  onClick={() => setSelectedInspection(inspection)}
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            </Card>
          );
        })}
        {selectedInspection && (
          <TypeDetails 
            isOpen={!!selectedInspection} 
            closeModule={() => setSelectedInspection(null)} 
            inspection={selectedInspection} 
          />
        )}
      </div>
    </div>
  );
};

export default TypesOfInspection;
