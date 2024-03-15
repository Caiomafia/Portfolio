"use client";

import { IconContext } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbCloudDownload, TbMenu2 } from "react-icons/tb";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaJsSquare,
  FaReact,
  FaSass,
  FaRegArrowAltCircleUp,
  FaCode,
  FaArrowLeft,
} from "react-icons/fa";
import { IoDocumentTextOutline, IoCloseOutline } from "react-icons/io5";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";

interface Icon {
  icon: string;
  color: string;
  size: string;
}

export default function CustomIcon({ icon, color, size }: Icon) {
  const iconMapping: any = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    instagram: FaInstagram,
    curriculum: IoDocumentTextOutline,
    typescript: BiLogoTypescript,
    javascript: FaJsSquare,
    react: FaReact,
    next: TbBrandNextjs,
    styledcomponents: SiStyledcomponents,
    tailwind: SiTailwindcss,
    sass: FaSass,
    top: FaRegArrowAltCircleUp,
    code: FaCode,
    arrowLeft: FaArrowLeft,
    cloud: TbCloudDownload,
    close: IoCloseOutline,
    menu: TbMenu2,
  };

  const IconComponent = iconMapping[icon];

  return (
    <IconContext.Provider value={{ color, size }}>
      <IconComponent />
    </IconContext.Provider>
  );
}
