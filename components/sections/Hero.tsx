"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Sparkles, CheckCircle, Star } from "lucide-react";

interface Stat { number: string; label: string }
interface Benefit { text: string }

const benefits: Benefit[] = [
  { text: "AI Question Generation" },
  { text: "Smart Timetable Creation" },
  { text: "Automated Reports" },
  { text: "Real-time Analytics" },
];

const stats: Stat[] = [
  { number: "10K+", label: "Schools" },
  { number: "500K+", label: "Students" },
  { number: "99.9%", label: "Uptime" },
];

const logos = ["Harvard", "Stanford", "MIT", "Oxford"];

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-100 opacity-50" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-indigo-100 opacity-30" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 h-32 w-32 animate-bounce rounded-full bg-blue-200 opacity-20" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in">
            <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-center text-sm font-medium text-blue-700 sm:w-auto">
              <Star className="h-4 w-4 shrink-0 fill-current" />
              <span className="whitespace-normal break-words">Trusted by 100+ Schools Worldwide</span>
            </div>

            <h1 className="pb-3 text-4xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">School Management</span>
              <span className="text-4xl sm:text-4xl lg:text-5xl">Experience</span>
            </h1>

            <p className="max-w-2xl leading-relaxed text-gray-600">
              AI-powered comprehensive school management software that streamlines administration, enhances communication, and empowers educational excellence.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={benefit.text} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${(index + 2) * 200}ms` }}>
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button size="lg" className="transform bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="pt-8">
              <p className="mb-4 text-sm text-gray-500">Join educational leaders from:</p>
              <div className="flex items-center space-x-8 opacity-60">
                {logos.map((logo) => (
                  <div key={logo} className="font-semibold text-gray-400">{logo}</div>
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="School management dashboard"
                  width={800}
                  height={600}
                  className="relative h-auto w-full transform rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                <div className="absolute -top-6 -right-6 animate-bounce rounded-2xl border border-gray-100 bg-white p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-500">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">AI-Powered</div>
                      <div className="text-xs text-gray-600">Smart Automation</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 animate-bounce rounded-2xl border border-gray-100 bg-white p-4 shadow-xl" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Real-time</div>
                      <div className="text-xs text-gray-600">Live Updates</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="animate-fade-in rounded-xl border border-white/20 bg-white/80 p-4 text-center shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl" style={{ animationDelay: `${(index + 4) * 200}ms` }}>
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



