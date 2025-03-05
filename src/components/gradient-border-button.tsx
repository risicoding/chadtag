import React from 'react';

export const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="gradient rounded-full p-[2px]">
      <div className="rounded-full bg-white px-4 py-2">{children}</div>
    </button>
  );
};
