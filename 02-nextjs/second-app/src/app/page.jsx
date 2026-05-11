import Image from "next/image";
import React from "react";
import hero from './../../public/hero.jpeg'

const Home = () => {
    return (
        <div className="m-20 flex gap-15">
            <div className="h-200 w-200 bg-amber-300 relative">
                {/* <img src="/img/1.jpeg" alt="" /> */}
                <Image src="/img/1.jpeg" fill={true} alt="mobile phone" />
            </div>
            <div className="flex flex-col gap-20">
                <div className="bg-purple-300 h-50 w-50  rounded-full relative">
                    <Image
                        src="/2.jpeg"
                        fill={true}
                        alt="desktop"
                        className="rounded-full p-2"
                    />
                </div>
                <div className="bg-purple-300 h-50 w-50  rounded-full relative">
                    <Image
                        src={hero}
                        fill={true}
                        alt="desktop"
                        className="rounded-full p-2"
                        placeholder="blur"
                        blurDataURL=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
