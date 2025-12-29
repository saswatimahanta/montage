import React from "react";
import Image from "next/image";
import { images } from "@/app/constants/elegant-summer-images";

const ElegantSummer = () => {
  return (
    <div className="masonryContainer">
      <div className="nouseyet">
        <div data-test-id="max-width-container">
          <div className="w-full">
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="w-[275px] mb-4 break-inside-avoid">
                  <Image
                    src={`/elegant-summer/${image}`}
                    alt="image"
                    width={271}
                    height={0}
                    sizes="271px"
                    className="h-auto w-full rounded-md object-cover shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantSummer;
