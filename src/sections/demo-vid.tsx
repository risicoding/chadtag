'use client';
import { Button } from '@/components/ui/button';
import Player from 'react-player';

const DemoVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4">
      <Button variant="outline">
        <h2 className="hidden gap-2 text-lg font-bold sm:flex">
          The <span className="text-gradient">ultimate</span> guide for
          improving your looks
        </h2>
        <h2 className="flex sm:hidden">Why buy it</h2>
      </Button>
      <div className="relative w-full max-w-4xl">
        <Player
          url="https://video.wixstatic.com/video/948f47_42529b36ff22450d9e37d473a9723f7c/1080p/mp4/file.mp4"
          controls
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default DemoVideo;
