import Image from "next/image";
import { ProjectContainer } from "@/components/project-container";
import { projectsData } from "@/utils/projectsData";
import Link from "next/link";

import SkillsDisplay from "@/components/skills-display";
import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/social-links";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="p-10 mx-auto max-w-6xl">{children}</div>;
}

export default function MainPage() {
  return (
    <div id="wrapper">
      <div id="home" className="p-10 bg-txcolor">
        <Container>
          <h1 className="text-5xl font-mada text-yellow-400">
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
      <div id="about" className="bg-txcolor border-t-4 border-yellow-400 ">
        <Container>
          <h2 className="text-4xl font-poppins text-yellow-400">ABOUT</h2>
          <p className=" mt-2 text-xl font-crimson text-white ">
            Who is Marcos ?
          </p>

          <div className="flex flex-col gap-5 md:flex-row  justify-between ">
            <div className="mt-10">
              <Image
                src="/me.jpeg"
                alt="me"
                className=" rounded-2xl "
                width={350}
                height={350}
              />
            </div>
            <div className="flex items-center flex-col gap-5 w-2/3">
              <h3 className="text-lg  md:text-3xl text-white font-bold">
                A really curious Front-End Developer with some love for UX.
              </h3>
              <p className="text-lg font-serif text-white">
                I&apos;m passionate about bringing both the technical and visual
                aspects of projects to life.I always love to think about the
                user experience,the right metrics , and also clean and acessible
                code .I&apos;m really focused in the details, and think that
                code should be always the more simple as possible, i believe
                that less is more, following always the{" "}
                <Link
                  href="http://lawsofsimplicity.com/"
                  className="text-yellow-400 hover:text-txcolor hover:bg-yellow-400 transition-colors"
                >
                  Laws of Simplicity
                </Link>
              </p>
              <p className="text-lg font-serif text-white">
                I&apos;m a computer science student from the{" "}
                <Link
                  href="https://www.anchieta.br/"
                  className="text-yellow-400 hover:text-txcolor hover:bg-yellow-400 transition-colors"
                >
                  Anchieta University
                </Link>
                , a university localized in Jundiai, city of Brazil, i also have
                the certified of my skills from{" "}
                <Link
                  href="https://www.algoexpert.io/frontend/product"
                  className="text-yellow-400 hover:text-txcolor hover:bg-yellow-400 transition-colors"
                >
                  Front End Expert
                </Link>{" "}
                and also i learned a lot in{" "}
                <Link
                  href="https://frontendmasters.com/"
                  className="text-yellow-400 hover:text-txcolor hover:bg-yellow-400 transition-colors"
                >
                  Front End Masters
                </Link>
              </p>
              <p className="text-lg font-serif text-white">
                I love to create,learn, explore new ideas and topics and also
                understand how to make the things i love in even better fashion.
                I am currently doing a lot of challenges from{" "}
                <Link
                  href="https://www.algoexpert.io/"
                  className="text-white hover:text-txcolor hover:bg-yellow-400 transition-colors"
                >
                  Algo Expert
                </Link>{" "}
                to improve my skills in data structures and algorithms. I&apos;m
                avaliable for freelancing as well so feel free to reach out and
                say hello !
              </p>
              <a
                href="#contact"
                className=" text-yellow-400 hover:animate-bounce underline underline-offset-8 w-40 cursor-pointer font-mada text-2xl"
              >
                Get In Touch !
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-txcolor border-t-4 border-yellow-400">
        <Container>
          <h2 className="text-4xl font-poppins text-yellow-400">
            SKILLS & TOOLS
          </h2>
          <p className=" mt-2 text-xl font-crimson text-white">My Toolbox</p>
          <SkillsDisplay />
        </Container>
      </div>

      {/* my work (projects) */}
      <div id="work" className="bg-txcolor border-t-4 border-yellow-400">
        <Container>
          <h2 className="text-4xl font-poppins text-yellow-400">WORK</h2>
          <p className="mt-2 text-xl text-white font-crimson">
            A selection of stuff I built
          </p>
          {projectsData ? (
            projectsData.map((project) => (
              <ProjectContainer
                description={project.description}
                id={project.id}
                imageUrl={project.imagePath}
                projectUrl={project.projectLink}
                repositoryUrl={project.githubRepo}
                title={project.title}
                key={project.id}
              />
            ))
          ) : (
            <p>teste</p>
          )}
        </Container>
      </div>

      {/* contact */}
      <div id="contact" className="bg-txcolor border-t-4 border-yellow-400">
        <Container>
          <h2 className="text-4xl text-yellow-400 font-poppins">CONTACT</h2>
          <span className="text-lg text-white font-crimson">Get In Touch</span>
          <p className="text-xl text-white font-mada mt-2 leading-4">
            Lets chat, If you want my resume you can send-me a message or just{" "}
            <a
              className="text-yellow-400 hover:underline cursor-pointer"
              // onClick={() => downloadResume()}
            >
              Click Here
            </a>
            , we can build somehing amazing together ! I would love to hear from
            you.
          </p>
          <br />
          <p className="text-white font-mada text-xl">
            Fill in your info in the form below and i look forward to hearing
            for you.
          </p>
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <ContactForm />
          </div>
          <footer>
            <SocialLinks />
          </footer>
        </Container>
      </div>
    </div>
  );
}
