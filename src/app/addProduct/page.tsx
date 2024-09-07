"use client";

import React, { useRef, useState } from "react";
import Button from "../shared/Button";

const AddProduct = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const refInputName: React.RefObject<HTMLInputElement> = useRef(null);
  const refInputTitle: React.RefObject<HTMLInputElement> = useRef(null);
  const refInputLink: React.RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = () => {
    if (refInputLink.current?.value === "" || !refInputLink.current?.value.includes("https://")) {
      if (!refInputLink.current) return;
      refInputLink.current.value = "type some link";
      return;
    }
    if (refInputName.current?.value === "") {
      refInputName.current.value = "type your name";
      return;
    }
    if (refInputTitle.current?.value === "") {
      refInputTitle.current.value = "type art title";
      return;
    }
    const newArt = {
      imageURL: refInputLink.current.value,
      artist_title: refInputName.current?.value,
      title: refInputTitle.current?.value,
      image_id: "wait..is_it_only_preview?",
    };

    const jsonData = localStorage.getItem("ownWorks");
    const storedData = jsonData ? JSON.parse(jsonData) : [];
    storedData.push(newArt);
    localStorage.setItem("ownWorks", JSON.stringify(storedData));

    setIsSubmitted(true);
    if (refInputName.current && refInputTitle.current && refInputLink.current) {
      refInputLink.current.value = "";
      refInputName.current.value = "";
      refInputTitle.current.value = "";
    }
    setTimeout(() => setIsSubmitted(false), 800);
  };

  return (
    <div className='h-full w-full flex flex-col items-center'>
      <h1 className='h-12 mt-4 flex items-center justify-center text-xl font-bold'>ADD YOUR ART</h1>

      <div className='w-full mt-12 flex flex-col gap-5 px-5 items-center'>
        <input
          ref={refInputLink}
          type='text'
          spellCheck={false}
          placeholder='Link to image'
          className='font-light placeholder:text-black placeholder:font-extralight rounded-lg h-12 w-64 px-2 border border-black focus:outline-none focus:animate-pulse'
        />
        <input
          ref={refInputName}
          type='text'
          spellCheck={false}
          placeholder='Your name'
          className='font-light placeholder:text-black placeholder:font-extralight rounded-lg h-12 w-64 px-2 border border-black focus:outline-none focus:animate-pulse'
        />
        <input
          ref={refInputTitle}
          type='text'
          spellCheck={false}
          placeholder='Art title'
          className='font-light placeholder:text-black placeholder:font-extralight rounded-lg h-12 w-64 px-2 border border-black focus:outline-none focus:animate-pulse'
        />
        <div
          onClick={handleSubmit}
          className='group transition-all duration-500 h-12 w-64 border border-black font-bold flex items-center justify-center text-white bg-black cursor-pointer hover:rounded-lg hover:bg-white hover:text-black'>
          <p className='group-hover:translate-x-[40%] transition-all duration-500'>Submit</p>
        </div>
      </div>
      <div className='absolute top-4 left-[10vw]'>
        <Button text='Back' link='/products' />
      </div>
      <div
        className={`absolute h-12 duration-500 w-64 border border-black flex items-center justify-center text-xl font-light bottom-[30vh] transition-all ${
          isSubmitted ? "opacity-100" : "opacity-0"
        }`}>
        Submitted!
      </div>
    </div>
  );
};

export default AddProduct;
