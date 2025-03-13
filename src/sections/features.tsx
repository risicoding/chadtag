import { FaCircleDot } from 'react-icons/fa6';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { items } from '../content';

export const Features = () => {
  return (
    <section className="flex flex-col items-start sm:items-end">
      <Button variant="outline" className="mx-auto text-lg font-bold">
        What you get
      </Button>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {items.map((feature, index) => (
          <Feature
            key={feature.category}
            title={feature.category}
            icon={feature.icon}
            items={feature.items}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  items,
  icon,
  index,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex flex-col px-6 py-10 lg:border-r dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <div className="px-10">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <FaCircleDot className="size-2" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Feature = ({
  title,
  items,
  icon,
  index,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'group relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover:h-8 group-hover:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <div className="px-10">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <FaCircleDot className="size-2" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
