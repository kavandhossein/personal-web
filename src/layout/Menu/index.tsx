import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../../components/layout/MenuItem";

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
  {
    title: "Services",
    link: "/services",
    id: 3,
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    id: 4,
  },
  {
    title: "Blog",
    link: "/blog",
    id: 5,
  },
  {
    title: "Contact",
    link: "/contact",
    id: 6,
  },
  {
    title: "Extra",
    link: "/extra",
    id: 7,
  },
];

export const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const activeRoute = useMemo(() => {
    return location?.pathname;
  }, [location]);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [window]);

  return (
    <div
      className={`${
        scrolled ? "bg-opacity-100" : "bg-opacity-0"
      } fixed left-0 w-full ease-linear duration-300 bg-black transition-bg top-0 z-50`}
    >
      <div
        className={`flex ${
          scrolled ? "py-1" : "py-5"
        } w-full transition-all ease-linear duration-300 justify-between max-w-7xl mx-auto `}
      >
        <div className="">
          <Link to="/">
            <h1 className="font-bold text-xl my-5">
              Hossein <span className="text-red-500">Kavand</span>
            </h1>
          </Link>
        </div>
        <ul className="flex my-5 -mr-5">
          {items.map((item) => (
            <MenuItem
              key={item?.id}
              isActive={activeRoute === item?.link}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
