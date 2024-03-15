import CustomIcon from "../custom-icon";

interface SocialsProps {
  urlSocial: string;
  nameSocial: string;
  iconName: string;
}

export default function Socials({
  urlSocial,
  nameSocial,
  iconName,
}: SocialsProps) {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-md bg-b-secondary shadow-md transition-all hover:bg-b-primary">
      <a href={urlSocial} target="_blank">
        <abbr title={nameSocial}>
          <CustomIcon icon={iconName} color="#fff" size="30" />
        </abbr>
      </a>
    </button>
  );
}
