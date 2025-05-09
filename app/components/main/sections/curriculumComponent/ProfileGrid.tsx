"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridCard } from "./Curriculum";
import { projects } from "@/constants";
import { motion } from "framer-motion";
import { sectionFadeInVariants } from "@/utils/motion";

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const { name, icon, live_demo } = project;

  const imageProps = {
    src: icon,
    width: 100,
    height: 100,
    draggable: false,
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col mx-auto min-w-20 h-20 rounded-3xl aspect-square p-4 mb-2 bg-[var(--bg-dynamic-2)]">
        <Image {...imageProps} alt="Project icon" className="object-contain" />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-nowrap font-semibold text-center text-muted-foreground text-xs mb-2">
          {name}
        </h1>
        <Button
          variant="outline"
          className="w-fit mx-auto text-xs px-2.5 rounded-full bg-transparent hover:bg-violet-500 hover:text-primary-foreground border-2 border-violet-500 text-violet-500 font-bold"
        >
          <Link href={`${live_demo}`} target="_blank" rel="noopener noreferrer">
            VIEW
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <GridCard className="overflow-hidden p-4 sm:p-6 flex flex-col">
    <h3 className="text-2xl font-bold text-muted-foreground ">Apps I made</h3>
    <div className="flex flex-wrap flex-grow sm:gap-2 mb-2 sm:mb-0 scale-90 sm:scale-100 justify-between">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </GridCard>
);

const InterestsSection = () => (
  <GridCard className="overflow-hidden p-4 sm:p-6 h-full lg:col-span-1 sm:col-span-2">
    <h3 className="text-2xl font-bold text-muted-foreground mb-3">Interests</h3>
    <div className="flex flex-col h-[calc(100%-3rem)]">
      <div className="flex flex-wrap gap-2 my-auto p-1">
        {[
          "👨‍💻 Coding",
          "🏋️ Gym",
          "🚗 Cars",
          "📸 Photography",
          "⛰️ Traveling",
        ].map((interest) => (
          <div
            key={interest}
            className="border py-1 px-3 sm:py-2 rounded-md sm:rounded-xl bg-muted"
          >
            <p className="text-nowrap font-semibold text-xs sm:text-base">
              {interest}
            </p>
          </div>
        ))}
      </div>
    </div>
  </GridCard>
);

const ProfileGrid = () => (
  <motion.div
    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionFadeInVariants}
  >
    <GridCard className="overflow-hidden w-full min-h-72 sm:h-full">
      <Image
        src="/photos/profile_pic.webp"
        alt="Me"
        fill
        draggable={false}
        className="object-cover object-center "
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
      />
    </GridCard>

    <ProjectsSection />

    <InterestsSection />
  </motion.div>
);

export default ProfileGrid;
