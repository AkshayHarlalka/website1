
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto">
        <h2 className="section-heading opacity-0 animate-fade-up">About Me</h2>
        <p className="section-subheading opacity-0 animate-fade-up-delay-1">
          I'm a passionate technologist with expertise in machine learning research and natural language processing, dedicated to solving complex challenges with innovative solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left column - Bio */}
          <div className="space-y-6 opacity-0 animate-fade-up-delay-2">
            <p className="text-slate-700">
              I am currently a PhD student at University of California, San Diego specializing in AI and Natural Language Processing. Previously, I worked at Microsoft as a Product Manager, helping launch a Question Answering product. 
            </p>
            
            <p className="text-slate-700">
              With several years of experience across industry and academia, I've developed expertise in transformers, large language models, and conversational AI. My research focuses on improving how AI systems understand and generate human language, with applications in education, healthcare, and business.
            </p>

            <p className="text-slate-700">
              Beyond technical skills, I bring a unique perspective that combines engineering knowledge with product thinking. I've led cross-functional teams, developed product strategies, and guided ML projects from conception to deployment.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-brand-800 mb-2">Education</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="min-w-[4rem] text-center">
                    <span className="block text-sm font-semibold text-brand-600">2022-</span>
                    <span className="block text-sm font-semibold text-brand-600">Present</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                    <p className="text-slate-600 text-sm">University of California, San Diego</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-[4rem] text-center">
                    <span className="block text-sm font-semibold text-brand-600">2016-</span>
                    <span className="block text-sm font-semibold text-brand-600">2018</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">M.S. in Computer Science</h4>
                    <p className="text-slate-600 text-sm">University of Massachusetts, Amherst</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-[4rem] text-center">
                    <span className="block text-sm font-semibold text-brand-600">2012-</span>
                    <span className="block text-sm font-semibold text-brand-600">2016</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">B.Tech. in Computer Science</h4>
                    <p className="text-slate-600 text-sm">Indian Institute of Technology, Bombay</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Skills & Experience */}
          <div className="opacity-0 animate-fade-up-delay-3">
            <h3 className="text-xl font-bold text-brand-800 mb-4">Skills & Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium text-brand-700 mb-2">Research Areas</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>Large Language Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>Conversational AI</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-brand-700 mb-2">Technologies</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>PyTorch, TensorFlow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>Python, Java, C++</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>HuggingFace, Transformers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                    <span>Cloud (AWS, Azure)</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-800 mb-4">Work Experience</h3>
            <ul className="space-y-6">
              <li className="border-l-2 border-brand-200 pl-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-600"></div>
                <h4 className="font-semibold">Microsoft</h4>
                <p className="text-sm text-brand-700">Product Manager | 2018 - 2022</p>
                <p className="mt-1 text-slate-700">Led product development for Microsoft's Question Answering service, a key component of Azure Cognitive Services. Managed roadmap, client relationships, and cross-functional teams.</p>
              </li>
              <li className="border-l-2 border-brand-200 pl-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-600"></div>
                <h4 className="font-semibold">Amazon</h4>
                <p className="text-sm text-brand-700">Software Engineering Intern | Summer 2017</p>
                <p className="mt-1 text-slate-700">Developed tools for the Alexa team, focusing on improving natural language understanding components for the voice assistant platform.</p>
              </li>
              <li className="border-l-2 border-brand-200 pl-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-600"></div>
                <h4 className="font-semibold">Google</h4>
                <p className="text-sm text-brand-700">Research Intern | Summer 2016</p>
                <p className="mt-1 text-slate-700">Worked with the Natural Language Understanding team on improving entity recognition in multilingual contexts.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
