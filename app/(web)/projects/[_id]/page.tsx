import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/sanity";

import Image from "next/image";

import CustomIcon from "@/components/custom-icon";
import { TypeActiveProject } from "@/@types/type-active-project";
import Link from "next/link";
import { getActiveProjects, getActiveProjectsById } from "@/lib/api";

export default async function IndividualProject({
  params: { _id },
}: {
  params: { _id: TypeActiveProject };
}) {
  const data = await getActiveProjectsById(_id);

  return (
    <>
      {data.map((item: TypeActiveProject) => {
        return (
          <section
            key={item._id}
            className="min-h-[calc(100vh-6rem-5.25rem)] py-8 sm:flex sm:gap-4 lg:gap-12 xl:gap-60"
          >
            <section className="h-full w-full overflow-hidden rounded-xl bg-b-secondary">
              <div className="relative bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 p-4">
                <Link href="/projects">
                  <button className="mb-3 flex h-9 w-12 items-center justify-center rounded bg-b-terciary md:absolute md:mb-0">
                    <CustomIcon icon="arrowLeft" color="#fff" size="24" />
                  </button>
                </Link>

                {item.projectImage.asset._ref && (
                  <figure className="flex w-full justify-center">
                    <Image
                      src={urlFor(item.projectImage.asset._ref).url()}
                      width={300}
                      height={350}
                      alt={item.alt}
                      className="rounded-2xl shadow-2xl"
                    />
                  </figure>
                )}
              </div>

              <div className="p-4 font-heebo text-custom-primary">
                <h1 className="text-3xl font-black">{item.projectName}</h1>
                <h2 className="text-medium font-normal">
                  <strong className="font-bold">Meu cargo:</strong> {item.role}
                </h2>
                <h2 className="text-medium font-normal">
                  <strong className="font-bold">Time:</strong> {item.team}
                </h2>
                <h2 className="text-medium flex flex-wrap items-center gap-2 font-normal">
                  {item.technologies.map((tec: string) => (
                    <span className="rounded bg-b-quaternary p-1" key={tec}>
                      {tec}
                    </span>
                  ))}
                </h2>

                <div className="mt-2 flex flex-col gap-1">
                  <PortableText value={item.fullDescription} components={{}} />
                </div>
              </div>
            </section>

            {item.projectLink && (
              <section className="mt-4 flex h-full flex-col items-center gap-3 rounded-xl bg-b-secondary p-4 font-heebo text-custom-primary sm:mt-0">
                <h2 className="text-base font-bold">Links:</h2>

                <a href={item.projectLink} target="_blank">
                  <button className="flex h-full w-52 items-center justify-between rounded-md bg-b-quaternary p-2 transition-all hover:bg-b-terciary">
                    Veja o projeto no ar
                    <CustomIcon icon="cloud" size="25" color="#fff" />
                  </button>
                </a>

                {item.githubLink && (
                  <a href={item.githubLink} target="_blank">
                    <button className="flex h-8 w-52 items-center justify-between rounded-md bg-b-quaternary p-2 transition-all hover:bg-b-terciary">
                      GitHub
                      <CustomIcon icon="github" size="25" color="#fff" />
                    </button>
                  </a>
                )}
              </section>
            )}
          </section>
        );
      })}
    </>
  );
}

export async function generateStaticParams() {
  const data = await getActiveProjects();
  const activeProjectsById = data.map((id: TypeActiveProject) => ({
    _id: id._id,
  }));

  return activeProjectsById;
}
