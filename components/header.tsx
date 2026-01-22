import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { label: "About", href: "/about" },
            { label: "Links", href: "/links" },
            { label: "Contact", href: "/contact" }
          ].map((item) => (
            <Link
              className="text-sm font-mono text-foreground/70 hover:text-primary duration-200 transition-colors"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </header>
    </div>
  );
};
