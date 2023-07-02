import React from "react";
import {
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiDevdotto,
} from "react-icons/si";
export default function SocialLinks() {
  return (
    <div className="flex flex-col justify-center  gap-5 items-center mt-4">
      <p className="text-transparent text-xl font-mada bg-clip-text bg-gradient-to-r from-white to-yellow-400">
        Feeling social ? Find me on these online spaces too
      </p>
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/mnikel/" target="_blank">
          <SiLinkedin
            style={{ fill: "white" }}
            className="w-6 h-w-6 m-0 p-0 hover:w-7 hover:h-7 transition-all"
          />
        </a>
        <a href="https://twitter.com/marcosnikeldev" target="_blank">
          <SiTwitter
            style={{ fill: "white" }}
            className="w-6 h-w-6 m-0 p-0 hover:w-7 hover:h-7 transition-all"
          />
        </a>
        <a href="https://github.com/marcossnikel" target="_blank">
          <SiGithub
            style={{ fill: "white" }}
            className="w-6 h-w-6 m-0 p-0 hover:w-7 hover:h-7 transition-all"
          />
        </a>
        <a href="https://www.instagram.com/nikeelwz/" target="_blank">
          <SiInstagram
            style={{ fill: "white" }}
            className="w-6 h-w-6 m-0 p-0 hover:w-7 hover:h-7 transition-all"
          />
        </a>
        <a href="https://dev.to/marcossnikel" target="_blank">
          <SiDevdotto
            style={{ fill: "white" }}
            className="w-6 h-w-6 m-0 p-0 hover:w-7 hover:h-7 transition-all"
          />
        </a>
      </div>
    </div>
  );
}
