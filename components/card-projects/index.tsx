"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button";
import { urlFor } from "@/sanity/lib/sanity";

interface CardProps {
  srcImage?: string;
  name: string;
  description: string;
  redirect: string;
}

export default function CardProjects({
  srcImage,
  name,
  description,
  redirect,
}: CardProps) {
  return (
    <div className="mb-3 flex w-full flex-col justify-between gap-2 rounded-lg bg-b-terciary p-4 sm:w-48 md:w-56 lg:w-72 xl:w-96">
      {srcImage && (
        <Image
          src={srcImage}
          className="max-h-32 w-full rounded-t-lg object-cover"
          width={264}
          height={122}
          alt={name}
          loader={({ src, width, quality }) => {
            return urlFor(src)
              .width(width)
              .quality(quality || 75)
              .url();
          }}
        />
      )}

      <h3 className="font-heebo text-base font-semibold text-custom-primary">
        {name}
      </h3>
      <h4 className="font-heebo text-base font-medium text-custom-primary">
        {description}
      </h4>

      <Link href={`/projects/${redirect}`}>
        <Button>Ver mais</Button>
      </Link>
    </div>
  );
}
