import React from "react";
import { Link } from "react-router-dom";
import { IItemsMenuProps } from "../../../layout/Menu";

type Props = {
  isActive: boolean;
  isMobile: boolean;
  item: IItemsMenuProps;
};

export const MenuItem: React.FC<Props> = ({
  isActive = false,
  item,
  isMobile = false,
}) => {
  return (
    <li>
      <Link
        className={` transition-all  after:absolute  after:left-1/2 after:-translate-x-1/2 hover:after:h-0.5  after:transition-all ${
          isMobile
            ? "after:bg-white after:bottom-1 hover:after:w-7"
            : "after:bg-red-500 after:bottom-0 hover:after:w-12"
        } ${
          isActive
            ? `after:h-0.5 ${isMobile ? "after:w-7" : "after:w-12"} `
            : "after:h-0 after:w-0 opacity-60"
        } relative hover:opacity-100 font-normal text-base px-5 py-3`}
        to={item?.link}
      >
        {item?.title}
      </Link>
    </li>
  );
};
