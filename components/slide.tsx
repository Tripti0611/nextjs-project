import React from "react";
import Image from 'next/image';

interface SlideProps {
    img: string;
    title: string;
    mainTitle: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, mainTitle }) => {
    return (
        <div className="outline-none border-none relative">
            <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                <h3 className="text-accent text-[24px] lg:text-[28px]">{mainTitle}</h3>
                {/* <div className="bg-green text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursour-pointer hover:bg-darkgreen">Register</div> */}
                <Image
                    className="w-full h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
                    src={img}
                    alt={title}
                    layout="responsive"
                    width={2000}
                    height={1000}
                />
            </div>
        </div>
    );
};

export default Slide;
