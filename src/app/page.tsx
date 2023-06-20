import Image from "next/image";

import { projectsData } from "@/utils/projectsData";
import Link from "next/link";
import {
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiDevdotto,
} from "react-icons/si";
import SkillsDisplay from "@/components/skills-display";
import ContactForm from "@/components/contact-form";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="p-10 mx-auto max-w-6xl">{children}</div>;
}

export default function MainPage() {
  return (
    <div id="wrapper">
      <div id="home" className="p-10 bg-navy">
        <Container>
          <h1 className="text-5xl font-thin text-white">
            <span>Good day, I&apos;m Marcos</span>
            <br />
            I&apos;m a <strong>FrontEnd Engineer!</strong>
            <br />
            and
            <span> Content Creator</span>
          </h1>
        </Container>
      </div>

      {/* About Section */}
      <div id="about" className="bg-beige">
        <Container>
          <h2 className="text-4xl font-thin text-white">ABOUT</h2>
          <p className=" mt-2 text-xl text-txcolor ">Who is Marcos ?</p>

          <div className="flex flex-col gap-5 md:flex-row  justify-between ">
            <div className="mt-10">
              <Image
                src="/me.jpeg"
                alt="me"
                className=" rounded-full"
                width={280}
                height={280}
              />
            </div>
            <div className="flex items-center flex-col gap-5 w-2/3">
              <h3 className="text-lg  md:text-3xl text-navy font-bold">
                A really curious Front-End Developer with some love for UX.
              </h3>
              <p className="text-lg font-serif text-txcolor">
                I&apos;m passionate about bringing both the technical and visual
                aspects of projects to life.I always love to think about the
                user experience,the right metrics , and also clean and acessible
                code .I&apos;m really focused in the details, and think that
                code should be always the more simple as possible, i believe
                that less is more, following always the{" "}
                <Link
                  href="http://lawsofsimplicity.com/"
                  className="text-navy hover:text-white hover:bg-navy transition-colors"
                >
                  Laws of Simplicity
                </Link>
              </p>
              <p className="text-lg font-serif text-txcolor">
                I&apos;m a computer science student from the{" "}
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
                I love to create,learn, explore new ideas and topics and also
                understand how to make the things i love in even better fashion.
                I am currently doing a lot of challenges from{" "}
                <Link
                  href="https://www.algoexpert.io/"
                  className="text-navy hover:text-white hover:bg-navy transition-colors"
                >
                  Algo Expert
                </Link>{" "}
                to improve my skills in data structures and algorithms. I&apos;m
                avaliable for freelancing as well so feel free to reach out and
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
        </Container>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-navy">
        <Container>
          <h2 className="text-4xl font-thin text-white">SKILLS & TOOLS</h2>
          <p className=" mt-2 text-xl text-txcolor">My Toolbox</p>
          <span className=" mt-2 text-txcolor text-sm">
            The toolbox I use to bring products to life
          </span>

          <SkillsDisplay />
        </Container>
      </div>

      {/* my work (projects) */}
      <div id="work" className="bg-beige">
        <Container>
          <h2 className="text-4xl font-thin text-white">WORK</h2>
          <p className="mt-2 text-xl text-txcolor">
            A selection of stuff I built
          </p>
          {projectsData ? (
            projectsData.map((project) => (
              <div
                key={project.title}
                className="mt-5 flex flex-col items-center md:flex-row justify-between gap-4"
              >
                <div className="rounded w-72 h-72 flex-1 md:h-96 md:w-96 relative">
                  <Image
                    src={project.imagePath}
                    alt="Project image"
                    fill
                    className=" rounded-lg object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h2 className="text-3xl font-bold text-txcolor">
                    {project.title}
                  </h2>
                  <p className="text-lg font-serif text-txcolor">
                    {project.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-2 justify-between mt-2">
                    <a
                      rel="noreferrer nofollow"
                      target="_blank"
                      className="bg-navy p-4 rounded-lg hover:bg-vintage"
                      href={project.projectLink}
                    >
                      View it Here
                    </a>
                    <a
                      rel="noreferrer nofollow"
                      target="_blank"
                      className="bg-navy p-4 rounded-lg hover:bg-vintage"
                      href={project.githubRepo}
                    >
                      View Github Repo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>teste</p>
          )}
        </Container>
      </div>

      {/* contact */}
      <div id="contact" className="bg-navy">
        <Container>
          <h2 className="text-4xl text-white font-thin">CONTACT</h2>
          <span className="text-lg text-beige font-semibold">Get In Touch</span>
          <p className="text-xl text-txcolor mt-2 w-2/3">
            Lets chat, If you want my resume you can send-me a message or just{" "}
            <a
              className="text-beige hover:underline cursor-pointer"
              // onClick={() => downloadResume()}
            >
              Click Here
            </a>
            , we can build somehing amazing together ! I would love to hear from
            you.
          </p>
          <br />
          <p className="text-txcolor text-xl">
            Fill in your info in the form below and i look forward to hearing
            for you.
          </p>
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <ContactForm />
            <div className="flex flex-col justify-center gap-10">
              <p className="text-white font-thin">
                Feeling social ? Find me on these online spaces too
              </p>
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/mnikel/" target="_blank">
                  <SiLinkedin
                    style={{ fill: "white" }}
                    className="w-6 h-w-6 m-0 p-0"
                  />
                </a>
                <a href="https://twitter.com/marcosnikeldev" target="_blank">
                  <SiTwitter
                    style={{ fill: "white" }}
                    className="w-6 h-w-6 m-0 p-0"
                  />
                </a>
                <a href="https://github.com/marcossnikel" target="_blank">
                  <SiGithub
                    style={{ fill: "white" }}
                    className="w-6 h-w-6 m-0 p-0"
                  />
                </a>
                <a href="https://www.instagram.com/nikeelwz/" target="_blank">
                  <SiInstagram
                    style={{ fill: "white" }}
                    className="w-6 h-w-6 m-0 p-0"
                  />
                </a>
                <a href="https://dev.to/marcossnikel" target="_blank">
                  <SiDevdotto
                    style={{ fill: "white" }}
                    className="w-6 h-w-6 m-0 p-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
