import React from "react";
import Image from "next/image";
import { workExperiences } from "@/constants";
import { GridCard, Section } from "./Curriculum";

const ExperienceSection = () => (
  <Section title="Experience">
    <div className="lg:grid grid-cols-2 gap-8 mt-10">
      {workExperiences.map((experience) => (
        <ExperienceCard key={experience.name} experience={experience} />
      ))}
    </div>
  </Section>
);

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof workExperiences)[0];
}) => {
  const {
    icon,
    width,
    height,
    isLong,
    name,
    role,
    duration,
    workingHere,
    list,
  } = experience;

  const imageProps = {
    src: icon,
    width,
    height,
  };

  return (
    <GridCard className="p-6 sm:p-8 h-full mb-4 lg:mb-0">
      <div className="flex-col sm:flex-row flex">
        <div className="block sm:flex order-2 sm:order-1">
          <div className="relative w-fit mx-auto">
            <div className="w-24 h-24 md:w-20 md:h-20 flex-shrink-0 flex justify-center items-center bg-primary-foreground overflow-hidden rounded-full p-3 sm:p-0 mt-2 mb-6 sm:my-0 mx-auto blur-2xl relative">
              <Image
                {...imageProps}
                alt="Company logo"
                draggable={false}
                className="object-contain "
              />
            </div>
            <div className="absolute inset-0 w-24 h-24 md:w-20 md:h-20 flex-shrink-0 flex justify-center items-center overflow-hidden">
              <Image
                {...imageProps}
                alt="Company logo"
                draggable={false}
                className="object-contain scale-150 sm:scale-100"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center sm:items-start sm:ml-6">
            <h1
              className={`text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl
                 
              font-bold whitespace-nowrap truncate`}
            >
              {name}
            </h1>
            <h3 className="text-muted-foreground">{role}</h3>
          </div>
        </div>
        <div className="ml-auto order-1 sm:order-2">
          <div
            className={`rounded-2xl font-bold py-2 px-3 text-nowrap ${
              workingHere
                ? "border-2 border-violet-500 text-violet-500"
                : "bg-primary-foreground"
            }`}
          >
            {duration}
          </div>
        </div>
      </div>
      <div className="mt-14">
        <ul className="flex flex-col gap-2 list-disc pl-4 text-[0.85rem] xs:text-base">
          {list.map(({ skill, description }, index) => (
            <li key={index}>
              <span className="font-bold">{skill}:</span>
              <span className="opacity-80"> {description}</span>
            </li>
          ))}
        </ul>
      </div>
    </GridCard>
  );
};

export default ExperienceSection;
