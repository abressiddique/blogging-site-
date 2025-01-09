"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className="py-8 flex px-5 md:px-0 justify-between items-center border-t border-gray-300 dark:border-gray-600 mt-10">
      <Link href={"/"} className="flex space-x-2 items-center">
        <Image
          src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}
          width={36}
          height={36}
          alt="logo"
          priority
        />
        <div className="text-2xl">
          Meta<span className="font-bold">Blog</span>
        </div>
      </Link>
      <div className="flex flex-col md:flex-row text-gray-700 dark:text-gray-400 md:space-x-10">
        <Link href={"/"}>Terms of Use</Link>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Cookie Policy</Link>
      </div>
    </div>
  );
}
