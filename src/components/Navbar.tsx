"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/consts";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b backdrop-blur px-4 supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-gray-900/90">
      <div className="flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex flex-row items-center text-2xl font-bold"
        >
          <Image
            src="/images/pokeball.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer px-2"
          />
          Trainer&apos;s Quest
        </Link>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-medium px-2",
                pathname === item.href ? "text-blue-500" : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block border-1 rounded-md">
          <Button asChild>
            <Link href={"/wallet"}>Connect Wallet</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size={"icon"}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-2/5">
            <SheetTitle hidden>Menu</SheetTitle>
            <SheetDescription hidden>Description</SheetDescription>
            <div className="mt-8 space-y-5 mx-2">
              {navItems.map((items) => (
                <Link
                  key={items.name}
                  href={items.href}
                  className={cn(
                    "block px-4 py-2 text-lg font-medium",
                    pathname === items.href ? "text-blue-500" : "text-gray-700"
                  )}
                >
                  {items.name}
                </Link>
              ))}
              <Button asChild className="mt-4 border-1 rounded-md">
                <Link href={"/wallet"} onClick={() => setIsOpen(false)}>
                  Connect Wallet
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
