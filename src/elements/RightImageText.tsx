import Description from "@/components/Description";
import React from "react";

function RightImageText() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-fit items-center md:px-[20%] p-[4%]">
      <Description
        product={{
          headOne: "Touch the ",
          headTwo: "Reality . . .",
          para: "The Future of Virtual Reality: Where Pixels Dream. In the not-so-distant future, pixels will transcend screens. They’ll escape their two-dimensional confines and leap into our reality, dancing with our senses.",
        }}
      />
      <div className="flex w-screen md:w-[40%] h-fit py-10 px-5 md:px-0 md:py-0 justify-center items-center text-white">
        <img src="/one-img.webp" alt="meta verse" />
      </div>
    </div>
  );
}

export default RightImageText;
