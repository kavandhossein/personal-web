import React from "react";
import { Link } from "react-router-dom";
import { IItemsMenuProps } from "../../../layout/Menu";

type Props = {
  isActive: boolean;
  item: IItemsMenuProps;
};

export const MenuItem: React.FC<Props> = ({ isActive = false, item }) => {
  return (
    <li>
      <Link className={`${isActive ? "" : "opacity-60"} transition-all hover:opacity-100 font-normal text-base px-5 py-3`} to={item?.link}>{item?.title}</Link>
    </li>
  );
};
