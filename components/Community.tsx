import React from "react";
import Image from 'next/image';

const Community = () => {
  return (
    <div className="text-center my-8">
       <h1 className="text-3xl font-bold  community">Manage your entire community <br />in a single system</h1>
       <p className="text-gray-700">Who is Nextcent suitable for?
       </p>
       <div className="grid grid-cols-3 gap-4 mt-8 community1">
        
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

       <div className="grid grid-cols-3 gap-4  ">
        
        <div className=" p-4 " >
       
       
        <h1 className="text-3xl font-bold community2">Membership<br />  Organisations</h1>
        <p className="community3">Our membership management <br/>software provides full automation of<br/> membership renewals and payments</p>
        
        
        </div>
        <div className=" p-4 " >
       
        <h1 className="text-3xl font-bold community2">National <br /> Associations</h1>
        <p className="community3">Our membership management <br/>software provides full automation of<br/> membership renewals and payments</p>
        </div>
        <div className=" p-4 " >
       
        <h1 className="text-3xl font-bold community2">Clubs And <br /> Groups</h1>
        <p className="community3">Our membership management <br/>software provides full automation of<br/> membership renewals and payments</p>
        </div>
        
        
      </div>


    </div>
  );
};


export default Community;
