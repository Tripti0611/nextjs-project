import React from "react";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";


const Marketing = () => {
  return (
    <div className="text-center my-8">
       <h1 className="text-3xl font-bold  community">Caring is the new marketing</h1>
       <p className="text-gray-700 community3">The Nextcent blog is the best place to read about the latest membership insights,<br/> trends and more. See who's joining the community, read about how our community <br/> are increasing their membership income and lot's more.​
       </p>
       <div className="grid grid-cols-3  mt-8  pixel1">
        
        <div className=" p-4 " >
                  <Image
                      className=" pixel1"
                      src="/src/community/image18.png"
                      alt="img"
                      layout="intrinsic"
                      width={350}
                      height={350}

                  />
        
        </div>
        <div className=" p-4 " >
                  <Image
                      className=" pixel1"
                      src="/src/community/image19.png"
                      alt="img"
                      layout="intrinsic"
                      width={350}
                      height={350}

                  />
       
        </div>
        <div className=" p-4 " >
                  <Image
                      className=" pixel1"
                      src="/src/community/image20.png"
                      alt="img"
                      layout="intrinsic"
                      width={350}
                      height={350}

                  />
        
        </div>
        
        
      </div>

       <div className="grid grid-cols-3 gap-4  ">
        
        <div className=" p-4 " >
       
       
        
        <p className=" mark">Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen <br/>
        <span><button className=" px-4 py-2 rounded meet">Readmore
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button></span>
        
        </p>
        
       
        </div>
        <div className=" p-4 " >
       
        <p className=" mark">Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen <br/>
        <span><button className=" px-4 py-2 rounded meet">Readmore
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button></span>
        
        </p>
        </div>
        <div className=" p-4 " >
       
        <p className=" mark">Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen <br/>
        <span><button className=" px-4 py-2 rounded meet">Readmore
                <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                </button></span>
        
        </p>
        </div>
        
        
      </div>


    </div>
  );
};


export default Marketing;
