"use client";

import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiSpringboot,
  SiAngular,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import {
  CssIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
} from "@/components/icons";
export default function SkillsDisplay() {
  return (
    <div
      id="icons"
      className="grid grid-cols-2 items-center md:grid-cols-3 gap-8 mt-4"
    >
      <div className="flex flex-col items-center">
        <ReactIcon />
        <p className="text-2xl font-thin text-cool">React</p>
      </div>
      <div className="flex flex-col items-center">
        <HtmlIcon />
        <p className="text-2xl font-thin text-cool">HTML</p>
      </div>
      <div className="flex flex-col items-center">
        <CssIcon />
        <p className="text-2xl font-thin text-cool">CSS</p>
      </div>
      <div className="flex flex-col items-center">
        <GitHubIcon />
        <p className="text-2xl font-thin text-cool">GitHub</p>
      </div>
      <div className="flex flex-col items-center">
        <GitIcon />
        <p className="text-2xl font-thin text-cool">Git</p>
      </div>
      <div className="flex flex-col items-center">
        <JavascriptIcon />
        <p className="text-2xl font-thin text-cool">JavaScript</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTypescript style={{ fill: "#001C30" }} className="w-20 h-20 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">TypeScript</p>
      </div>
      <div className="flex flex-col items-center">
        <NodeIcon />
        <p className="text-2xl font-thin text-cool">NodeJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss
          style={{ fill: "#001C30" }}
          className="w-14 h-14 m-0 p-0"
        />
        <p className="text-2xl font-thin text-cool">TailwindCSS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiNextdotjs style={{ fill: "#001C30" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">NextJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SassIcon />
        <p className="text-2xl font-thin text-cool">SASS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiPostgresql style={{ fill: "#001C30" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">Postgrees</p>
      </div>
      <div className="flex flex-col items-center">
        <SiSqlite style={{ fill: "#001C30" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">SQLite</p>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb style={{ fill: "#001C30" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">MongoDB</p>
      </div>
      <div className="flex flex-col items-center">
        <SiAngular style={{ fill: "#001C30" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">Angular</p>
      </div>
      <div className="flex flex-col items-center">
        <DiJava style={{ fill: "#001C30" }} className="w-16 h-16 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">Java</p>
      </div>
      <div className="flex flex-col items-center">
        <SiSpringboot style={{ fill: "#001C30" }} className="w-16 h-16 m-0 p-0" />
        <p className="text-2xl font-thin text-cool">Spring Boot</p>
      </div>
    </div>
  );
}
