import React, { useState } from "react";

const OnLoadingView = () => {
  return (
    <div className='z-20 absolute w-screen h-screen backdrop-blur-3xl'>
      <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] '>
        <div className='h-24 w-24 bg-[#3d3d3d] flex items-center justify-center animate-spin'>
          <div className='h-12 w-12 bg-black animate-spin-left'></div>
        </div>
        <p className='absolute mt-5 ml-3 font-extralight text-lg animate-pulse'>LOADING</p>
      </div>
    </div>
  );
};

export default OnLoadingView;
