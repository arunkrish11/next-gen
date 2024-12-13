import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import React from "react";

function Hero() {
  return (
    <div className="flex w-screen justify-center overflow-hidden ">
      <div className="flex w-screen h-fit mt-10 mx-10 rounded-t-2xl justify-center bg-gradient-to-r from-slate-500 via-[#DF00BC] to-[#0CFADF] ">
        <div className="flex w-full h-fit flex-col rounded-t-2xl bg-slate-950 bg-opacity-60">
          <div className="bg-gradient-to-t from-[#0B0319] to-transparent">
            <div className="flex flex-row justify-around px-2 md:px-[10%] ">
              <div className="flex py-5 inter text-white">
                <a href="/">Home</a>
              </div>
              <div className="flex py-5 inter text-white">
                <a href="/product">Product</a>
              </div>
              <div className="flex justify-center mt-[-25px] bg-[#0B0319]">
                <img
                  className="w-fit h-fit"
                  src="/vr-headset.webp"
                  alt="head"
                />
              </div>
              <div className="flex py-5 inter text-white">
                <a href="/">Service</a>
              </div>
              <div className="flex py-5 inter text-white">
                <a href="/">Contact</a>
              </div>
            </div>
            <div className="flex w-auto pb-40 flex-col md:flex-row md:justify-evenly">
              <div className="flex flex-col w-screen md:w-[75%] ps-[10%] pt-[10%]">
                <div className="flex">
                  <h1 className="text-[40px] lg:text-[73px] josefin-sans text-white">
                    NEXT GEN
                  </h1>
                </div>
                <Heading heading={{ value: "VIRTUAL REALITY" }} />
                <Paragraph
                  paragraph={{
                    value:
                      "Unveiling the Future: The Dawn of Hyper-Realistic Virtual Realms",
                  }}
                />
                <Button name={{ value: "See More" }} />
              </div>
              <div className="flex w-screen md:w-[65%] mt-10 md:mt-0 justify-center items-center">
                <img
                  className="w-fit h-fit"
                  src="/girl-vr-headset.webp"
                  alt="girl with vr headset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
