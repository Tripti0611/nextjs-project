import React from "react";
import Image from 'next/image';


const Helpline = () => {
    return (
        <div className="text-center bg-bg my-8 justify-items-center">


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                
                <div className=" p-4 ">
                <h1 className=" font-bold text-justify mt-12 text-30px text-gray">Helping a local  <br /> <span className="text-green">business reinvent itself</span></h1>
                <p className="pixel text-sm text-gray">We reached here with our hard work and dedication</p>
                   
                </div>
                <div className=" p-4 ">
                <div className="grid grid-cols-12 gap-4 mt-8">
                <div className=" p-4 col-span-2 ">
                <Image className=" items-center" src="/src/community/icon8.png" alt="Logo" width={40} height={40} />
              
                </div>
                <div className=" p-4 col-span-4  m-8 -mt-6p">
               <p className="text-justify ml-70px text-22px text-gray font-bold">2,245,341</p>
               <p className="text-justify ml-70px text-sm text-gray ">Members</p>
              
                </div>
                <div className=" p-4 col-span-2">
                    <Image className=" items-center" src="/src/community/icon9.png" alt="Logo" width={40} height={40} /></div>
                    <div className=" p-4 col-span-4 m-8 -mt-6p">
               <p className="text-justify ml-70px  text-22px text-gray font-bold">46,328</p>
               <p className="text-justify ml-70px  text-sm text-gray ">Clube</p>
              
                </div>
                <div className=" p-4 col-span-2">
                    <Image className=" items-center" src="/src/community/icon11.png" alt="Logo" width={40} height={40} /></div>
                    <div className=" p-4 col-span-4 m-8 -mt-6p">
               <p className="text-justify ml-70px   text-22px text-gray font-bold">828,867</p>
               <p className="text-justify ml-70px text-sm text-gray ">Event Booking</p>
              
                </div>
                <div className=" p-4 col-span-2">
                <Image className=" items-center" src="/src/community/icon10.png" alt="Logo" width={40} height={40} />
                
                </div>
                <div className=" p-4 col-span-4 m-8 -mt-6p">
               <p className="text-justify ml-70px  text-22px text-gray font-bold">1,926,436</p>
               <p className="text-justify ml-70px  text-sm text-gray ">Payment</p>
              
                </div>


                </div>
                

                </div>
                
            </div>
        </div>
      
  );
};

export default Helpline;
