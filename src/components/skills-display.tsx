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
    <div id="icons" className="flex flex-wrap justify-around items-center w-80">
      <div className="flex flex-col items-center">
        <ReactIcon />
        <p className="text-2xl font-thin text-gray-500">React</p>
      </div>
      <div className="flex flex-col items-center">
        <HtmlIcon />
        <p className="text-2xl font-thin text-gray-500">HTML</p>
      </div>
      <div className="flex flex-col items-center">
        <CssIcon />
        <p className="text-2xl font-thin text-gray-500">CSS</p>
      </div>
      <div className="flex flex-col items-center">
        <GitHubIcon />
        <p className="text-2xl font-thin text-gray-500">Git Hub</p>
      </div>
      <div className="flex flex-col items-center">
        <GitIcon />
        <p className="text-2xl font-thin text-gray-500">Git</p>
      </div>
      <div className="flex flex-col items-center">
        <JavascriptIcon />
        <p className="text-2xl font-thin text-gray-500">Javascript</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTypescript style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-gray-500">Typescript</p>
      </div>
      <div className="flex flex-col items-center">
        <NodeIcon />
        <p className="text-2xl font-thin text-gray-500">NodeJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss
          style={{ fill: "white" }}
          className="w-14 h-14 m-0 p-0"
        />
        <p className="text-2xl font-thin text-gray-500">TailwindCSS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiNextdotjs style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-gray-500">NextJS</p>
      </div>
      <div className="flex flex-col items-center">
        <SassIcon />
        <p className="text-2xl font-thin text-gray-500">SASS</p>
      </div>
      <div className="flex flex-col items-center">
        <SiPostgresql style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-gray-500">Postgrees</p>
      </div>
      <div className="flex flex-col items-center">
        <SiSqlite style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-gray-500">SQLite</p>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb style={{ fill: "white" }} className="w-14 h-14 m-0 p-0" />
        <p className="text-2xl font-thin text-gray-500">MongoDB</p>
      </div>
    </div>
  );
}
