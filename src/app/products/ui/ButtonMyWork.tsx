import React from "react";

const ButtonMyWork = ({ clickHandler }: { clickHandler: Function }) => {
  const handleClick = () => {
    clickHandler();
  };

  return (
    <div
      onClick={handleClick}
      className='top-4 z-50 h-12 w-12 bg-black fill-white border border-black flex items-center justify-center cursor-pointer transition-all  duration-500 hover:rounded-lg hover:bg-white hover:fill-black'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='size-7'>
        <path
          fillRule='evenodd'
          d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
};

export default ButtonMyWork;
