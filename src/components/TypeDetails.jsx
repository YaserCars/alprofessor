import React from "react";
// import close button from react icons
import { FaTimes } from 'react-icons/fa';
// import green tick icon from lucide-react
import { CheckCircle } from "lucide-react";


const TypeDetails = ({ isOpen, closeModule, inspection }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button
          onClick={closeModule}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-1"
        >
          <FaTimes size={20} />
        </button>
        <div className="mb-4">
        </div>
        <h2 className="text-2xl font-semibold mb-4">{inspection.title}</h2>
        <ul className="space-y-3">
          {inspection.details.map((detail, idx) => (
            <li key={idx} className="flex items-center space-x-3">
            <CheckCircle size={20} color="#2B59FF" />
            <span className="text-lg">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypeDetails;
