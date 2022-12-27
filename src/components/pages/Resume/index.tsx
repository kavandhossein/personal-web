import React, { useState } from "react";
import { ContentLayout } from "../../layout/ContentLayout";
import { ExperienceItem } from "./ExperienceItem";
import dataJson from "./data.json";
import { SkillsItem } from "./SkillsItem";

export type TypeExperiences = typeof dataJson.experiences;
export type TypeSkills = typeof dataJson.mainSkills;

export const ResumePage = () => {
  const [dataMock] = useState(dataJson.experiences);
  return (
    <ContentLayout title="Resume">
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-3">Experience</h3>
        <div className="grid grid-cols-2">
          {dataMock?.map((item) => (
            <ExperienceItem item={item} key={item.id} />
          ))}
        </div>
        <div className="grid grid-cols-2 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Main <span className="text-red-500">Skills</span>
            </h3>
            {dataJson?.mainSkills?.map((item) => (
              <SkillsItem item={item} key={item.id} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Other <span className="text-red-500">Skills</span>
            </h3>
            {dataJson?.otherSkills?.map((item) => (
              <SkillsItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
