export default function ContainerItens({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string | undefined;
}) {
  return (
    <section
      id={id}
      className="shadowContainer container mt-8 min-h-full w-full rounded-3xl bg-b-terciary p-6 sm:p-8 "
    >
      {children}
    </section>
  );
}
