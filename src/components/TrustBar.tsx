import React from "react";

const industries = [
  "Social Sciences",
  "Business & Management",
  "Education",
  "Healthcare",
  "Technology",
  "Life Sciences",
  "Fintech",
  "NGOs"
];

const TrustBar = () => {
  return (
    <div className="py-12 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <h2 className="text-gray-400 font-heading font-bold text-xs uppercase tracking-[0.2em] mb-8">
          Trusted by Professionals across Industries
        </h2>
      </div>
      
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee hover:pause-marquee select-none">
          {[...industries, ...industries, ...industries, ...industries].map((industry, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[200px] md:min-w-[300px] px-12 text-2xl md:text-3xl font-heading font-black text-primary/20 flex-shrink-0 transition-opacity hover:text-primary/40"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TrustBar;

