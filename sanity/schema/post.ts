export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "projectImage",
      title: "Imagem do projeto",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Texto alternativo",
        },
      ],
    },
    {
      name: "shortDescription",
      title: "Breve descrição",
      type: "text",
      description: "Uma breve descrição para colocar nos cards",
    },
    {
      name: "projectName",
      title: "Nome do projeto",
      type: "string",
      description: "O nome do projeto para servir de cargo",
    },
    {
      name: "role",
      title: "Meu cargo",
      type: "string",
      description: "Meu cargo na época em que fiz projeto",
    },
    {
      name: "team",
      title: "Meu time",
      type: "array",
      of: [{ type: "string" }],
      description: "Meu time que trabalhava na época",
    },
    {
      name: "technologies",
      title: "Tecnologias",
      type: "array",
      of: [{ type: "string" }],
      description: "As tecnologias que eu utilizava",
    },
    {
      name: "fullDescription",
      title: "Descrição completa",
      type: "array",
      description: "Uma descrição completa do projeto",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "projectLink",
      title: "Link do projeto",
      type: "url",
      description: "Link para ver o projeto no ar",
    },
    {
      name: "githubLink",
      title: "Link do GitHub",
      type: "url",
      description: "Link para o GitHub",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
  ],
};
