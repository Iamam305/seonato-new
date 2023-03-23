import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Link from "next/link";
const RecentProject = () => {
  return (
    <div className="container bg-white mx-auto lg:px-[120px] px-2 py-[146px] ">
      <h3 className="text-lg font-bold text-black">Check out</h3>
      <h2 className="uppercase mt-1 text-black text-4xl md:text-6xl font- md:leading-[70px] font-[Impact] mb-10">
        Our Recent <br /> <span className="text-[#E72C4B]">big projects</span>
      </h2>

      <Glider
        responsive={[
          {
            breakpoint: 864,
            settings: {
              slidesToShow: 3,
            },
          },
        ]}
        draggable
        slidesToShow={1.01}
        slidesToScroll={1}
        rewind
        className=" justify-between w-full "
      >
        <div className="block max-w-[540px] w-full group overflow-clip mr-8">
          <img
            alt="Art"
            src="https://iili.io/HhP1dpp.png"
            className="h-64 w-full object-cover sm:h-80 lg:h-96 group-hover:scale-110  duration-500"
          />
          <div className="bg-black p-6 relative z-10">
            <h3 className=" text-lg font-bold text-white sm:text-lg">Australian opal direct</h3>
            <p className="mt-4 max-w-sm text-white text-4xl">270% growth</p>
          </div>
          <Link href="https://australianopaldirect.com/" target={"_blank"} className=" duration-500 bg-black text-white text-center w-full py-4 group-hover:bg-[#E72C4B] block">
            View project
          </Link>
        </div>
        <div className="block max-w-[540px] w-full group overflow-clip mr-8">
          <img
            alt="Art"
            src="https://iili.io/Hh6mZWx.md.png"
            className="h-64 w-full object-cover sm:h-80 lg:h-96 group-hover:scale-110  duration-500"
          />
          <div className="bg-black p-6 relative z-10">
            <h3 className=" text-lg font-bold text-white sm:text-lg">Byjus</h3>
            <p className="mt-4 max-w-sm text-white text-4xl">13% growth</p>
          </div>
          <Link href={"https://byjus.com/"} target="_blank" className=" duration-500 bg-black text-white text-center w-full py-4 group-hover:bg-[#E72C4B] block">
            View project
          </Link>
        </div>

        <div className="block max-w-[540px] w-full group overflow-clip mr-8">
          <img
            alt="Art"
            src="https://iili.io/HwBU8Av.webp"
            className="h-64 w-full object-cover sm:h-80 lg:h-96 group-hover:scale-110  duration-500"
          />
          <div className="bg-black p-6 relative z-10">
            <h3 className=" text-lg font-bold text-white sm:text-lg"> Pepper content</h3>
            <p className="mt-4 max-w-sm text-white text-4xl">31% growth</p>
          </div>
          <Link href="https://www.peppercontent.io/" target={"_blank"} className=" duration-500 bg-black text-white text-center w-full py-4 group-hover:bg-[#E72C4B] block">
            View project
          </Link>
        </div>

        {/* <div className="block max-w-[540px] w-full group overflow-clip mr-8">
          <img
            alt="Art"
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="h-64 w-full object-cover sm:h-80 lg:h-96 group-hover:scale-110  duration-500"
          />
          <div className="bg-black p-6 relative z-10">
            <h3 className=" text-lg font-bold text-white sm:text-lg">Name</h3>
            <p className="mt-4 max-w-sm text-white text-4xl">123X growth</p>
          </div>
          <button className=" duration-500 bg-black text-white text-center w-full py-4 group-hover:bg-[#E72C4B]">
            View project
          </button>
        </div> */}

       
      </Glider>
    </div>
  );
};

export default RecentProject;
