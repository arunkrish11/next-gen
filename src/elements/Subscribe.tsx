import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col w-screen h-fit py-20 justify-center items-center text-white bg-[#0B0319] ">
      <div className="w-[50%] h-fit rounded-3xl px-1 py-1 josefin-sans bg-gradient-to-b from-[#DF00BC] to-[#2AA9DF]">
        <div className="rounded-3xl px-24 py-5 bg-[#0B0319] ">
          <div className="flex justify-center py-2">
            <h1 className="text-[25px] text-center">
              SUBSCRIBE TO OUR NEWSLETTER
            </h1>
          </div>
          <div className="flex justify-center py-2">
            <p className="text-center text-[18px] ">
              VR Dispatch: Pixels Unleashed, Dreams Delivered . . . where pixels
              ignite and dreams take flight! Here, we decode the language of
              pixels, revealing the hidden realms of virtual triumphs. Buckle
              up, fellow pixel pioneers, as we explore the future—one shimmering
              dot at a time.
            </p>
          </div>
          <div className="flex justify-center py-2">
            <button className="text-[22px] md:px-36 py-1 rounded-3xl text-center bg-gradient-to-t from-[#DF00BC] to-[#2AA9DF] ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
