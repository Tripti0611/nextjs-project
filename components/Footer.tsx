import React from "react";
import Image from 'next/image';


const Footer = () => {
    return (
        <div className="text-center my-8 pixel1">


            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className=" p-4 col-span-1"></div>
                <div className=" p-4 col-span-4">
                    <Image
                        className=" pixel1"
                        src="/src/community/pana.png"
                        alt="img"
                        layout="intrinsic"
                        width={430}
                        height={430}

                    />
                </div>
                <div className=" p-4 col-span-6">
                    <h1 className=" font-bold pixel pixel2">How to design your site footer  like <br /> we did</h1>
                    <p className="pixel3">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <div className="pixel4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded self-start mt-4 ">Learn More</button>
                    </div>


                </div>
                
            </div>
        </div>
      
  );
};

export default Footer;
