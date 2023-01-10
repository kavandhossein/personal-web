import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { TypeExperiences } from ".";
import { newModal } from "../../../redux/actions";
import { MModalBodyContainer } from "../../modals/styled.modals";
import { ModalDetail } from "./ModalDetail";

interface Props {
  item: TypeExperiences[number];
}

export const ContainerModal = styled(MModalBodyContainer)({
  width: "95%",
  // height: "100%",
  // maxHeight: "100%",
  // borderRadius: 0,
});

export const ExperienceItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      newModal({
        Body: ModalDetail,
        id: "modal-resume-detail",
        // Container: ContainerModal,
        top: 0,
        canClose: true,
        closeButton: true,
        variables: { item },
        title: item.title,
      })
    );
  };
  return (
    <div className="border-l-2 border-slate-600 py-3 relative px-5 pr-2 @xl:pr-5 after:absolute after:top-5 after:-left-2 after:w-3.5 after:h-3.5 after:bg-black after:border after:rounded-full after:flex after:border-red-500 before:absolute before:left-1 before:w-4 before:border before:border-red-500 before:top-6 before:translate-y-0.5">
      <div
        onClick={handleClick}
        className="border-l-red-500 cursor-pointer border-l-2 transition-all px-4 py-3 shadow-[0_0_3px_0_rgba(130,130,130,60%)] hover:shadow-[0_0_8px_0_rgba(130,130,130,56%)]"
      >
        <h6>{item?.title}</h6>
        <div className="flex text-xs">
          <span className="text-red-500">
            {item?.startDate} - {item?.endDate}
          </span>{" "}
          &nbsp; | &nbsp; <span className="text-slate-500">{item?.type}</span>
        </div>
        <p className="my-2 text-sm">{item.summery}</p>
      </div>
    </div>
  );
};
