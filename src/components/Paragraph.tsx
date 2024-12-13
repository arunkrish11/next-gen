import React from "react";

function Paragraph({paragraph}:{paragraph:any}) {
  return (
    <div className="flex">
      <p className="flex w-[60%] text-[18px] poppins-regular text-white">
        {paragraph.value} 
      </p>
    </div>
  );
}

export default Paragraph;
