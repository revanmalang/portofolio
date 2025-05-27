import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute top-16 z-30 w-full px-16 xl:px-0 xl:h-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-0 py-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-extrabold text-white tracking-wide font-serif drop-shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
          
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
