import React from 'react'
import { TypeSkills } from '.';

type Props = {
  item: TypeSkills[number];
};

export const SkillsItem: React.FC<Props> = ({ item }) => {
  return (
    <div className='mb-3 pr-10'>
      <h6>{item?.title}</h6>
      <div className="w-full mt-1 bg-gray-800 h-3 rounded-lg">
        <div className="bg-red-700 h-3 rounded-lg" style={{width: item?.percentage + "%"}}></div>
      </div>
    </div>
  );
};
