"use client";
import Link from "next/link";
import Container from "./global/container";
import Image from "next/image";
import { useState, useEffect, useRef} from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const csRef = useRef(null);
  const webdevRef = useRef(null);
  const langRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);  // Ref for dropdown menus

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        csRef.current && !csRef.current.contains(event.target) &&
        webdevRef.current && !webdevRef.current.contains(event.target) &&
        langRef.current && !langRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

               {/* CS Fundamental Dropdown */}
               <div ref={csRef} className="relative">
                <button
                  onClick={() => toggleDropdown("CS Fundamental")}
                  className="hover:text-foreground/80 text-sm flex items-center gap-1"
                >
                  CS Fundamental <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "CS Fundamental" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "CS Fundamental" && (
                  <ul className="absolute top-full mt-2 left-0 bg-white text-black border border-gray-200 shadow-lg rounded-md py-2 z-[999] w-40">
                   
                    <li><Link href="/operating-system/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">Operating System</Link></li>
                    <li><Link href="/computer-network/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">Computer Network</Link></li>
                    <li><Link href="/dbms/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">DBMS</Link></li>
                    <li><Link href="/oops/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">OOPS</Link></li>
                    <li><Link href="/sql/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">SQL</Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Web Dev Dropdown */}
              <div ref={webdevRef} className="relative">
                <button
                  onClick={() => toggleDropdown("webdev")}
                  className="hover:text-foreground/80 text-sm flex items-center gap-1"
                >
                  Web Development <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "webdev" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "webdev" && (
                  <ul className="absolute top-full mt-2 left-0 bg-white text-black border border-gray-200 shadow-lg rounded-md py-2 z-[999] w-40">
                    <li><Link href="/html/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">HTML</Link></li>
                    <li><Link href="/css/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">CSS</Link></li>
                    <li><Link href="/learn-javascript" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">JavaScript</Link></li>
                    <li><Link href="/react/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">React.Js</Link></li>
                    <li><Link href="/next/introduction" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">Next.Js</Link></li>
                  </ul>
                )}
              </div>

              {/* Programming Languages Dropdown */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => toggleDropdown("languages")}
                  className="hover:text-foreground/80 text-sm flex items-center gap-1"
                >
                  Programming Languages <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "languages" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "languages" && (
                  <ul className="absolute top-full mt-2 left-0 bg-white text-black border border-gray-200 shadow-lg rounded-md py-2 z-[999] w-56">
                    <li><Link href="/learn-c" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">C (Programming)</Link></li>
                    <li><Link href="/cpp" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">C++</Link></li>
                    <li><Link href="/java" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">Java</Link></li>
                    <li><Link href="/python" className="block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ease-in-out">Python</Link></li>
                  </ul>
                )}
              </div>

            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;