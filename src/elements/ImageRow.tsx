import ImageCard from "@/components/ImageCard";
import React from "react";

function ImageRow() {
  return (
    <div className="flex flex-col md:flex-row w-screen md:px-[21%] md:py-[5%] md:justify-between bg-[#0B0319] ">
      <ImageCard
        card={{ name: "Gear VR Headset", link: "/gear-vr-headset.webp" }}
      />
      <ImageCard
        card={{ name: "Gear VR Headset", link: "/gear-vr-headset.webp" }}
      />
      <ImageCard
        card={{ name: "Gear VR Headset", link: "/gear-vr-headset.webp" }}
      />
    </div>
  );
}

export default ImageRow;
