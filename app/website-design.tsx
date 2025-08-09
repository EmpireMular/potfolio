"use client"
import Image from "next/image";

const WebsiteDesign = () => {
    return ( 
        <div>
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center
                bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-200 bg-opacity-50">
                Website Design <br /> that works
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                Creating, designing and developing websites that works for your business
                </p>
            </div>
            

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-1.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-2.jpg" alt="image" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-3.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-4.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-5.jpg" alt="image" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-6.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-7.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-8.jpg" alt="image" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-9.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-10.jpg" alt="image" />
                    </div>
                    <div>
                        <Image width={400} height={300} className="h-auto max-w-full rounded-lg" src="/images/image-11.jpg" alt="image" />
                    </div>
                </div>
            </div>

    
        </div>
    );
}
 
export default WebsiteDesign;