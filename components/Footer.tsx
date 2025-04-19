import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full z-10 blur-[14rem]"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full z-20">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/coding75darklogo.png"
              alt="Coding75 Logo"
              height={90}
              width={200}
              quality={100}
            />
          </Link>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            Learn, Explore, and Master Programming
          </p>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Quick Links</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/dsa/introduction"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    DSA
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/cpp/introduction"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    CPP
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/java/java-syllabus"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    JAVA
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Follow Us</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="https://www.youtube.com/@AbhinavAwasthi"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Youtube
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://www.linkedin.com/in/abhinavawasthi01/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://t.me/cpabhinav"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Telegram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://whatsapp.com/channel/0029Va55Idf1NCrU16kHOt3j"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Legal</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-base font-medium text-white">Get in Touch</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    support@crackdsa.com
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    +91 8574857485
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full z-20">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://crackdsa.com/"
            target="_blank"
            className="underline underline-offset-2 hover:text-foreground transition-all duration-300 pr-1"
          >
            crackDSA
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
