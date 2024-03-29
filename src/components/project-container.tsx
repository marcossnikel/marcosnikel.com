import { IProject } from "@/types/project";
import Image from "next/image";

export function ProjectContainer({
  title,
  imageUrl,
  description,
  id,
  projectUrl,
  stacks,
  repositoryUrl,
}: IProject) {
  return (
    <div
      key={id}
      className="mt-5 flex flex-col items-center md:flex-row justify-between gap-4"
    >
      {id % 2 == 0 ? (
        <>
          <div className=" w-72 max-h-72 flex-1 md:h-96 md:w-96 relative">
            <Image
              src={imageUrl}
              alt="Project image"
              fill
              className=" rounded-lg object-cover overflow-hidden"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-4xl font-crimson text-cool">{title}</h2>
            <p className="text-lg font-mada text-vintage">{description}</p>
            <div className="flex flex-col  gap-2 justify-between mt-2">
              <a
                rel="noreferrer nofollow"
                target="_blank"
                className="flex justify-around items-center min-w-min max-w-sm border rounded-lg bg-cool font-poppins p-2 text-txcolor   hover:border hover:border-cool hover:bg-txcolor hover:text-cool transition-all "
                href={projectUrl}
              >
                Project
              </a>
              <a
                rel="noreferrer nofollow"
                target="_blank"
                className="flex justify-around items-center min-w-min max-w-sm border rounded-lg bg-cool font-poppins p-2 text-txcolor   hover:border hover:border-cool hover:bg-txcolor hover:text-cool transition-all "
                href={repositoryUrl}
              >
                Repository
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-1 flex-col">
            <h2 className="text-4xl font-crimson text-cool">{title}</h2>
            <p className="text-lg font-mada text-vintage">{description}</p>
            <div className="flex flex-col  gap-2 justify-between mt-2">
              <a
                rel="noreferrer nofollow"
                target="_blank"
                className="flex justify-around items-center min-w-min max-w-sm border rounded-lg bg-cool font-poppins p-2 text-txcolor   hover:border hover:border-cool hover:bg-txcolor hover:text-cool transition-all "
                href={projectUrl}
              >
                Project
              </a>
              <a
                rel="noreferrer nofollow"
                target="_blank"
                className="flex justify-around items-center min-w-min max-w-sm border rounded-lg bg-cool font-poppins p-2 text-txcolor   hover:border hover:border-cool hover:bg-txcolor hover:text-cool transition-all "
                href={repositoryUrl}
              >
                Repository
              </a>
            </div>
          </div>
          <div className="rounded w-72 max-h-72 flex-1 md:h-96 md:w-96 relative border border-cool ">
            <Image
              src={imageUrl}
              alt="Project image"
              fill
              className=" rounded-lg object-cover overflow-hidden"
            />
          </div>
        </>
      )}
    </div>
  );
}
