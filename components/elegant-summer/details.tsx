"use client";
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  ShoppingBag,
  Star,
} from "lucide-react";
import Image from "next/image";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  product: {
    title: string;
    img_url: string;
    slug: string;
  };
}

const Details = ({ product }: Props) => {
  return (
    <div className="flex gap-8">
      <div>
        <button
          onClick={() => window.history.back()}
          className="p-5 cursor-pointer group rounded-[33%] hover:bg-gray-100 transition-colors duration-200"
        >
          <ArrowLeft className="w-7 h-7" />
        </button>
      </div>

      <div className="flex w-full gap-16 items-stretch">
        <div className="border border-gray-200 rounded-xl p-4 flex-1">
          <div className="flex gap-6 mb-2">
            <div className="flex items-center">
              <Button variant="ghost" size="icon-lg" className="rounded-[33%]">
                <Heart />
              </Button>
              <strong>177</strong>
            </div>
            <Button variant="ghost" size="icon-lg" className="rounded-[33%]">
              <MessageCircle />
            </Button>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
              <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
              <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
              <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
              <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
              <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="relative w-full max-w-md">
              <Image
                src={`/elegant-summer/${product.img_url}`}
                alt={product.title}
                width={800}
                height={1000}
                sizes="(max-width: 768px) 100vw, 500px"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col max-w-[600px] max-h-[650px] pr-30">
          <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star size={16} color="#E5CD71" fill="#E5CD71" />
              <Star size={16} color="#E5CD71" fill="#E5CD71" />
              <Star size={16} color="#E5CD71" fill="#E5CD71" />
              <Star size={16} color="#E5CD71" fill="#E5CD71" />
              <Star size={16} color="#E5CD71" fill="#E5CD71" />
            </div>
            <p className="text-sm text-gray-500 mt-1">4.9 (177 reviews)</p>
          </div>

          <p className="text-3xl font-bold mt-8 ">₹9, 999</p>
          <div className="mt-6">
            <p className="mb-2">Color</p>
            <div className="flex gap-2">
              <div className="h-6 w-6 rounded-lg bg-gray-200 text-center h-8 w-8"></div>
              <div className="h-6 w-6 rounded-lg bg-gray-200 text-center h-8 w-8"></div>
              <div className="h-6 w-6 rounded-lg bg-gray-200 text-center h-8 w-8"></div>
              <div className="h-6 w-6 rounded-lg bg-gray-200 text-center h-8 w-8"></div>
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-2">Size</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                S
              </Button>
              <Button variant="outline" size="sm">
                M
              </Button>
              <Button variant="outline" size="sm">
                L
              </Button>
              <Button variant="outline" size="sm">
                XL
              </Button>
            </div>
            <p className="text-[#E5CD71] text-xs underline mt-1">Size Guide</p>
          </div>
          <div className="mt-6">
            <p className="mb-2">Delivery</p>
            <div className="flex gap-2 items-center">
              <Input placeholder="Enter pincode" className="w-40" />
              <p className="text-[#E5CD71] text-xs underline">Check</p>
            </div>
          </div>

          <Button variant="destructive" className="w-full mt-auto mb-4">
            <ShoppingBag />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
