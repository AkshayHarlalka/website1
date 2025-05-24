
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left content */}
        <div className="flex-1 space-y-8 opacity-0 animate-fade-up">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            <span className="inline-block w-2 h-2 bg-brand-600 rounded-full"></span>
            Machine Learning Researcher & Developer
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-brand-950 tracking-tight leading-tight">
            <span className="block">Hi, I'm Akshay</span>
            <span className="block mt-2 text-brand-600">Harlalka</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl">
            A technologist at the intersection of AI research and natural language processing. 
            Focused on building innovative solutions for complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-brand-600 hover:bg-brand-700"
            >
              View Projects
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="#about">Learn More About Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <a href="https://github.com/akshay-harlalka" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/akshayharlalka" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://twitter.com/AkshayHarlalka" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="mailto:akshay.harlalka@gmail.com" className="text-slate-600 hover:text-brand-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right content - profile image */}
        <div className="flex-1 flex justify-center items-center opacity-0 animate-fade-in-delay-1">
          <div className="relative">
            {/* Your profile image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-brand-100 to-brand-300 flex items-center justify-center">
              <img 
                src="/lovable-uploads/d4606b81-2b67-4e8d-a08d-fc825fc938da.png" 
                alt="Akshay Harlalka"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 rounded-full border-2 border-dashed border-brand-200 transform rotate-45"></div>
            <div className="absolute top-8 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-brand-600 font-semibold text-sm">ML Engineer</div>
            </div>
            <div className="absolute bottom-8 -left-6 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-brand-600 font-semibold text-sm">Researcher</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
