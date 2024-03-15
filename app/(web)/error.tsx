"use client";

export default function Error() {
  return (
    <section className="flex min-h-[calc(100vh-6rem-5.25rem)] flex-col items-center justify-center gap-2 text-center">
      <h1 className="font-heebo text-2xl font-bold text-custom-primary">
        Erro! Essa página não pode ser acessada.
      </h1>
      <p className="font-heebo text-xl font-medium text-custom-primary">
        Desculpe, a página que você está procurando não pode ser acessada.
      </p>
    </section>
  );
}
