import React from "react";
import Image from "next/image";

const ReportPreview = () => {
  return (
    <section id="evidence" className="py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-brand-text mb-4">
            Evidence-Based <span className="text-secondary underline decoration-sky-300 underline-offset-4">Research Writing</span>.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-body">
            I don't just write. I synchronize methodology, literature reviews, and robust data insights into cohesive, high-impact research narratives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50">
          {/* Left: The Chart */}
          <div className="relative h-[400px] lg:h-[600px] w-full group">
            <Image 
              src="/report-chart.png"
              alt="SPSS and AMOS Research Data"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Statistical Model Analysis</span>
            </div>
          </div>

          {/* Right: The Writing */}
          <div className="p-8 lg:p-16 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-md uppercase tracking-wider">
                Research Narrative Snippet
              </div>
              <h3 className="text-3xl font-heading font-bold text-brand-text">
                "Validating the structural model using AMOS path analysis..."
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed font-body italic border-l-4 border-accent pl-6">
                <p>
                  "The initial Cronbach's Alpha (α = .91) confirmed high internal consistency across all latent variables. Subsequent Structural Equation Modeling (SEM) revealed that organizational culture significantly mediates the relationship between work-life balance and employee turnover intention (β = .42, p &lt; .001). This finding reinforces the theoretical framework established in the literature review..."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-2xl font-black text-primary">500+</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Papers Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-black text-secondary">100%</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Academic Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportPreview;
