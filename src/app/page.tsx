import ImageRow from "@/elements/ImageRow";
import LeftImageText from "@/elements/LeftImageText";
import RightImageText from "@/elements/RightImageText";
import Subscribe from "@/elements/Subscribe";
import React from "react";

function page() {
  return (
    <div className="overflow-x-hidden">
      <ImageRow />
      <LeftImageText />
      <RightImageText />
      <Subscribe />
    </div>
  );
}

export default page;
