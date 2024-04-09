export default function Footer() {
  const text = " <Bruno Barreiras/>";

  return (
    <footer className="mt-5 flex h-16 items-center justify-center">
      <p className="font-kalam text-base font-bold text-custom-primary">
        Desenvolvido por
        <strong className="font-kalam text-b-quaternary">{text}</strong>
      </p>
    </footer>
  );
}
