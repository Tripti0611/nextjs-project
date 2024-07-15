import React from "react";
import Image from 'next/image';

const Clients = () => {
  return (
    <div className="text-center my-8">
      <h1 className="text-3xl font-bold clients">Our Clients</h1>
      <p className="text-gray-700">We have been working with some Fortune 500+ clients</p>

      <div className="grid grid-cols-7 gap-4 mt-8 clients1">
        
        <div className=" p-4">
        <Image src="/src/client/Logo7.png" alt="Logo" width={40} height={40} />
        </div>
        <div className=" p-4">
        <Image src="/src/client/Logo1.png" alt="Logo" width={40} height={40} />
        </div>
        <div className=" p-4">
        <Image src="/src/client/Logo6.png" alt="Logo" width={40} height={40} />
        </div>
        <div className=" p-4">
        <Image src="/src/client/Logo5.png" alt="Logo" width={40} height={40} />
        </div>
        <div className=" p-4">
        <Image src="/src/client/Logo4.png" alt="Logo" width={40} height={40} />
        </div>
        <div className=" p-4">
        <Image src="/src/client/Logo3.png" alt="Logo" width={40} height={40} />
        </div>
        <div className=" p-4">
        <Image src="/src/client/Logo6.png" alt="Logo" width={40} height={40} />
        </div>
        
      </div>
    </div>
  );
};

export default Clients;
