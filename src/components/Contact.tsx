import React from "react";
import brandConfig from "../../brandConfig.json";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-heading font-black leading-tight">
            Ready to <span className="text-accent underline decoration-secondary underline-offset-8 decoration-4">Scale</span> Your Insights?
          </h2>
          <p className="text-blue-100 text-lg lg:text-xl font-body max-w-lg">
            Whether you're a PhD researcher in Europe or a Fintech startup in Pakistan, I bridge the data-narrative gap for you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-blue-200">
              <span className="text-xl">📧</span>
              <span className="font-body tracking-wider">{brandConfig.contact.email}</span>
            </div>
            <div className="flex items-center gap-4 text-blue-200">
              <span className="text-xl">⌚</span>
              <span className="font-body italic">{brandConfig.contact.timezone}</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <a 
            href={brandConfig.contact.calendly}
            className="group p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-4xl mb-6">📅</div>
            <h3 className="text-xl font-heading font-bold mb-2">Strategy Call</h3>
            <p className="text-sm text-blue-100/70 font-body mb-8">For established international research projects.</p>
            <div className="inline-block px-4 py-2 bg-accent text-primary font-black rounded-lg group-hover:scale-105 transition-transform">
              Book Now
            </div>
          </a>

          <a 
            href={`https://wa.me/${brandConfig.contact.whatsapp.replace(/\D/g, "")}`}
            className="group p-10 bg-secondary/20 backdrop-blur-xl border border-secondary/30 rounded-3xl hover:bg-secondary/30 transition-all duration-500"
          >
            <div className="text-4xl mb-6">💬</div>
            <h3 className="text-xl font-heading font-bold mb-2">Direct Inquiry</h3>
            <p className="text-sm text-emerald-100/70 font-body mb-8">Quick queries & local services in Pakistan.</p>
            <div className="inline-block px-4 py-2 bg-secondary text-white font-black rounded-lg group-hover:scale-105 transition-transform">
              WhatsApp Me
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
