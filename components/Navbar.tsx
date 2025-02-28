import Link from "next/link";
import Container from "./global/container";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-4 h-16 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2 py-5">
              <Image
                src="/coding75darklogo.png"
                alt="Coding75 Logo"
                height={80}
                width={200}
                quality={100}
              />
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link href="/dsa" className="hover:text-foreground/80 text-sm">
                DSA
              </Link>
              <Link href="/cpp" className="hover:text-foreground/80 text-sm">
                CPP
              </Link>
              <Link href="/java" className="hover:text-foreground/80 text-sm">
                Java
              </Link>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
