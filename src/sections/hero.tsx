import React from "react";
import { Cover } from "@/components/aceternity/cover";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-230px)] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-5xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-black">
        Complete{" "}
        <Cover className="text-yellow-500">
          <span className="bg-clip-text text-transparent gradient ">
            looksmaxing
          </span>
        </Cover>
        <br />
        from <span className="text-yellow-500 border-none">Hair</span> to{" "}
        <span className="text-yellow-500">Toe</span>
      </h1>
      <div className="space-x-4">
        <Button>Explore courses</Button>
        <Button variant="outline">Learn more </Button>
      </div>
    </section>
  );
}
