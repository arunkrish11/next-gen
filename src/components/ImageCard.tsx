import React from "react";

function ImageCard({ card }: { card: any }) {
  return (
    <div className="flex flex-col w-screen md:w-1/4 h-fit my-6 md:my-0 justify-center items-center">
      <div className="flex md:justify-center items-center ">
        <img className="w-fit h-fit" src={card.link} alt={card.name} />
      </div>
      <div className="flex py-6 poppins-regular text-center text-[20px] text-white">
        <h1> {card.name} </h1>
      </div>
    </div>
  );
}

export default ImageCard;
