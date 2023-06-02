import Image from "next/image";

import { projectsData } from "@/utils/projectsData";
import Link from "next/link";
import SkillsDisplay from "@/components/skills-display";
import ContactForm from "@/components/contact-form";
export default function MainPage() {
  return (
    <div id="wrapper">
      <div id="home" className="px-60 p-10 bg-navy">
        <h1 className="text-5xl font-thin text-white">
          <span>Good day, I&apos;m Marcos</span>
          <br />
          I&apos;m a <span className="font-bold">FrontEnd Engineer !</span>
          <br />
          and
          <span className="mt-2"> Content Creator</span>
        </h1>
      </div>

      {/* About Section */}
      <div id="about" className="px-60 p-10 bg-beige">
        <h2 className="text-4xl font-thin text-white">ABOUT</h2>
        <p className="font-extralight mt-2 text-txcolor">Who is Marcos ?</p>

        <div className="flex justify-between ">
          <div className="mt-10">
            <Image
              src="/me.jpeg"
              alt="me"
              className=" rounded-full"
              width={280}
              height={280}
            />
          </div>
          <div className="flex flex-col gap-5 w-2/3">
            <h3 className="text-3xl text-navy font-bold">
              A really curious Front-End Developer with some love for UX
            </h3>
            <p className="text-lg font-serif text-txcolor">
              Im passionate about bringing both the technical and visual aspects
              of projects to life.I always love to think about the user
              experience,the right metrics , and also clean and acessible code
              .Im really focused in the details, and think that code should be
              always the more simple as possible, i believe that less is more,
              following always the{" "}
              <Link
                href="http://lawsofsimplicity.com/"
                className="text-navy hover:text-white hover:bg-navy transition-colors"
              >
                Laws of Simplicity
              </Link>
            </p>
            <p className="text-lg font-serif text-txcolor">
              Im a computer science student from the{" "}
              <Link
                href="https://www.anchieta.br/"
                className="text-navy hover:text-white hover:bg-navy transition-colors"
              >
                Anchieta University
              </Link>
              , a university localized in Jundiai, city of Brazil, i also have
              the certified of my skills from{" "}
              <Link
                href="https://www.algoexpert.io/frontend/product"
                className="text-navy hover:text-white hover:bg-navy transition-colors"
              >
                Front End Expert
              </Link>{" "}
              and also i learned a lot in{" "}
              <Link
                href="https://frontendmasters.com/"
                className="text-navy hover:text-white hover:bg-navy transition-colors"
              >
                Front End Masters
              </Link>
            </p>
            <p className="text-lg font-serif text-txcolor">
              I love create,learn, explore new ideas and topics and also
              understand how to make the things i love in even better fashion. I
              currently doing a lot of challenges from{" "}
              <Link
                href="https://www.algoexpert.io/"
                className="text-navy hover:text-white hover:bg-navy transition-colors"
              >
                Algo Expert
              </Link>{" "}
              to improve my skills in data structures and algorithms. Im
              avaliable for freelancers as well so feel free to reach out and
              say hello !
            </p>
            <a
              href="#contact"
              className="hover:animate-bounce underline underline-offset-8 w-40 cursor-pointer font-thin text-2xl"
            >
              Get In Touch !
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="p-10 px-60 bg-navy">
        <h2 className="text-4xl font-thin text-white">SKILLS & TOOLS</h2>
        <p className="font-extralight mt-2 text-txcolor">
          My Toolbox & Things I Can Do
        </p>
        <span className="font-extralight mt-4 text-txcolor">
          The skills, tools and technologies i use to bring products to life:
        </span>

        <SkillsDisplay />
      </div>

      {/* my work (projects) */}
      <div id="work" className="p-10 px-60 bg-beige">
        <h2>WORK</h2>
        <p>A Selection of stuff i&apos;ve Built</p>
      </div>

      {/* contact */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
