// PRODUCTS LIST

"use client";

import React, { useEffect, useState } from "react";
import { fetchInitialData, fetchByScroll, fetchBySearch } from "../api/controller";
import { handleSrcoll } from "../model/handleScroll";

import ProductCard from "../shared/ProductCard";
import OnLoadingView from "../shared/OnLoadingView";
import SearchBar from "../shared/SearchBar";
import ButtonShowLiked from "./ui/ButtonShowLiked";
import Button from "../shared/Button";
import ButtonMyWork from "./ui/ButtonMyWork";

import { getFromLocalStore } from "../model/localStorageController";
import { ProductInterface } from "../types/types";

const ProductsList = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isLikedView, setIsLikedView] = useState(false);
  const [isMyWorkView, setIsMyWorkView] = useState(false);
  const [state, setState] = useState<ProductInterface[]>([]);

  useEffect(() => {
    if (!window) return;

    const data = getFromLocalStore("dataSet");
    if (data) {
      setState(data);
    } else {
      fetchInitialData(48).then((data) => {
        setState(() => {
          localStorage.setItem("dataSet", JSON.stringify(Array.from(new Set(data))));
          return Array.from(new Set(data));
        });
      });
    }
  }, []);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isSearching) return;
    if (event.deltaY > 0) {
      if (handleSrcoll(1)) {
        fetchByScroll().then((data) => {
          setState((prev) => {
            localStorage.setItem(
              "dataSet",
              JSON.stringify(Array.from(new Set([...prev, ...data])))
            );
            return Array.from(new Set([...prev, ...data]));
          });
        });
      }
    } else {
      handleSrcoll(-1);
    }
  };

  const handleSearch = (value: string | undefined) => {
    setIsSearching(true);

    if (!value) {
      const data = getFromLocalStore("dataSet");
      if (data) {
        setIsSearching(false);
        setState(data);
      }
      return;
    }

    fetchBySearch(value).then((data: string[] | undefined) => {
      setState([]);
      data?.map(async (link: string) => {
        await fetch(link)
          .then((data) => {
            const res = data.json();
            return res;
          })
          .then((data) => {
            setState((prev) => [...prev, data.data]);
          });
      });
    });
  };

  const handleDelete = (item: {}) => {
    if (state.length === 1) {
      const data = getFromLocalStore("dataSet");
      setState(data);
      setIsMyWorkView(false);
    }

    setState((prev) => {
      return prev.filter((elem) => elem !== item);
    });
  };

  const handleLike = (item: ProductInterface, action: "add" | "remove") => {
    const data = getFromLocalStore("liked") ? getFromLocalStore("liked") : [];

    if (action === "add") {
      data.push(item);
      localStorage.setItem("liked", JSON.stringify(data));
    }
    if (action === "remove") {
      const filteredLiked = data.filter((element: ProductInterface) => element.id !== item.id);
      localStorage.setItem("liked", JSON.stringify(filteredLiked));
    }
  };

  const showLiked = () => {
    const data = getFromLocalStore("liked");

    if (!isLikedView) {
      if (!data || data.length === 0) return;
      setState(getFromLocalStore("liked"));
      setIsLikedView(true);
    } else {
      setState(getFromLocalStore("dataSet"));
      setIsLikedView(false);
    }
  };

  const showMyWokr = () => {
    const data = getFromLocalStore("ownWorks");
    if (data.length === 0) return;

    if (!isMyWorkView) {
      setState(data);
      setIsMyWorkView(true);
    } else {
      const data = getFromLocalStore("dataSet");
      setState(data);
      setIsMyWorkView(false);
    }
  };

  return (
    <div onWheel={handleScroll} className='min-h-screen w-full relative flex justify-center'>
      {state.length > 0 ? (
        <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5 h-full mt-20'>
          {state.map((item: ProductInterface) => (
            <ProductCard
              key={JSON.stringify(item)}
              item={item}
              likeHandler={handleLike}
              deleteHandler={handleDelete}
            />
          ))}
        </div>
      ) : (
        <OnLoadingView />
      )}
      <div className='flex items-center justify-center absolute gap-5 mt-4 scale-[0.8] sm:scale-100'>
        <div className='flex gap-1'>
          <Button text='Add' link='/addProduct' />
          <ButtonShowLiked clickHandler={showLiked} />
          <ButtonMyWork clickHandler={showMyWokr} />
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default ProductsList;
