import React from "react";
import Image from 'next/image';


const Footer = () => {
    return (
        <div className="text-center my-8 justify-items-center">


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                
                <div className=" p-4 ">
                    <Image
                        className=" justify-items-center"
                        src="/src/community/pana.png"
                        alt="img"
                        layout="intrinsic"
                        width={430}
                        height={430}

                    />
                </div>
                <div className=" p-4 md:text-center md:pr-[30%] md:-ml-[20%]">
                    <h1 className=" font-bold text-justify mt-12 text-30px text-gray">How to design your site footer  like <br /> we did</h1>
                    <p className="text-justify text-sm">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <div className="mr-82p">
                    <button className="bg-green text-white px-4 py-2 rounded self-start mt-4 ">Learn More</button>
                    </div>


                </div>
                
            </div>
        </div>
      
  );
};

export default Footer;
