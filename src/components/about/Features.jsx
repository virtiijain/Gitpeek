'use client';
import React from 'react';
import { Sparkles, Terminal, Link2, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Plug & Play with GitHub',
    description: 'Just sign in with GitHub. No configuration, no nonsense — your portfolio builds itself.',
    icon: Link2,
  },
  {
    title: 'Highlights That Matter',
    description: 'Your top projects, tech stacks, and commits displayed in a sleek, readable flow.',
    icon: BarChart3,
  },
  {
    title: 'Minimalist by Nature',
    description: 'Designed for developers who love simplicity. No fluff, just focus on your work.',
    icon: Terminal,
  },
  {
    title: 'A Shareable Identity',
    description: 'Get a single URL that instantly tells your coding story — wherever you share it.',
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <section className="w-full py-28 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block after:content-[''] after:block after:w-16 after:h-[3px] after:bg-indigo-500 after:mx-auto after:mt-4">
            Features You’ll Love
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            GitPeek makes your GitHub presence work for you — modern, effortless, and built for visibility.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid md:grid-cols-2 gap-y-14 gap-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start group transition">
              <div className="mr-5 mt-1">
                <feature.icon className="w-6 h-6 text-indigo-600 group-hover:scale-110 group-hover:text-indigo-700 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
