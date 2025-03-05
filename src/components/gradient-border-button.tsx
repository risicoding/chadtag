import React from 'react';

const GardientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="gradient animate-pulse rounded-full p-[2px]">
      <div className="rounded-full bg-white px-4 py-2">{children}</div>
    </button>
  );
};

export default GardientButton;
