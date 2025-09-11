"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import {  ChevronRight, Check } from 'lucide-react';
import { modules, colorClasses } from '@/constants';
import { Module } from '@/types';
import { getModuleColors } from '@/lib/utils';

const SchoolModules = () => {
  const [activeModule, setActiveModule] = useState<Module['id']>('students');
  const activeModuleData = modules.find((module: Module) => module.id === activeModule);

  return (
    <section id="modules" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive School Management Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated modules work together seamlessly to provide a complete 
            school management solution tailored to your institution's needs.
          </p>
        </div>

        {/* Mobile/Tablet View - Card Grid */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => {
              const colors = getModuleColors(module.color, colorClasses);
              return (
                <div 
                  key={module.id}
                  className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${colors.hover} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${colors.accent} p-3 rounded-xl`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={600}
                      height={400}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  
                  <ul className="space-y-2">
                    {module.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <Check className={`h-4 w-4 ${colors.icon} mt-0.5 mr-2 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {module.features.length > 3 && (
                      <li className="text-sm text-gray-500 ml-6">
                        +{module.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View - Interactive Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Module Selection */}
            <div className="lg:col-span-4">
                              <div className="space-y-3 h-full">
                  {modules.map((module, index) => {
                    const colors = getModuleColors(module.color, colorClasses);
                    const isActive = activeModule === module.id;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 group ${
                        isActive
                          ? `${colors.bg} ${colors.border} shadow-md`
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      } animate-fade-in`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg transition-colors duration-300 ${
                          isActive ? colors.accent : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          <module.icon className={`h-5 w-5 ${
                            isActive ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                        <ChevronRight className={`h-4 w-4 transition-colors duration-300 ${
                          isActive ? colors.icon : 'text-gray-400'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Module Details */}
            <div className="lg:col-span-8">
              {activeModuleData && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in border border-gray-200 h-full flex flex-col">
                  <div className="relative h-64 flex-shrink-0">
                    <Image
                      src={activeModuleData.image}
                      alt={activeModuleData.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                          <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center mb-2">
                          <div className={`${getModuleColors(activeModuleData.color, colorClasses).accent} p-2 rounded-lg mr-3`}>
                            <activeModuleData.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">{activeModuleData.title}</h3>
                        </div>
                        <p className="text-gray-200">{activeModuleData.description}</p>
                      </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                              {activeModuleData.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className={`${getModuleColors(activeModuleData.color, colorClasses).accent} p-1 rounded-full mt-1 flex-shrink-0`}>
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <button className={`${getModuleColors(activeModuleData.color, colorClasses).accent} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                        Learn More About {activeModuleData.title}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolModules;


