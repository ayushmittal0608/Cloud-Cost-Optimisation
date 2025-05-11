"use client";
import React, { useState } from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { HeroSectionOne } from "./home";
import { ThreeDCardDemo } from "./explore";
import ContactUs from "../components/ui/contact";


export default function FloatingNavDemo() {
  const [, setActiveTab] = useState("home");

  const navItems = [
    {
      name: "Home",
      value: "home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => setActiveTab("home"),
    },
    {
      name: "About",
      value: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => setActiveTab("about"),
    },
    {
      name: "Explore",
      value: "explore",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      onClick: () => setActiveTab("explore"),
    },
    {
      name: "Contact",
      value: "contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      onClick: () => setActiveTab("contact"),
    }
    
  ];

  return (
    <div className="relative w-full">
  <FloatingNav navItems={navItems} />
  <div className="mt-8 py-10"> {/* Adjust the value of mt-8 to control the spacing */}
    <HeroSectionOne />
    <h1 className="relative z-10 text-center mx-auto max-w-4xl text-2xl font-bold text-cyan-950 md:text-2xl lg:text-5xl dark:text-slate-300">
      Explore It For Different Clouds
    </h1>
    <ThreeDCardDemo />
    <ContactUs/>
  </div>
</div>

  );
}
