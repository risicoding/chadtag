import DemoVideo from '@/sections/demo-vid';
import { Hero } from '@/sections/hero';
import Image from 'next/image';
import React from 'react';
import { Features } from '@/sections/features';
import Transformations from '@/sections/transformations';
import Testimonials from '@/sections/testimonials';
import Cta from '@/sections/cta';
import Footer from '@/sections/footer';
import { Coaching } from '@/sections/coaching';

const Page = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-12 sm:space-y-28">
      <Hero />
      <Image
        src='/book-mockup.jpg'
        className="relative top-0 flex sm:hidden"
        width={750}
        height={700}
        alt="chadmax-book-mockup"
      />
      <DemoVideo />
      <Features />
      <Coaching />
      <Transformations />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
