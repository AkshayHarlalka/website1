
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Robust Question Answering",
      description: "Developing techniques to make question answering systems more robust to adversarial inputs and distribution shifts. Using contrastive learning and data augmentation strategies.",
      tags: ["NLP", "Question Answering", "PyTorch"],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Zero-Shot Learning for NLP",
      description: "Research on improving zero-shot learning capabilities in large language models to better generalize across tasks and domains without task-specific fine-tuning.",
      tags: ["Zero-Shot Learning", "LLMs", "Transfer Learning"],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Multilingual Dialogue Systems",
      description: "Building dialogue systems that work effectively across multiple languages with minimal language-specific training data using cross-lingual transfer techniques.",
      tags: ["Dialogue Systems", "Multilingual NLP", "Low-Resource"],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Knowledge Editing in LLMs",
      description: "Methods for efficiently updating factual knowledge in large language models without full retraining, ensuring models maintain up-to-date information.",
      tags: ["Knowledge Editing", "Model Updating", "LLMs"],
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading opacity-0 animate-fade-up">Featured Projects</h2>
        <p className="section-subheading opacity-0 animate-fade-up-delay-1">
          Explore my research work and technical projects focusing on advancing natural language processing and machine learning capabilities.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-slate-200 card-hover opacity-0 animate-fade-up-delay-2">
              <div className="aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-brand-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <Button
                  variant="ghost"
                  asChild
                  className="text-brand-600 hover:text-brand-700 hover:bg-brand-50 p-0 h-auto font-medium"
                >
                  <a href={project.link} className="flex items-center gap-1">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-brand-300 hover:bg-brand-50 text-brand-700"
          >
            View All Projects
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
