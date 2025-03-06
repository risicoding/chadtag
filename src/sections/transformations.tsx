import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

const Transformations = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <Button variant="outline" className="text-lg font-bold">
        Real world transformations
      </Button>
      <Carousel className="w-full max-w-xs sm:max-w-md">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-clip p-0">
                  <CardContent className="flex items-center justify-center object-cover p-0">
                    <Image
                      src={`/transformations/${index + 1}.jpeg`}
                      width={500}
                      height={100}
                      alt={`Chadmax-transformations-${index + 1}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default Transformations;
