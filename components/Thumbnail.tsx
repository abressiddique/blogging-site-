"use client";

import { IPost, posts } from "@/posts";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Thumbnail() {
  const pathname = usePathname().split("/")[2];
  const post = posts.find((p: IPost) => p.slug === pathname);
  return (
    <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative">
      <Image
        src={post?.thumbnail || "/images/hero.png"}
        alt=""
        fill
        sizes="100vh"
      />
    </div>
  );
}
