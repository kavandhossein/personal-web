import React from "react";
import { useDispatch } from "react-redux";
import { CategoryTypes, CategoryValue, dataTypeMedia } from ".";
import { newModal } from "../../../redux/actions";
import { ContainerModal, ModalMedia } from "./ModalMedia";
import { ContainerModalImage, ContainerModalVideo, ModalVideoImage } from "./ModalVideoImage";

type Props = {
  item: dataTypeMedia[number];
};

export const ItemCardPortfolio: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (item.type === CategoryTypes.MEDIA) {
      dispatch(
        newModal({
          Body: ModalMedia,
          Container: ContainerModal,
          id: "modal-media",
          canClose: true,
          closeButton: false,
          top: 0,
          variables: { item },
        })
      );
    } else {
      dispatch(
        newModal({
          Body: ModalVideoImage,
          Container:
            item.type === CategoryTypes.PHOTO
              ? ContainerModalImage
              : ContainerModalVideo,
          id: "modal-video-image",
          canClose: true,
          closeButton: true,
          top: 0,
          variables: { item },
        })
      );
    }
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer relative  h-52 overflow-hidden"
    >
      <img
        className="object-cover w-full h-full"
        src={
          item.type === CategoryTypes.VIDEO
            ? item?.description?.photo
            : item?.url
        }
        alt={item.title}
      />
      <div className="transition-all flex flex-col justify-between hover:opacity-100 bg-opacity-50 bg-red-500 py-3 px-4 w-full absolute top-0 left-0 opacity-0 h-full">
        <h5 className="text-lg font-bold">{item.title}</h5>
        <div className="flex w-full justify-between">
          <p>{CategoryValue[item.type].title}</p>
          <span className="text-white">{CategoryValue[item.type].icon}</span>
        </div>
      </div>
    </div>
  );
};
