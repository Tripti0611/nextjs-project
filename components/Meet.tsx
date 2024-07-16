import React from "react";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";


const Meet = () => {
    return (
        <div className="text-center my-8 justify-items-center bg-bg">


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
               
                <div className=" p-4  ">
                    <Image
                        className=" "
                        src="/src/community/image9.png"
                        alt="img"
                        layout="intrinsic"
                        width={320}
                        height={320}

                    />
                </div>
                <div className=" p-4 md:text-center md:pr-[20%] md:-ml-[18%]">
                    
                    <p className="text-justify text-sm">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <p className="text-justify text-lg text-green mt-1">
                    Tim Smith

                    </p>
                    <p className="text-justify text-sm mt-1">
                    British Dragon Boat Racing Association

                    </p>

                    <div>
                    <div className="grid grid-cols-12 gap-2">
                <div className=" p-2 col-span-1">
                <Image src="/src/client/Logo7.png" alt="Logo" width={40} height={40} />
                </div>
                <div className=" p-2 col-span-1">
                <Image src="/src/client/Logo1.png" alt="Logo" width={40} height={40} />
                </div>
                <div className=" p-2 col-span-1">
                    <Image src="/src/client/Logo6.png" alt="Logo" width={40} height={40} /></div>
                <div className=" p-2 col-span-1">
                <Image src="/src/client/Logo5.png" alt="Logo" width={40} height={40} />
                </div>
                <div className=" p-2 col-span-1">
                <Image src="/src/client/Logo7.png" alt="Logo" width={40} height={40} />
                </div>
                <div className=" p-2 col-span-1">
                <Image src="/src/client/Logo4.png" alt="Logo" width={40} height={40} />
                </div>
                <div className=" p-2 col-span-4">
                <button className=" px-4 py-2 rounded text-green">Meet all customers
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button>
                </div>
               


                </div>
                    

                    </div>
                    
                </div>
                
            </div>
        </div>
      
  );
};

export default Meet;
