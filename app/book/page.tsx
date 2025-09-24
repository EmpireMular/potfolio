"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="flex flex-col w-full overflow-hidden  h-full bg-black/[0.96] bg-grid-white/[0.02]">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToShopifyStores={() => {}}
          scrollToBrands={() => {}}
        />
        <div className="text-4xl pb-5 md:text-6xl text-center
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/udoyebismack73/30min" className="mt-10 mb-10 w-[100%] h-full" />
      </div>
    </>
  );
};

export default Book;