"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { HeroSectionOne } from "./home";
import { ThreeDCardDemo } from "./explore";
import ContactUs from "../components/ui/contact";

export default function FloatingNavDemo() {
  // Function to smoothly scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section ${sectionId} not found!`);
    }
  };

  const navItems = [
    {
      name: "Home",
      value: "home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("home-section"),
    },
    {
      name: "About",
      value: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("home-section"),
    },
    {
      name: "Explore",
      value: "explore",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("explore-section"),
    },
    {
      name: "Contact",
      value: "contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("contact-section"),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div className="mt-8 py-10">
        {/* Home Section */}
        <div id="home-section">
          <HeroSectionOne />
        </div>

        {/* Explore Section */}
        <div id="explore-section">
          <h1 className="relative z-10 text-center mx-auto max-w-4xl text-2xl font-bold text-cyan-950 md:text-2xl lg:text-5xl dark:text-slate-300">
            Explore It For Different Clouds
          </h1>
          <ThreeDCardDemo />
        </div>

        {/* Contact Section */}
        <div id="contact-section">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
