import React, { useState } from "react";
import { ContentLayout } from "../../layout/ContentLayout";
import mockData from './data.json'
import { HiDocument, HiOutlinePhoto, HiVideoCamera } from 'react-icons/hi2'
import { GrDocumentText } from 'react-icons/gr'

export enum CategoryTypes {
  ALL = "all",
  PHOTO = "photo",
  MEDIA = "media",
  VIDEO = "video",
}

const CategoryValue = {
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

export const Portfolio = () => {
  const [dataJson] = useState(mockData.portfolio)
  const [categorySelected, setCategorySelected] = useState(CategoryTypes.ALL);
  return (
    <ContentLayout title="Portfolio">
      <div className="w-full">
        <div className="flex justify-center w-full gap-3 mb-8">
          {categoryItems.map((item) =>( dataJson.find(data => data.type === item.type) || item.type === CategoryTypes.ALL) && (
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
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          {dataJson.map(item => (categorySelected === CategoryTypes.ALL || categorySelected === item.type) && (
            <div className="cursor-pointer relative  h-52 overflow-hidden" key={item.id}>
              <img className="object-cover w-full h-full" src={item.type === CategoryTypes.VIDEO ? item?.description?.photo : item?.url} alt={item.title} />
              <div className="transition-all flex flex-col justify-between hover:opacity-100 bg-opacity-50 bg-red-500 py-3 px-4 w-full absolute top-0 left-0 opacity-0 h-full">
                <h5 className="text-lg font-bold">{item.title}</h5> 
                <div className="flex w-full justify-between">
                  <p>{CategoryValue[item.type].title}</p>
                  <span className="text-white">
                    {CategoryValue[item.type].icon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
};
