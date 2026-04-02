import React from "react";

const educationData = [
  {
    degree: "Master of Science - MS, Management Science",
    institution: "Riphah International University",
    duration: "2018 - 2020",
    description: "Specialized in research methodology and organizational behavior."
  },
  {
    degree: "Master's degree, Accounting and Business/Management",
    institution: "University of the Punjab",
    duration: "2016 - 2018",
    description: "Focused on advanced accounting principles and business analytics."
  },
  {
    degree: "Bachelor of Commerce - BCom, Business",
    institution: "University of the Punjab",
    duration: "2014 - 2016",
    description: "Foundational studies in commerce, economics, and business law."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 lg:px-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-brand-text mb-6">
            Educational <span className="text-secondary underline decoration-sky-300 underline-offset-4">Background</span>.
          </h2>
          <p className="text-gray-500 font-body max-w-2xl mx-auto">
            A solid academic foundation that fuels rigorous research and analytical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/40 border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-primary/10" />
              
              <div className="text-primary font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary/20" />
                {edu.duration}
              </div>
              
              <h3 className="text-xl font-heading font-black text-brand-text mb-3 leading-tight">
                {edu.degree}
              </h3>
              
              <p className="text-secondary font-bold text-sm mb-4">
                {edu.institution}
              </p>
              
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
