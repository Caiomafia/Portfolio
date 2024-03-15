import Image from "next/image";
import Link from "next/link";

import { getActiveProjects } from "@/lib/api";

import Button from "@/components/button";
import CustomIcon from "@/components/custom-icon";
import ContainerItens from "@/components/container-itens";
import Technologies from "@/components/technologies";
import Subtitle from "@/components/subtitle";
import CardProjects from "@/components/card-projects";
import Form from "@/components/form";
import Socials from "@/components/socials";
import { TypeActiveProject } from "@/@types/type-active-project";

export default async function Home() {
  const data = await getActiveProjects();
  const curriculo: string =
    "https://docs.google.com/document/d/1N25WxL_HFLCqFqX-apuL1vt6OF6qitAKtym1SidgpHI/edit?usp=sharing";

  return (
    <>
      <section className="flex min-h-[calc(100vh-6rem)] w-full flex-wrap-reverse items-end justify-center sm:items-center sm:justify-between sm:pt-5 lg:relative">
        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
          <h1 className="mb-3 font-kalam text-4xl font-normal text-custom-primary 2xl:text-6xl">
            Olá eu sou o
            <strong className="text-gradient-text block font-bold">
              Bruno Barreiras
            </strong>
          </h1>

          <h2 className="mb-2 font-heebo text-2xl font-medium text-custom-primary 2xl:text-3xl">
            Desenvolvedor Front-End
          </h2>

          <p className="mb-8 w-56 font-heebo text-base font-normal text-custom-primary lg:w-96 2xl:text-lg">
            Sou especialista na construção de aplicativos web inovadores usando
            tecnologias como React e Next.js.
          </p>

          <span className="flex gap-6">
            <a href={curriculo} target="_blank">
              <Button bgButton>
                <CustomIcon icon="curriculum" size="20" color="#fff" />
                Currículo
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/brunobarreiras/"
              target="_blank"
            >
              <Button>
                <CustomIcon icon="linkedin" size="20" color="#fff" />
                Linkedin
              </Button>
            </a>
          </span>
        </div>

        <div className="absolute bottom-3 right-[50%] hidden lg:flex lg:self-start">
          <CustomIcon icon="code" color="#9955E8" size="35" />
        </div>

        <figure className="h-full w-full sm:w-[280px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]">
          <Image
            src="/bro.svg"
            className="h-full w-full"
            width={408}
            height={350}
            alt="typing code"
          />
        </figure>
      </section>

      <ContainerItens id="about">
        <section className="flex flex-wrap items-center justify-between">
          <figure className="w-full md:w-[290px] lg:w-[330px] xl:w-[450px] 2xl:w-[550px] ">
            <Image
              src="/bruno.svg"
              alt="Bruno Barreiras - Avatar"
              className="h-full w-full"
              width={358}
              height={361}
            />
          </figure>

          <div className="flex flex-col gap-2 md:w-80 lg:w-96 xl:w-[525px] xl:gap-4 2xl:w-[650px]">
            <Technologies />

            <span>
              <Subtitle>Sobre mim</Subtitle>

              <h3 className="font-heebo text-base font-black text-custom-primary lg:text-lg xl:text-xl">
                Goiânia, Go
              </h3>
            </span>

            <p className="font-heebo text-base font-normal text-custom-primary lg:text-lg xl:text-xl">
              Me chamo Bruno, nascido em 2005, sou um dedicado desenvolvedor
              front-end, formado pelo Vai na Web. Minha experiência abrange
              projetos em diversos setores, incluindo arquitetura, assessoria
              jurídica, saúde e prestação de serviços. Comprometido com a
              entrega de soluções visuais e funcionais, estou sempre em busca de
              aprimorar minhas habilidades para oferecer resultados excepcionais
              em cada projeto que abraço.
            </p>

            <a href={curriculo} target="_blank">
              <Button>
                <CustomIcon icon="curriculum" size="20" color="#fff" />
                Currículo
              </Button>
            </a>
          </div>
        </section>
      </ContainerItens>

      <section className="mt-14 w-full">
        <div className="text-center">
          <Subtitle>Projetos</Subtitle>

          <h3 className="mt-2 font-heebo text-base font-medium text-custom-primary">
            Veja todos os meus Projetos
          </h3>
        </div>

        <article className="my-8 w-full sm:flex sm:justify-between">
          {data.slice(0, 3).map((item: TypeActiveProject) => (
            <CardProjects
              key={item._id}
              srcImage={item.projectImage.asset._ref}
              name={item.projectName}
              description={item.shortDescription}
              redirect={item._id}
            />
          ))}
        </article>

        <div className="flex justify-center">
          <Link href="/projects">
            <Button bgButton>Ver Todos</Button>
          </Link>
        </div>
      </section>

      <ContainerItens id="contact">
        <section className="sm:flex sm:justify-between" id="contact">
          <div className="flex flex-col gap-1 sm:w-52 md:w-60 lg:w-96 lg:gap-3 xl:w-[538px]">
            <figure className="w-52">
              <Image
                src="/avatar.svg"
                className="h-full w-full"
                width={200}
                height={170}
                alt="Avatar de Bruno Barreiras"
              />
            </figure>
            <Subtitle>Contato</Subtitle>
            <h3 className="font-heebo text-sm font-extrabold text-custom-primary md:text-base lg:text-lg xl:text-xl">
              Gostou do meu trabalho?
            </h3>

            <p className="font-heebo text-sm font-medium text-custom-primary md:text-base lg:text-lg xl:text-xl">
              Envie-me um e-mail para{" "}
              <a
                href="mailto:brunovbarreiras@gmail.com"
                className="font-extrabold transition-all hover:opacity-80"
                target="_blank"
              >
                {" "}
                brunovbarreiras@gmail.com{" "}
              </a>{" "}
              ou entre em contato através das minhas redes sociais.
            </p>

            <span className="flex gap-2">
              <Socials
                urlSocial="https://github.com/brunowzz"
                nameSocial="GitHub"
                iconName="github"
              />
              <Socials
                urlSocial="https://www.linkedin.com/in/brunobarreiras/"
                nameSocial="LinkedIn"
                iconName="linkedin"
              />
              <Socials
                urlSocial="https://www.instagram.com/brunowzz/"
                nameSocial="Instagram"
                iconName="instagram"
              />
            </span>
          </div>
          <Form />
        </section>
      </ContainerItens>
    </>
  );
}
