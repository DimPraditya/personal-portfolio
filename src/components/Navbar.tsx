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
    <nav className="container mx-auto p-4 max-w-full flex items-center justify-between fixed bg-[#141420]">
      <div className="flex gap-2">
        <img src="Blue_circle_logo.svg" className="max-h-8" alt="logo" />
      </div>
      <div className="hidden text-m md:flex gap-8">
        <Link href="#Hero">About </Link>
        <Link href="#Portfolio">Portfolio </Link>
        <Link href="#Contact" >Contact </Link>
      </div>
      <div className="md: hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignJustify />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>About</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Portfolio</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
