import React, { useState } from "react";
import { ContentLayout } from "../../layout/ContentLayout";
import mockData from './data.json'
import { HiDocument, HiOutlinePhoto, HiVideoCamera } from 'react-icons/hi2'
import { GrDocumentText } from 'react-icons/gr'
import { ItemCardPortfolio } from "./itemCard";

export enum CategoryTypes {
  ALL = "all",
  PHOTO = "photo",
  MEDIA = "media",
  VIDEO = "video",
}

export const CategoryValue = {
  [CategoryTypes.PHOTO]: {
    title: "Photo",
    icon: <HiOutlinePhoto/>
  },
  [CategoryTypes.VIDEO]: {
    title: "Video",
    icon: <HiVideoCamera/>
  },
  [CategoryTypes.MEDIA]: {
    title: "Media",
    icon: <HiDocument/>
  },
}

const categoryItems = [
  {
    title: "All",
    type: CategoryTypes.ALL,
    id: 0,
  },
  {
    title: CategoryValue[CategoryTypes.PHOTO].title,
    type: CategoryTypes.PHOTO,
    id: 1,
  },
  {
    title: CategoryValue[CategoryTypes.MEDIA].title,
    type: CategoryTypes.MEDIA,
    id: 2,
  },
  {
    title: CategoryValue[CategoryTypes.VIDEO].title,
    type: CategoryTypes.VIDEO,
    id: 3,
  },
];

export type dataTypeMedia = typeof mockData.portfolio;

export const Portfolio = () => {
  const [dataJson] = useState(mockData.portfolio)
  const [categorySelected, setCategorySelected] = useState(CategoryTypes.ALL);
  return (
    <ContentLayout title="Portfolio">
      <div className="w-full">
        <div className="flex justify-center w-full gap-3 mb-8">
          {categoryItems.map(
            (item) =>
              (dataJson.find((data) => data.type === item.type) ||
                item.type === CategoryTypes.ALL) && (
                <button
                  key={item.id}
                  className={`flex select-none transition-all px-4 py-1 active:scale-95 rounded-sm ${
                    categorySelected === item.type
                      ? "bg-red-500 text-white"
                      : "hover:bg-slate-800"
                  }`}
                  type="button"
                  onClick={() => setCategorySelected(item.type)}
                >
                  {item.title}
                </button>
              )
          )}
        </div>
        <div className="grid @xl:grid-cols-2 @4xl:grid-cols-3 gap-2 w-full">
          {dataJson.map(
            (item) =>
              (categorySelected === CategoryTypes.ALL ||
                categorySelected === item.type) && (
                <ItemCardPortfolio item={item} key={item.id} />
              )
          )}
        </div>
      </div>
    </ContentLayout>
  );
};
