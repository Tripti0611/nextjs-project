import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaLongArrowAltRight } from "react-icons/fa";
const HeaderTop = () => {
    return <div className=" ">
        {/* border-b border-gray-800 */}
         <header className="bg-white-800 text-black p-4">
      <nav className="container mx-auto flex justify-between items-center">

      <div className="flex items-center space-x-2 tripti">
          <Image src="/icon.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold">
            {/* <Link href="/"> */}
              <a>Nexcent</a>
            {/* </Link> */}
          </span>
        </div>
        <ul className="flex space-x-8">
          <li>
            {/* <Link href="/"> */}
              <a className="hover:text-gray-400">Home</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link href="/about"> */}
              <a className="hover:text-gray-400">Features</a>
            {/* </Link> */}
          </li>
          <li>
            {/* < href="/contact"> */}
              <a className="hover:text-gray-400">Community</a>
            {/* </Link> */}
          </li>
          <li>
            {/* < href="/contact"> */}
              <a className="hover:text-gray-400">Blog</a>
            {/* </Link> */}
          </li>
          <li>
            {/* < href="/contact"> */}
              <a className="hover:text-gray-400">Pricing</a>
            {/* </Link> */}
          </li>
          <li>
            <button className="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-700 tripti1">
              {/* <Link href="/register"> */}
                <a>Register Now</a> 
                   <div className="header_top_icon_wrapper">
                <FaLongArrowAltRight />
                </div>
                {/* <FaLongArrowAltRight /> */}
              {/* </Link> */}
            </button>
          </li>
        </ul>
      </nav>
      
      
    </header>
    
    </div>;
};

export default HeaderTop;