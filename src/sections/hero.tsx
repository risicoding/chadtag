import React from 'react';
import { Cover } from '@/components/aceternity/cover';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-250px)] flex-col items-center justify-center gap-3 px-8 sm:items-center">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-around sm:text-start">
        <div className="flex flex-col items-end gap-4">
          <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-clip-text py-6 text-4xl font-semibold text-black sm:text-5xl md:text-4xl lg:text-6xl">
            Complete{' '}
            <Cover className="text-yellow-500">
              <span className="gradient bg-clip-text text-transparent">
                looksmaxing
              </span>
            </Cover>
            <br />
            from <span className="border-none text-yellow-500">
              Hair
            </span> to <span className="text-yellow-500">Toe</span>
          </h1>

          <div className="hidden w-full items-start space-x-2 sm:flex sm:space-x-6">
            <Button>Explore courses</Button>
            <Button variant="outline">Learn more </Button>
          </div>
        </div>
        <div>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeWAmVRnefTXOCu-Y0rdFt5tcypyR9bpXL5Z0t2cAAUXadjaDRZ-ZiA1H&s=10"
            className="relative top-8 hidden sm:flex"
            width={250}
            height={333}
            alt="chadmax-book-mockup"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center space-x-4 sm:hidden sm:space-x-6">
        <Button>Explore course</Button>
        <Button variant="outline">Learn more </Button>
      </div>
    </div>
  );
}

export const HeroPlayer = () => {};
