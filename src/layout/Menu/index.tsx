import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../../components/layout/MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { getTransition } from "../../hooks/getTransition";

export interface IItemsMenuProps {
  title: string;
  link: string;
  id: number;
}

const items: Array<IItemsMenuProps> = [
  {
    title: "Home",
    link: "/",
    id: 1,
  },
  {
    title: "Resume",
    link: "/resume",
    id: 2,
  },
  // {
  //   title: "Services",
  //   link: "/services",
  //   id: 3,
  // },
  {
    title: "Portfolio",
    link: "/portfolio",
    id: 4,
  },
  // {
  //   title: "Blog",
  //   link: "/blog",
  //   id: 5,
  // },
  // {
  //   title: "Contact",
  //   link: "/contact",
  //   id: 6,
  // },
  // {
  //   title: "Extra",
  //   link: "/extra",
  //   id: 7,
  // },
];

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isShow, setIsShow] = useState(false);

  const activeRoute = useMemo(() => {
    return location?.pathname;
  }, [location]);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50 ? true : false);
  };

  const handleToggleShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {}, [location, window.innerWidth]);
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setIsShow(false);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [window]);

  return (
    <div className="@container fixed left-0 top-0 z-50 w-full">
      <motion.div
        animate={isShow ? "visible" : "hidden"}
        initial={"hidden"}
        exit="exit"
        variants={getTransition(
          { opacity: 0, x: "100%" },
          { opacity: 1, x: 0 },
          { type: "tween", duration: 0.5 },
          { type: "tween", duration: 1 }
        )}
        onClick={handleToggleShow}
        className="absolute @4xl:hidden left-0 top-0 h-screen w-full justify-end flex"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-5/12 h-full bg-red-600`}
        >
          <ul className="flex mt-12 p-10 gap-5 flex-col">
            {items.map((item) => (
              <MenuItem
                key={item?.id}
                isMobile
                isActive={activeRoute === item?.link}
                item={item}
              />
            ))}
          </ul>
        </div>
      </motion.div>
      <div
        className={`${
          scrolled ? "bg-opacity-100" : "@4xl:bg-opacity-0"
        } w-full z-10 relative ease-linear duration-300 bg-red-600 @4xl:bg-black transition-bg`}
      >
        <div
          className={`flex ${
            scrolled ? "@4xl:py-1" : "@4xl:py-5"
          } w-full px-5  transition-all ease-linear duration-300 justify-between max-w-7xl mx-auto `}
        >
          <div className="">
            <Link to="/">
              <h1 className="@4xl:font-bold  @4xl:text-xl my-5">
                Hossein <span className="@4xl:text-red-500">Kavand</span>
              </h1>
            </Link>
          </div>
          <ul className="hidden @4xl:flex my-5 -mr-5">
            {items.map((item) => (
              <MenuItem
                key={item?.id}
                isActive={activeRoute === item?.link}
                item={item}
              />
            ))}
          </ul>
          <button
            onClick={handleToggleShow}
            className="text-2xl @4xl:hidden select-none"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};
