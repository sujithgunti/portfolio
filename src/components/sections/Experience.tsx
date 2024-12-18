"use client";
import { personalInfo } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { CardSpotlight } from "../ui/card-spotlight";
import React, { useRef, useState, useEffect } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const timelineData: TimelineEntry[] = personalInfo.experience.map((exp) => ({
    title: exp.duration,
    content: (
      <CardSpotlight 
        className="w-full" 
        color="rgba(59, 130, 246, 0.1)"
        radius={400}
      >
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
          <p className="text-neutral-300 mb-4">{exp.role}</p>
          <p className="text-neutral-400 mb-4">{exp.location}</p>
          <ul className="list-disc list-inside space-y-2">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx} className="text-neutral-300 hover:text-white transition-colors">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardSpotlight>
    ),
  }));

  return (
    <section className="py-20" id="experience">
      <LampContainer className="bg-black">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Professional Experience
        </motion.h2>
      </LampContainer>

      <div
        ref={containerRef}
        className="w-full bg-black dark:bg-black font-sans md:px-10 mt-20"
      >
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 