import Image from "next/image";
import React from "react";

function Description({ product }: { product: any }) {
  return (
    <div className="flex flex-col justify-between w-screen md:w-[60%] h-fit px-5">
      <div className="flex flex-wrap h-fit">
        <h1 className="flex josefin-sans w-fit text-[40px] md:text-[45px] items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-clip ">
          {product.headOne}
        </h1>
        <h1 className="flex josefin-sans w-fit text-[40px] px-1 md:text-[45px] items-center text-white ">
          {product.headTwo}
        </h1>
      </div>
      <div className="flex my-3">
        <p className="poppins-regular text-[100%] text-white">{product.para}</p>
      </div>
      <div className="flex flex-row items-center self-start">
        <div className="flex bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] me-2 my-[5%] rounded-3xl p-[5%] px-8">
          <button className="text-white poppins-regular text-[15px] ">
            Play Now
          </button>
        </div>
        <div className="flex rounded-full w-fit h-fit">
          <button>
            <Image src="/play.webp" alt="play" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Description;
