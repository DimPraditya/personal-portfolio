import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141420]/90 backdrop-blur border-b border-gray-700 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="Blue_circle_logo.svg" className="max-h-8" alt="logo" />
          <span className="text-white text-xl font-semibold tracking-wide">
            MyPortfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center text-sm font-medium">
          <Link
            href="#Hero"
            className="text-white px-4 py-2 rounded-md hover:bg-blue-500/20 transition"
          >
            About
          </Link>
          <Link
            href="#Portfolio"
            className="text-white px-4 py-2 rounded-md hover:bg-blue-500/20 transition"
          >
            Portfolio
          </Link>
          <Link
            href="#Contact"
            className="text-white px-4 py-2 rounded-md hover:bg-blue-500/20 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-md hover:bg-[#222233] transition focus:outline-none">
              <AlignJustify className="text-white h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#1f1f2e] border border-gray-700 text-white min-w-[180px] rounded-lg shadow-md"
            >
              <DropdownMenuLabel className="text-gray-300 px-3 py-1">
                Menu
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-600" />
              <DropdownMenuItem asChild>
                <Link
                  href="#Hero"
                  className="w-full hover:bg-[#2a2a3a] px-3 py-2 rounded-md"
                >
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="#Portfolio"
                  className="w-full hover:bg-[#2a2a3a] px-3 py-2 rounded-md"
                >
                  Portfolio
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="#Contact"
                  className="w-full hover:bg-[#2a2a3a] px-3 py-2 rounded-md"
                >
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
