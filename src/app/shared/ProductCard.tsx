import React, { useState } from "react";
import { useRef } from "react";
import { ProductInterface } from "../types/types";
import { getFromLocalStore } from "../model/localStorageController";

const ProductCard = ({
  item,
  deleteHandler,
  likeHandler,
}: {
  item: ProductInterface;
  deleteHandler: Function;
  likeHandler: Function;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  // const imgFullURL = `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`;
  const imageID = item.image_id;
  const imgPreviewURL = item.imageURL
    ? item.imageURL
    : `https://www.artic.edu/iiif/2/${imageID}/full/400,/0/default.jpg`;
  const artist = item.artist_title;
  const title = item.title;

  const cardRef: React.MutableRefObject<null> = useRef(null);

  if (!imageID) {
    return;
  }

  const handleClick = () => {
    localStorage.setItem("product", JSON.stringify(item));
  };

  const handleLike = () => {
    if (isLiked) {
      likeHandler(item, "remove");
      setIsLiked(false);
    } else {
      likeHandler(item, "add");
      setIsLiked(true);
    }
  };

  const handleDelete = () => {
    deleteHandler(item);
  };

  return (
    <div className='relative'>
      <a
        ref={cardRef}
        href={`products/${item.id}`}
        onClick={handleClick}
        className='relative w-[120px] h-[160px] sm:w-[150px] sm:h-[200px] lg:w-[180px] lg:h-[240px] xl:w-[210px] xl:h-[280px] border border-black flex items-center justify-center overflow-hidden cursor-pointer group'>
        <img
          src={imgPreviewURL}
          alt=''
          className='h-full min-w-full bg-cover p-2 transition-all duration-700 blur-[4px] grayscale hover:scale-[1.1] hover:blur-0 hover:grayscale-0'
        />
        <div className='w-full group-hover:hidden absolute text-white flex flex-col  justify-between top-1 border border-black p-1 bg-black'>
          <p className='uppercase font-medium text-xs line-clamp-1'>{artist}</p>
          <p className='text-white font-extralight text-xs line-clamp-1'>{title}</p>
        </div>
      </a>
      <div
        onClick={handleLike}
        className={`cursor-pointer hover:scale-[1.1] absolute flex items-center right-1 bottom-1 ${
          isLiked ? "fill-black text-black" : "fill-none"
        }`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
          />
        </svg>
      </div>
      <div
        onClick={handleDelete}
        className='cursor-pointer hover:scale-[1.1] absolute flex items-center right-6 bottom-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductCard;
