import React from "react";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";


const Meet = () => {
    return (
        <div className="text-center my-8 pixel1 help2">


            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className=" p-4 col-span-1"></div>
                <div className=" p-4 col-span-4 ">
                    <Image
                        className=" pixel1"
                        src="/src/community/image9.png"
                        alt="img"
                        layout="intrinsic"
                        width={380}
                        height={380}

                    />
                </div>
                <div className=" p-4 col-span-6">
                    
                    <p className="pixel3">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <p className="meet3 meet meet2">
                    Tim Smith

                    </p>
                    <p className="pixel3 meet2">
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
                <button className=" px-4 py-2 rounded meet">Meet all customers
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
