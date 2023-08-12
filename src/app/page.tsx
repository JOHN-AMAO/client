"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <nav
        className='p-4 bg-transparent flex items-center
        justify-between
      '
      >
        <div className='flex'>
          <div className='relative h-8 w-8 mr-4'>
            <Image
              fill
              alt='Logo'
              src='/logo.png'
            />
          </div>
          <h1 className={(cn("font-bold text-white"), font.className)}>
            Genius
          </h1>
        </div>
        <div className='flex items-center gap-x-2'>
          <Button
            variant='outline'
            className='rounded-full text-black'
          >
            Get Started
          </Button>
        </div>
      </nav>
      <main className='flex min-h-screen flex-col items-center '>
        <div className='text-white font-bold py-24 text-center space-y-5'>
          <div
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          space-y-5 font-extrabold'
          >
            <h1>The Best AI Tool for</h1>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700'>
              <TypewriterComponent
                options={{
                  strings: [
                    "Chatbot.",
                    "Photo Generation.",
                    "Music Generation.",
                    "Code Generation.",
                    "Video Generation.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className='text-sm md:text-xl font-light text-zinc-400'>
            Create Content using AI 10X faster
          </div>
        </div>
      </main>
    </>
  );
}
