"use client";
import React from "react";
import { features } from "../../content/aboutContent";

export default function Features() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
            Features You’ll Love
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg mt-2 max-w-2xl mx-auto">
            GitPeek helps you explore any GitHub profile with clarity — modern,
            effortless, and made for insight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start group transition">
              <div className="mr-5 mt-1">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
