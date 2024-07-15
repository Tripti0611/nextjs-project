import React from "react";
import Image from 'next/image';


const Pixel = () => {
    return (
        <div className="text-center my-8 pixel1">


            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className=" p-4 col-span-1"></div>
                <div className=" p-4 col-span-4">
                    <Image
                        className=" pixel1"
                        src="/src/community/frame.png"
                        alt="img"
                        layout="intrinsic"
                        width={430}
                        height={430}

                    />
                </div>
                <div className=" p-4 col-span-6">
                    <h1 className=" font-bold pixel pixel2">The unseen of spending three <br /> years at Pixelgrade</h1>
                    <p className="pixel3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <div className="pixel4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded self-start mt-4 ">Learn More</button>
                    </div>


                </div>
                
            </div>
        </div>
      
  );
};

export default Pixel;
