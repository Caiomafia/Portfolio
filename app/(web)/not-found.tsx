"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Error() {
  const [timer, setTimer] = useState(5);
  const { replace } = useRouter();

  useEffect(() => {
    const interval = setInterval(function () {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          replace("/");
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-6rem-5.25rem)] flex-col items-center justify-center gap-2 text-center">
      <figure>
        <Image
          src="/avatar.svg"
          width={200}
          height={170}
          alt="Avatar - Bruno Barreiras"
        />
      </figure>

      <h1 className="font-heebo text-2xl font-bold text-custom-primary">
        OPS! Não encontramos essa página.
      </h1>
      <h2 className="font-heebo text-xl font-medium text-custom-primary">
        Voltando em:{" "}
        <strong className="font-extrabold text-b-quaternary"> {timer} </strong>
      </h2>

      <Link href="/">
        <button className="h-12 w-48 rounded bg-b-quaternary font-heebo text-xl font-normal text-custom-primary">
          Voltar para a Home
        </button>
      </Link>
    </section>
  );
}
