import Footer from "@/elements/Footer";
import Hero from "@/elements/Hero";
import ImageRow from "@/elements/ImageRow";
import LeftImageText from "@/elements/LeftImageText";
import RightImageText from "@/elements/RightImageText";
import Subscribe from "@/elements/Subscribe";
import React from "react";

function page() {
  return (
    <div className="overflow-x-hidden bg-[#0B0319]">
      <Hero />
      <ImageRow />
      <LeftImageText />
      <RightImageText />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
