import { Button } from '@/components/ui/button';
import GardientButton from './gradient-border-button';
const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between gap-3 border px-6 py-2 sm:rounded-full">
      {/* Logo */}
      <div className="text-xl font-bold">Chadtag</div>

      {/* Navigation Links */}
      <ul className="hidden gap-6 text-neutral-600 sm:flex">
        <li>
          <a href="#" className="hover:underline">
            Courses
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About
          </a>
        </li>
      </ul>

      {/* Buy Now Button */}
      <GardientButton>Buy now</GardientButton>
    </nav>
  );
};

export default Navbar;
