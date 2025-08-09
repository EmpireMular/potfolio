"use client"

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-snippet";


const GraphicDesign = () => {
    return ( 
        <div>
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center
                bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-200 bg-opacity-50">
                Graphic Design <br />
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                We Create stunning visuals for your brand. From logos to social media
                posts, got you covered
                </p>


                <div
                className="
                    mt-10
                    grid grid-cols-1 md:grid-cols-1 gap-8
                    xl:flex xl:flex-cols-2 xl:items-center xl:justify-center
                    max-w-3xl mx-auto
                "
                >
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full"
                >
                    <ThreeDCardExample />
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full"
                >
                    <EvervaultCardSnippet />
                </motion.div>
                </div>


            </div>
        </div>
    );
}
 
export default GraphicDesign;
