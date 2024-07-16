import React from "react";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";


const Marketing = () => {
  return (
    <div className="text-center my-8">
       <h1 className="text-3xl font-bold  mt-10 text-custom-gray font-semibold text-[25.06px]">Caring is the new marketing</h1>
       <p className="text-gray-700 community3">The Nextcent blog is the best place to read about the latest membership insights,<br/> trends and more. See who's joining the community, read about how our community <br/> are increasing their membership income and lot's more.​
       </p>
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4  justify-items-center">
        
        <div className=" p-4 " >
                  <Image
                      className=" justify-items-center"
                      src="/src/community/image18.png"
                      alt="img"
                      layout="intrinsic"
                      width={350}
                      height={350}

                  />
                  <div className="min-w-[1025px]:hidden">
                  <p className=" relative border-none bg-gray-200 mt[120px] ml-[70px] w-[230px] py-[5px] px-0 rounded-[8px] shadow-md">Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen <br/>
        <span><button className=" px-4 py-2 rounded text-green">Readmore
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button></span>
        
        </p>
                  </div>
        
        </div>

        <div className=" p-4 " >
                  <Image
                      className=" justify-items-center"
                      src="/src/community/image19.png"
                      alt="img"
                      layout="intrinsic"
                      width={350}
                      height={350}

                  />
                    <div className="min-w-[1025px]:hidden">
                  <p className=" relative border-none bg-gray-200 mt[120px] ml-[70px] w-[230px] py-[5px] px-0 rounded-[8px] shadow-md">Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen <br/>
        <span><button className=" px-4 py-2 rounded text-green">Readmore
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button></span>
        
        </p>
                  </div>
       
        </div>
        <div className=" p-4 " >
                  <Image
                      className="justify-items-center"
                      src="/src/community/image20.png"
                      alt="img"
                      layout="intrinsic"
                      
                      width={350}
                      height={350}

                  />
                    <div className="min-w-[1025px]:hidden">
                  <p className=" absolute border-none bg-gray-200 mt[120px] ml-[70px] w-[230px] py-[5px] px-0 rounded-[8px] shadow-md">Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen <br/>
        <span><button className=" px-4 py-2 rounded text-green">Readmore
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button></span>
        
        </p>
                  </div>
        
        </div>
        
        
      </div>

     


    </div>
  );
};


export default Marketing;
