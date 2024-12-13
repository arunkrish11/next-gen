import Description from "@/components/Description";
import Image from "next/image";
import React from "react";

function LeftImageText() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-fit items-center md:px-[20%] p-[4%]">
      <div className="md:flex w-screen md:w-[40%] h-fit py-10 md:py-0 justify-center items-center text-white hidden">
        <Image src="/three-img.webp" alt="meta verse" />
      </div>
      <Description
        product={{
          headOne: "Explore in the metaverse",
          headTwo: "one pixel at a time . . .",
          para: "The Future of Virtual Reality: Where Pixels Dream. In the not-so-distant future, pixels will transcend screens. They’ll escape their two-dimensional confines and leap into our reality, dancing with our senses.",
        }}
      />
      <div className="flex w-screen md:w-[40%] h-fit py-10 md:py-0 justify-center items-center text-white md:hidden">
        <Image src="/three-img.webp" alt="meta verse" />
      </div>
    </div>
  );
}

export default LeftImageText;
