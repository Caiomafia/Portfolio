"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import CustomIcon from "../custom-icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-50 flex h-24 w-full items-center justify-center rounded-lg shadow-2xl">
      <section className="container flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="Logo - Bruno Barreiras"
          />
        </Link>

        <nav className="hidden items-center gap-10 scroll-smooth md:flex">
          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/"
          >
            Home
          </Link>

          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/#about"
          >
            Sobre
          </Link>

          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/projects"
          >
            Projetos
          </Link>

          <Link
            className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
            href="/#contact"
          >
            Contato
          </Link>
        </nav>

        <h3 id="menu-com-links" className="hidden">
          Menu
        </h3>
        <button
          className="flex flex-col gap-1 p-4 text-custom-primary md:hidden"
          onClick={toggleMenu}
          name="menu com links de navegação"
          aria-label="menu com links de navegação"
        >
          <CustomIcon icon="menu" color="#fff" size="30" />
        </button>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-5 bg-b-terciary"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          >
            <button
              className="mr-10 mt-10 self-end text-custom-primary"
              onClick={toggleMenu}
            >
              <CustomIcon icon="close" color="#fff" size="30" />
            </button>

            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Link
                className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
                href="/#about"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>

              <Link
                className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
                href="/projects"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </Link>

              <Link
                className="font-heebo text-xl font-normal text-custom-primary transition hover:text-custom-terciary"
                href="/#contact"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
