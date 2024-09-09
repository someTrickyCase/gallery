import React from "react";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <a
      href={link}
      className='z-50 border border-black left-5 h-12 w-12 flex items-center justify-center text-white bg-black hover:text-black hover:rounded-lg hover:bg-white transition-all duration-500 cursor-pointer'>
      <p>{text}</p>
    </a>
  );
};

export default Button;
