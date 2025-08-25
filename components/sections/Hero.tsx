"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight, Play, Sparkles, CheckCircle, Star } from "lucide-react";
import { heroData } from "@/data/hero";
import { ANIMATION_DELAYS } from "@/constants";
import type { HeroData as HeroDataType } from "@/types";

const Hero: React.FC = () => {
  const data: HeroDataType = heroData;

  const getIconComponent = (iconName: string) => {
    const icons = { Star, CheckCircle, Sparkles };
    return icons[iconName as keyof typeof icons] || Star;
  };

  const getPositionClasses = (position: string) => {
    const positions = {
      'top-right': '-top-6 -right-6',
      'bottom-left': '-bottom-6 -left-6',
      'top-left': '-top-6 -left-6',
      'bottom-right': '-bottom-6 -right-6'
    };
    return positions[position as keyof typeof positions] || '-top-6 -right-6';
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'from-green-400 to-green-500',
      blue: 'from-blue-400 to-blue-500',
      purple: 'from-purple-400 to-purple-500',
      orange: 'from-orange-400 to-orange-500'
    };
    return colors[color as keyof typeof colors] || 'from-green-400 to-green-500';
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-100 opacity-50" />
        <div 
          className="absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-indigo-100 opacity-30" 
          style={{ animationDelay: "1s" }} 
        />
        <div 
          className="absolute top-1/2 right-1/4 h-32 w-32 animate-bounce rounded-full bg-blue-200 opacity-20" 
          style={{ animationDelay: "2s" }} 
        />
      </div>

      <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in">
            <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-center text-sm font-medium text-blue-700 sm:w-auto">
              {React.createElement(getIconComponent(data.badge.icon), { className: "h-4 w-4 shrink-0 fill-current" })}
              <span className="whitespace-normal break-words">
                {data.badge.text}
              </span>
            </div>

            <h1 className="pb-3 text-4xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {data.title.main}
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {data.title.highlight}
              </span>
              <span className="text-4xl sm:text-4xl lg:text-5xl">{data.title.suffix}</span>
            </h1>

            <p className="max-w-2xl leading-relaxed text-gray-600">
              {data.description}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.benefits.map((benefit, index) => (
                <div 
                  key={benefit.text} 
                  className="flex items-center space-x-3 animate-fade-in" 
                  style={{ animationDelay: `${(index + 2) * ANIMATION_DELAYS.fadeIn}ms` }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button 
                size="lg" 
                className="transform bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 px-8 text-lg font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="pt-8">
              <p className="mb-4 text-sm text-gray-500">Join educational leaders from:</p>
              <div className="flex items-center space-x-8 opacity-60">
                {data.logos.map((logo) => (
                  <div key={logo} className="font-semibold text-gray-400">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right lg:pl-8">
            <div className="relative">
              <div className="group relative">
                <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-r from-blue-400 to-indigo-600 transition-transform duration-500 group-hover:rotate-6" />
                <div className="absolute inset-0 -rotate-3 transform rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-600 opacity-50 transition-transform duration-500 group-hover:-rotate-6" />

                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  width={data.image.width}
                  height={data.image.height}
                  className="relative h-auto w-full transform rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {data.floatingCards.map((card, index) => (
                  <div 
                    key={card.title}
                    className={`absolute ${getPositionClasses(card.position)} animate-bounce rounded-2xl border border-gray-100 bg-white p-4 shadow-xl`}
                    style={{ animationDelay: `${index}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${getColorClasses(card.color)}`}>
                        {React.createElement(getIconComponent(card.icon), { className: "h-5 w-5 text-white" })}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{card.title}</div>
                        <div className="text-xs text-gray-600">{card.subtitle}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {data.stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="animate-fade-in rounded-xl border border-white/20 bg-white/80 p-4 text-center shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl" 
                    style={{ animationDelay: `${(index + 4) * ANIMATION_DELAYS.fadeIn}ms` }}
                  >
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



