"use client";

import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { data } from "@/app/constants/elegant-summer-images";
import { Button } from "../ui/button";
import { ArrowUpRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

const breakpointColumnsObj = {
  default: 5,
  1536: 5,
  1280: 4,
  1024: 3,
  768: 2,
  640: 1,
};

const ElegantSummer = () => {
  return (
    <div className="">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4"
      >
        {data.map((item, index) => (
          <div key={index} className="mb-4 group relative">
            <Image
              src={`/elegant-summer/${item.img_url}`}
              alt="Elegant summer"
              width={600}
              height={800}
              className="w-full h-auto rounded-xl shadow-md transition duration-300 group-hover:shadow-xl"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 rounded-xl cursor-pointer">
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-3 right-3 z-10
               opacity-0 translate-y-[-8px]
               group-hover:opacity-100
               group-hover:translate-y-0
               transition-all duration-300 cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Link href={`/elegant-summer/${item.slug}`}>
                <Button
                  variant="outline"
                  className="absolute bottom-3 left-3 z-10
               opacity-0 translate-y-[-8px]
               group-hover:opacity-100
               group-hover:translate-y-0
               transition-all duration-300 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" /> 9,999/-
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ElegantSummer;
