import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";
import { Lora } from "next/font/google";

const foum = Lora({
    subsets: ["latin"],
    weight: ["400"],
});

const logos = [
    {
      image: "/logo/logoipsum-248.svg",
    },
    {
      image: "/logo/logoipsum-245.svg",
    },
    {
      image: "/logo/logoipsum-225.svg",
    },
    {
      image: "/logo/saas-ai.svg",
    },
    {
      image: "/logo/logoipsum-249.svg",
    },
    {
      image: "/logo/stripelogo.png",
    },
];

const Brands = () => {
    return ( 
        <div>
            <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
                <div className="text-4xl md:pb-8 md:text-7xl text-center
                bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-200 bg-opacity-50">
                    The best brands <br /> choose us
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
                    From small business to large corporations, we have helped many
                    brands elevate their business.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center mx-auto md:w-3/5 cursor-pointer gap-4">
                  {logos.map((logo, i) => (
                    <div key={i} className="p-4 md:p-8 flex justify-center">
                      <Image
                        priority
                        src={logo.image}
                        width={120}
                        height={120}
                        alt="brand logo"
                        className="w-full h-auto max-w-[100px] md:max-w-[120px] rounded-lg object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div
                 className={cn(
                    "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-white",
                    foum.className
                  )}
                >
                    &quot; We got rid of nearly a dozen different tools because of what
                    Bod does for us. &quot;
                </div>

                <div className="items-center flex justify-center flex-col text-white">
                    <Image
                      src="/logo/pot.jpg"
                      alt="Canva logo"
                      width={1000}
                      height={1000}
                      className="pt-2 xl:pt-0 w-10 xl:w-14"
                    />
                    <div className="text-center">
                        <div className="text-sm font-medium pt-4">Carlos Henandez</div>
                        <div className="text-sm"></div>
                    </div>  
                </div>
            </div>    
        </div>
    );
}
 
export default Brands;