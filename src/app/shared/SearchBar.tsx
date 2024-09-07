"use client";

import React, { useRef } from "react";

const BrowseBar = ({ onSearch }: { onSearch: Function }) => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  let timer: ReturnType<typeof setTimeout>;
  const handleInput = () => {
    clearTimeout(timer);
    timer = setTimeout(() => nowSearch(inputRef.current?.value), 700);
  };

  const nowSearch = (value: string | undefined) => {
    onSearch(value);
  };

  return (
    <div className='z-50 bg-white hover:rounded-lg overflow-hidden transition-all w-[60vw] xl:w-[40vw] h-12 border border-black flex items-center gap-2'>
      <div className='w-12 h-12 bg-black text-white flex justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='size-6'>
          <path
            fillRule='evenodd'
            d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <input
        ref={inputRef}
        onInput={handleInput}
        spellCheck={false}
        type='text'
        className='border border-black h-10 w-[78%] text-inherit text-sm font-light px-2 transition-all focus:outline-none focus:rounded-lg'
      />
    </div>
  );
};

export default BrowseBar;
