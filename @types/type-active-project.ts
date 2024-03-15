export type TypeActiveProject = {
  id: string;
  _id: string;
  projectImage: {
    asset: {
      _ref: string;
    };
  };
  alt: string;
  projectName: string;
  shortDescription: string;
  role: string;
  team: string;
  technologies: string[];
  fullDescription: any;
  projectLink: string;
  githubLink: string;
};
