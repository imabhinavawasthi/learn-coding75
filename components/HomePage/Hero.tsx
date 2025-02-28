import Image from "next/image";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";

function Hero() {
  return (
    <Wrapper>
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_110%)] z-10 opacity-5 h-[150vh] bg-[position:0px_-20px]" />

      <Container className="z-20">
        <div className="flex flex-col items-center justify-center py-20 h-full ">
          <a href="https://coding75.com/" target="_blank">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-20 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                learn.coding75.com (Powered by coding75.com)
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </a>

          <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full z-20">
            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-bold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
              Your Ultimate Coding Documentation Hub
            </h1> 
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Learn, Explore, and Master Programming
            </p>
            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
              <Link
                href="#"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
              >
                <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 ">
                  Explore Docs
                </p>
                {/* <Button
            size="sm"
            className="rounded-full hidden lg:flex border border-foreground/20"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button> */}
              </Link>
            </div>
          </div>

          <div className="relative flex items-center py-10 md:py-20 w-full">
            <div className="absolute top-1/2 left-1/2 z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="-m-2 z-20 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src="/hero-img.png"
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
              />
              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Hero;
