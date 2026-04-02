import React from "react";
import brandConfig from "../../brandConfig.json";

const Tools = () => {
  return (
    <section id="tools" className="py-24 px-6 lg:px-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-brand-text mb-6">
            Precision <span className="text-primary underline decoration-sky-300 underline-offset-4">Technology</span>.
          </h2>
          <p className="text-gray-500 font-body max-w-2xl mx-auto">
            A high-precision stack designed for scientific accuracy and professional communication across quantitative research and business intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {brandConfig.identity.techStack.map((stack, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/40 border border-gray-100 hover:shadow-2xl hover:border-primary/10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 group">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Service Name</div>
                  <h3 className="text-xl lg:text-3xl font-heading font-black text-brand-text group-hover:text-primary transition-colors">
                    {stack.serviceName}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] md:text-right">Relevant Tools</div>
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {stack.tools.map((tool, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-6 py-2.5 bg-gray-50 text-gray-700 font-heading font-bold text-sm rounded-full border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
