import React from 'react'
import { TypeExperiences } from '.';

export const ModalDetail = ({variables,closeModal}) => {
  const { item }: { item: TypeExperiences[number] } = variables;

  return (
    <div
      className="border-l-red-500 mt-10 border-l-2 transition-all px-4 py-3 "
    >
      <h6>{item?.title}</h6>
      <div className="flex mb-4 text-xs">
        <span className="text-red-500">
          {item?.startDate} - {item?.endDate}
        </span>{" "}
        &nbsp; | &nbsp; <span className="text-slate-500">{item?.type}</span>
      </div>
      <p className="my-2 text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
}
