import React from "react";
import Image from 'next/image';


const Pixel = () => {
    return (
        <div className="text-center my-8 justify-items-center">


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                
                <div className=" p-4">
                    <Image
                        className=" justify-items-center"
                        src="/src/community/frame.png"
                        alt="img"
                        layout="intrinsic"
                        width={430}
                        height={430}

                    />
                </div>
                <div className=" p-4 md:text-center md:pr-[30%] md:-ml-[20%]">
                    <h1 className=" font-bold text-justify  mt-12 text-30px text-graypixel2 ">The unseen of spending three  years at Pixelgrade</h1>
                    <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <div className="mr-82p">
                    <button className="bg-green text-white px-4 py-2 rounded self-start mt-4 ">Learn More</button>
                    </div>


                </div>
                
            </div>
        </div>
      
  );
};

export default Pixel;
