import Image from 'next/image';

const ImageGlow = () => {

  return (
    <div className="relative hidden p-4 sm:flex">
      <div className="z-20">
        <Image
          src='/book-mockup.jpg'
          className="hidden bg-blend-multiply sm:flex"
          width={250}
          height={333}
          alt="chadmax-book-mockup"
        />{' '}
      </div>
    </div>
  );
};

export default ImageGlow;
