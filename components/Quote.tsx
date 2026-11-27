import type { ReactNode } from "react";

type QuoteProps = {
  children: ReactNode;
  large?: boolean;
};

export default function Quote({ children, large = false }: QuoteProps) {
  return (
    <blockquote
      className={`max-w-prose font-serif font-normal italic leading-snug text-niek ${
        large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
      }`}
    >
      <p>{children}</p>
    </blockquote>
  );
}
