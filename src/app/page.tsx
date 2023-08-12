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
        <div className='flex items-center'>
          <div className='relative h-8 w-8 mr-4'>
            <Image
              fill
              alt='Logo'
              src='/logo.png'
            />
          </div>
          <h1 className={(cn("font-bold text-white "), font.className)}>
            Genius
          </h1>
        </div>
        <div className='flex items-center gap-x-2'>
          <Button
            variant='outline'
            className='rounded-full text-black font-bold'
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
        <div className='flex flex-col justify-between lg:flex-row md:flex-row'>
          <div className='bg-[#2b0226] m-5 p-5 rounded-2xl'>
            <p>
              Experience AI-driven artistry! Effortlessly convert images into
              music and videos. A must-have for creators, unlocking endless
              inspiration and imagination
            </p>
            <div className='mt-5'>
              <Image
                className='w-10 h-10 rounded-full'
                width={500}
                height={500}
                alt='Testimonial image'
                src='https://headshots-inc.com/wp-content/uploads/2021/04/Website-Photo-3.png'
              />
            </div>
          </div>
          <div className='bg-[#2b0226] m-5 p-5 rounded-2xl'>
            <p>
              Unlock boundless creativity! This AI tool seamlessly transforms
              images into music and videos, an essential for artists and
              marketers. Ignite your imagination and watch your ideas flourish!
            </p>
            <div className='mt-5'>
              <Image
                className='w-10 h-10 rounded-full'
                width={500}
                height={500}
                alt='Testimonial image'
                src='https://headshots-inc.com/wp-content/uploads/2021/04/Website-Photo-3.png'
              />
            </div>
          </div>
          <div className='bg-[#2b0226] m-5 p-5 rounded-2xl'>
            <p>
              Elevate creativity with AI magic! Convert pixels into captivating
              music and videos effortlessly. Perfect for innovators and content
              creators seeking limitless expression.
            </p>
            <div className='mt-5'>
              <Image
                className='w-10 h-10 rounded-full'
                width={500}
                height={500}
                alt='Testimonial image'
                src='https://headshots-inc.com/wp-content/uploads/2021/04/Website-Photo-3.png'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
