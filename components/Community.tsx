import React from "react";
import Image from 'next/image';

const Community = () => {
  return (
    <div className="text-center my-8">
       <h1 className="text-3xl font-bold mt-10 text-custom-gray font-semibold text-[25.06px]">Manage your entire community <br />in a single system</h1>
       <p className="text-gray-700">Who is Nextcent suitable for?
       </p>
       <div className="grid mark4 grid-cols-3 sm:grid-cols-12 md:grid-cols-3 gap-4 mt-8 justify-items-center mb-0 ">
        
        <div className=" p-4 " >
        <Image className=" items-center" src="/src/community/icon1.png" alt="Logo" width={40} height={40} />
        
        </div>
        <div className=" p-4 " >
        <Image className=" items-center" src="/src/community/icon2.png" alt="Logo" width={40} height={40} />
       
        </div>
        <div className=" p-4 " >
        <Image className=" items-center" src="/src/community/icon3.png" alt="Logo" width={40} height={40} />
        
        </div>
        
        
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-3 gap-4  ">
        
        <div className=" p-4 " >
       
        <Image className=" items-center ml-40 mark5" src="/src/community/icon1.png" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold text-25px text-custom-gray -mt-6unity2">Membership<br />  Organisations</h1>
        <p className="text-sm text-gray">Our membership management <br/>software provides full automation of<br/> membership renewals and payments</p>
        
        
        </div>
        <div className=" p-4 " >
        <Image className=" items-center ml-40 mb-5 mark5" src="/src/community/icon1.png" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold text-25px text-custom-gray -mt-6">National <br /> Associations</h1>
        <p className="text-sm text-gray">Our membership management <br/>software provides full automation of<br/> membership renewals and payments</p>
        </div>
        <div className=" p-4 " >
        <Image className=" items-center ml-40 mb-5 mark5" src="/src/community/icon1.png" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold text-25px text-custom-gray -mt-6">Clubs And <br /> Groups</h1>
        <p className="text-sm text-gray">Our membership management <br/>software provides full automation of<br/> membership renewals and payments</p>
        </div>
        
        
      </div>


    </div>
  );
};


export default Community;
