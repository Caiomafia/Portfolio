export default function Button({
  children,
  typeButton,
  bgButton,
}: {
  children: React.ReactNode;
  typeButton?: "button" | "submit" | "reset" | undefined;
  bgButton?: any;
}) {
  return (
    <button
      type={typeButton}
      className={`flex h-8 w-28 items-center justify-center gap-2 rounded-xl ${
        bgButton ? "bg-b-secondary" : "bg-b-quaternary"
      } cursor-pointer font-heebo text-sm font-medium text-custom-primary hover:scale-95 hover:opacity-90 sm:h-11 sm:w-32 sm:text-base lg:w-40`}
    >
      {children}
    </button>
  );
}
