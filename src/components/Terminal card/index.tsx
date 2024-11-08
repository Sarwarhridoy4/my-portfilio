import React from "react";

interface TerminalCardProps {
  name: string;
  description: string;
}

const TerminalCard: React.FC<TerminalCardProps> = ({ name, description }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="text-left">
        <p className="text-gray-700 dark:text-gray-300 font-mono">
          <span className="text-green-500">$</span> I am{" "}
          <span className="text-gray-900 dark:text-gray-100">{name}</span>
        </p>
        <p className="text-yellow-600 dark:text-yellow-400 font-mono">
          &gt; {description}
        </p>
      </div>
    </div>
  );
};

export default TerminalCard;
