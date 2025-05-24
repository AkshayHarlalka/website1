
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Improving Factual Consistency in Question Answering with Retrieval Augmented Generation",
      venue: "ACL 2023",
      authors: "Harlalka, A., Wang, D., & Thompson, S.",
      link: "#",
      year: 2023
    },
    {
      title: "Domain Adaptive Pre-training for Multilingual Question Answering",
      venue: "EMNLP 2022",
      authors: "Harlalka, A., Chen, J., & Johnson, M.",
      link: "#",
      year: 2022
    },
    {
      title: "A Comparative Study of Knowledge Distillation Methods for Neural Question Answering Models",
      venue: "NAACL 2021",
      authors: "Zhang, K., Harlalka, A., & Brown, N.",
      link: "#",
      year: 2021
    },
    {
      title: "Cross-lingual Transfer Learning for Low-resource Neural Machine Translation",
      venue: "Findings of ACL 2020",
      authors: "Harlalka, A., Liu, R., & Martinez, A.",
      link: "#",
      year: 2020
    }
  ];

  return (
    <section id="publications" className="py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="section-heading opacity-0 animate-fade-up">Research Publications</h2>
            <p className="section-subheading opacity-0 animate-fade-up-delay-1">
              My peer-reviewed publications in natural language processing and machine learning conferences and journals.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-brand-300 hover:bg-brand-50 text-brand-700 self-start md:self-auto"
            asChild
          >
            <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">
              Google Scholar Profile
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="space-y-6 opacity-0 animate-fade-up-delay-2">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-brand-600">{pub.venue}</span>
                    <span className="inline-block h-1 w-1 rounded-full bg-slate-300"></span>
                    <span className="text-sm text-slate-500">{pub.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    <a href={pub.link} className="hover:text-brand-600 transition-colors">
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-slate-600">{pub.authors}</p>
                </div>
                <div className="flex gap-2 md:flex-col md:items-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-brand-600 hover:text-brand-700 hover:bg-brand-50 h-auto py-1 px-2"
                  >
                    <a href={pub.link}>
                      Paper
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-up-delay-3">
          <p className="text-slate-600 mb-4">Want to collaborate on research? Let's connect!</p>
          <Button
            asChild
            className="bg-brand-600 hover:bg-brand-700"
          >
            <a href="mailto:akshay.harlalka@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
