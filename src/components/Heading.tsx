import React from "react";

function Heading({heading}:{heading:any}) {
  return (
    <div className="flex">
      <h1 className="text-[40px] w-fit h-14 josefin-sans items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-clip">
        {heading.value}
      </h1>
    </div>
  );
}

export default Heading;
