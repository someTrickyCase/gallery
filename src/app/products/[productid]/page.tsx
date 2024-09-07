"use client";

import { getFromLocalStore } from "@/app/model/localStorageController";
import React from "react";

const ProductDetails = () => {
  const data = getFromLocalStore("product");

  const imageID = data.imageID ? data.imageID : data.image_id;
  const imgURL = `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`;
  const artist = data.artist_title;
  const title = data.title;

  return (
    <div className='flex flex-col items-center min-h-screen bg-black text-white'>
      <div className='w-[70%] xl:w-[50%]'>
        <h2 className='mt-12 text-2xl font-medium h-12 flex items-center tracking-wider'>
          {artist}
        </h2>
        <p className='text-lg font-extralight tracking-wide'>{title}</p>
      </div>
      <div className='max-w-[90%] overflow-hidden mt-8 flex items-center justify-center p-2 border border-white'>
        <img src={imgURL} alt={title} className='bg-cover max-h-[70vh] ' />
      </div>

      <a
        href='/products'
        className='group w-40 h-12 border border-white absolute bottom-[3vh] flex items-center justify-center text-xl font-normal tracking-widest hover:rounded-lg hover:bg-white hover:text-black transition-all duration-500'>
        <p className='group-hover:translate-x-[-25%] transition-all duration-300'>BACK</p>
      </a>
    </div>
  );
};

export default ProductDetails;
