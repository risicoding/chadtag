import { Button } from "@/components/ui/button";
import GardientButton from "./gradient-border-button";
const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between gap-3 px-6 py-2 sm:w-4/5 mx-auto
      border rounded-full"
    >
      {/* Logo */}
      <div className="text-xl font-bold">Chadtag</div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-neutral-600">
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
