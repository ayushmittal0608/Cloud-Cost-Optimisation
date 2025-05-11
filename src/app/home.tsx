"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Corrected import for motion library
import cost from "./cost.png";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-14 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Optimise the cost of cloud in seconds, not days"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Optimize your cloud costs effortlessly with cloud optimisation tools—cut expenses, not performance, and scale smarter than ever before.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl px-6 py-6 border border-gray-300 dark:border-gray-700">
            <h1 className="relative z-10 mx-auto max-w-4xl text-2xl font-bold text-cyan-950 md:text-2xl lg:text-5xl dark:text-slate-300">
              Why This Cost Optimisation Website?
            </h1>
            <p className="relative z-10 mx-auto py-4 text-lg font-normal text-neutral-600 dark:text-neutral-400">
              As businesses scale on cloud platforms like AWS, Azure, or GCP, they often face unpredictable costs, underutilized resources, and overspending on infrastructure they don&apos;t need. This website provides:
            </p>
            <div>
              <Image src={cost} alt="Cost Image" width={1300} height={300} />
            </div>
            <ul className="relative z-10 mx-auto py-4 text-lg font-normal text-neutral-600 dark:text-neutral-400">
              <li>- AI-powered analytics to detect cost leaks and inefficiencies.</li>
              <li>- Automated recommendations to rightsize instances, shut down idle services, and choose better pricing plans.</li>
              <li>- Real-time dashboards that give engineering and finance teams full visibility into cloud usage and savings opportunities.</li>
              <li>- Seamless integration with existing cloud accounts for instant insights—no complex setup needed.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
