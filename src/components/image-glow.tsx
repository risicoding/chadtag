import Image from 'next/image';

const ImageGlow = () => {

  return (
    <div className="relative hidden p-4 sm:flex">
      <div className="z-20">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeWAmVRnefTXOCu-Y0rdFt5tcypyR9bpXL5Z0t2cAAUXadjaDRZ-ZiA1H&s=10"
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
