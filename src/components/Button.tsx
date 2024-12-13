import React from "react";

function Button({ name }: { name: any }) {
  return (
    <div className="flex w-fit text-center bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] me-2 rounded-3xl my-5 py-3 px-8">
      <button className="text-white poppins-regular text-[15px] ">
        {name.value}
      </button>
    </div>
  );
}

export default Button;
