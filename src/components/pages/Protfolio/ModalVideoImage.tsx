import styled from "@emotion/styled";
import React from "react";
import { CategoryTypes, dataTypeMedia } from ".";
import { MModalBodyContainer } from "../../modals/styled.modals";

export const ContainerModalVideo = styled(MModalBodyContainer)({
  background: "transparent",
  border: "none",
  boxShadow: "unset",
  marginTop: "-20px",
  // height: "50%",
  width: "50%",
  minWidth: "900px",
  display:"flex",
  flexDirection:"column",
  paddingTop: "25px",
});

export const ContainerModalImage = styled(ContainerModalVideo)({
  height: "85%",
  width: "80%",
});

export const ModalVideoImage = ({ variables, closeModal }) => {
  const { item }: { item: dataTypeMedia[number] } = variables;

  return (
    <>
    <div className="pt-4 h-full">
      <div className="w-full h-full">
        {item?.type === CategoryTypes.PHOTO ? (
          <img src={item?.url} 
          className="w-full h-full object-cover"
           />
        ) : (
          <video
            onContextMenu={(e) => e.preventDefault()}
            controlsList="nodownload"
            controls
            className="w-full h-full"
          >
            <source src={item?.url} />
          </video>
        )}
      </div>
    </div>
    <h6 className="text-left h-8">{item?.title}</h6>
    </>
    
  );
};
