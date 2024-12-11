import ImageRow from "@/elements/ImageRow";
import RightImageText from "@/elements/RightImageText";
import Subscribe from "@/elements/Subscribe";
import React from "react";

function page() {
  return (
    <div className="overflow-x-hidden">
      <ImageRow />
      <RightImageText />
      <Subscribe />
    </div>
  );
}

export default page;
