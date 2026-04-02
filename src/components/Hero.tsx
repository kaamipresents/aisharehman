import React from "react";
import Image from "next/image";
import brandConfig from "../../brandConfig.json";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 lg:px-24 flex flex-col items-center bg-white border-b border-gray-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full tracking-wide">
            {brandConfig.identity.primaryService}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-black text-brand-text leading-tight">
            Bridging the Gap Between <span className="text-secondary italic underline decoration-accent/50 underline-offset-8">Complex Research</span> and Academic Excellence.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-body">
            5+ years of expertise in high-quality research writing, methodology design, and data analysis (SPSS, AMOS, Excel). 
            Helping clients globally achieve clarity and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={brandConfig.contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all transform hover:-translate-y-1 text-center"
            >
              Book a Strategy Call
            </a>
            
            <a 
              href={`https://wa.me/${brandConfig.contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Quick Chat (WhatsApp)
            </a>
          </div>

          <div className="pt-4 text-sm text-gray-500 font-medium italic">
            🌍 {brandConfig.contact.timezone}
          </div>
        </div>

        <div className="relative group perspective-1000">
          <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-[2.5rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.1),20px_-20px_60px_rgba(255,255,255,0.5)] border-8 border-white group-hover:rotate-3 transition-transform duration-700 ease-out">
            <Image 
              src="/aisha-profile.png"
              alt="Aisha Rehman - Professional Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 max-w-[180px] hidden md:block animate-bounce-slow">
            <div className="text-2xl font-black text-primary mb-1">500+</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Successful Research Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
