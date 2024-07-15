import React from "react";
import Image from 'next/image';


const Helpline = () => {
    return (
        <div className="text-center help2 my-8 pixel1">


            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className=" p-4 col-span-1"></div>
                <div className=" p-4 col-span-4">
                <h1 className=" font-bold pixel pixel2">Helping a local  <br /> <span className="help">business reinvent itself</span></h1>
                <p className="pixel community3">We reached here with our hard work and dedication</p>
                   
                </div>
                <div className=" p-4 col-span-6">
                <div className="grid grid-cols-12 gap-4 mt-8">
                <div className=" p-4 col-span-2">
                <Image className=" items-center" src="/src/community/icon8.png" alt="Logo" width={40} height={40} />
              
                </div>
                <div className=" p-4 col-span-4">
               <p className="help3 font-bold">2,245,341</p>
               <p className="help4 ">Members</p>
              
                </div>
                <div className=" p-4 col-span-2">
                    <Image className=" items-center" src="/src/community/icon9.png" alt="Logo" width={40} height={40} /></div>
                    <div className=" p-4 col-span-4">
               <p className="help3 font-bold">46,328</p>
               <p className="help4 ">Clube</p>
              
                </div>
                <div className=" p-4 col-span-2">
                    <Image className=" items-center" src="/src/community/icon11.png" alt="Logo" width={40} height={40} /></div>
                    <div className=" p-4 col-span-4">
               <p className="help3 font-bold">828,867</p>
               <p className="help4 ">Event Booking</p>
              
                </div>
                <div className=" p-4 col-span-2">
                <Image className=" items-center" src="/src/community/icon10.png" alt="Logo" width={40} height={40} />
                
                </div>
                <div className=" p-4 col-span-4">
               <p className="help3 font-bold">1,926,436</p>
               <p className="help4 ">Payment</p>
              
                </div>


                </div>
                

                </div>
                
            </div>
        </div>
      
  );
};

export default Helpline;
