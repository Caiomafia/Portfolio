import CustomIcon from "../custom-icon";

export default function Technologies() {
  return (
    <div className="flex flex-wrap items-center">
      <a
        href="https://www.typescriptlang.org/docs/"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="TypeScript Documentation"
      >
        <abbr title="TypeScript">
          <CustomIcon icon="typescript" size="35" color="#9955e8" />
        </abbr>
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="JavaScript Documentation"
      >
        <abbr title="JavaScript">
          <CustomIcon icon="javascript" size="30" color="#9955e8" />
        </abbr>
      </a>

      <a
        href="https://react.dev/"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="React Documentation"
      >
        <abbr title="React">
          <CustomIcon icon="react" size="30" color="#9955e8" />
        </abbr>
      </a>

      <a
        href="https://nextjs.org/"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="Next.js Documentation"
      >
        <abbr title="Next">
          <CustomIcon icon="next" size="30" color="#9955e8" />
        </abbr>
      </a>

      <a
        href="https://styled-components.com/"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="styled-components Documentation"
      >
        <abbr title="styled-components">
          <CustomIcon icon="styledcomponents" size="40" color="#9955e8" />
        </abbr>
      </a>

      <a
        href="https://tailwindcss.com/docs/installation"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="Tailwind CSS Documentation"
      >
        <abbr title="Tailwind">
          <CustomIcon icon="tailwind" size="30" color="#9955e8" />
        </abbr>
      </a>

      <a
        href="https://sass-lang.com/"
        target="_blank"
        className="rounded p-1 transition-all hover:bg-b-primary"
        aria-label="SASS Documentation"
      >
        <abbr title="SASS">
          <CustomIcon icon="sass" size="30" color="#9955e8" />
        </abbr>
      </a>
    </div>
  );
}
