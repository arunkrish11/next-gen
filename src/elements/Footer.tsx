import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col w-screen md:px-[21%] md:py-[2%] md:justify-between">
      <div className="flex flex-col md:flex-row items-center md:justify-between text-white josefin-sans text-[18px] py-10">
        <Link className="hover:text-[#2AA9DF]" href="/help">
          Help
        </Link>
        <Link className="hover:text-[#2AA9DF]" href="/about">
          About Us
        </Link>
        <Link className="hover:text-[#2AA9DF]" href="/company">
          Company
        </Link>
        <Link className="hover:text-[#2AA9DF]" href="/services">
          Services
        </Link>
        <Link className="hover:text-[#2AA9DF]" href="/contact">
          contact
        </Link>
      </div>
      <div className="flex flex-col py-5 items-center ">
        <div className="flex py-4 ">
          <h1 className="josefin-sans text-[30px] text-white">
            Download our App
          </h1>
        </div>
        <div className="flex py-4 px-[20%] text-center">
          <p className="poppins-regular text-[15px] text-white">
            Connect with friends across the globe. Multiplayer VR games let you
            team up, compete, or simply hang out in shared spaces. Connect with
            friends across the globe. Multiplayer VR games let you team up,
            compete, or simply hang out in shared spaces. 
          </p>
        </div>
        <div className="flex flex-row py-5 gap-3">
          <button>
            <img
              className="w-fit h-fit"
              src="/playstore.webp"
              alt="playstore"
            />
          </button>
          <button>
            <img className="w-fit h-fit" src="/appstore.webp" alt="appstore" />
          </button>
        </div>
      </div>
      <div className=" bg-gradient-to-l pt-1 from-[#DF00BC] to-[#2AA9DF]">
        <div className="flex flex-row py-4 px-4 items-center justify-between text-white bg-[#0B0319]">
          <div className="flex flex-col lg:flex-row md:w-3/4 lg:w-1/4  ">
            <div className="flex py-4 justify-around lg:flex-row gap-3">
              <Link className=" josefin-sans hover:text-[#2AA9DF]" href="/terms">
                Terms
              </Link>
              <Link className=" josefin-sans hover:text-[#2AA9DF]" href="/privacy">
                Privacy
              </Link>
              <Link
                className=" josefin-sans hover:text-[#2AA9DF]"
                href="condition"
              >
                Condition
              </Link>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <span className="flex rounded-full px-2 border-2 text-[11px] border-white">
                C
              </span>
              <p className="flex text-sm lg:text text-wrap ">
                2024 VR ZONE Ltd. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="lg:flex flex-row items-center gap-2 hidden">
            <span className="flex w-fit rounded-full px-2 border-2 text-[11px] border-white">
              C
            </span>
            <p className="flex text-wrap text-[11px] ">
              2024 VR ZONE Ltd. All Rights Reserved
            </p>
          </div>
          <div className="flex flex-row px-5 gap-2">
            <button>
              <img className="w-fit h-fit" src="/twitter.webp" alt="twitter" />
            </button>
            <button>
              <img className="w-fit h-fit" src="/youtube.webp" alt="youtube" />
            </button>
            <button>
              <img
                className="w-fit h-fit"
                src="/facebook.webp"
                alt="facebook"
              />
            </button>
            <button>
              <img src="/instagram.webp" alt="instagram" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
