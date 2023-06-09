"use client";

import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
} from "react-icons/si";
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
    <div id="icons" className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4">
      <div className="flex flex-col items-center">
        <ReactIcon />
        <p className="text-2xl font-thin text-white">React</p>
      </div>
      <div className="flex flex-col items-center">
        <HtmlIcon />
        <p className="text-2xl font-thin text-white">HTML</p>
      </div>
      <div className="flex flex-col items-center">
        <CssIcon />
        <p className="text-2xl font-thin text-white">CSS</p>
      </div>
      <div className="flex flex-col items-center">
        <GitHubIcon />
        <p className="text-2xl font-thin text-white">Git Hub</p>
      </div>
      <div className="flex flex-col items-center">
        <GitIcon />
        <p className="text-2xl font-thin text-white">Git</p>
      </div>
      <div className="flex flex-col items-center">
        <JavascriptIcon />
        <p className="text-2xl font-thin text-white">Javascript</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTypescript style={{ fill: "white" }} className="w-20 h-20 m-0 p-0" />
        <p className="text-2xl font-thin text-white">Typescript</p>
      </div>
      <div className="flex flex-col items-center">
        <NodeIcon />
        <p className="text-2xl font-thin text-white">NodeJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss
          style={{ fill: "white" }}
          className="w-14 h-14 m-0 p-0"
        />
        <p className="text-2xl font-thin text-white">TailwindCSS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiNextdotjs style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">NextJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SassIcon />
        <p className="text-2xl font-thin text-white">SASS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiPostgresql style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">Postgrees</p>
      </div>
      <div className="flex flex-col items-center">
        <SiSqlite style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">SQLite</p>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-white">MongoDB</p>
      </div>
    </div>
  );
}
