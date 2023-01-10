import React from "react";
import { connect } from "react-redux";
import {
  ModalBlur,
  MModalBodyContainer,
  ModalTitleBar,
  ModalTitle,
  ModalBlurWrapper,
} from "./styled.modals";

import { CloseIcon } from "../../assets/CloseIcon";
import styled from "@emotion/styled";
import { closeModal } from "../../redux/actions";

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  fill: "#dfdfdf",
  ':hover path':{
    fill: "white",
    stroke :"white !importnant",
  }
}));

export const ModalCloseButton = ({
  handleCloseModal,
}: {
  handleCloseModal: (e: any) => void;
}) => {
  return <StyledCloseIcon onClick={handleCloseModal} />;
};

function ModalComponent({
  Body,
  Container = MModalBodyContainer,
  title,
  id,
  topBar,
  closeButton,
  closeModal,
  top = 80,
  canClose = true,
  searchData = "",
  hasSearch = false,
  sideBarSearch = false,
  ...rest
}) {
  return (
    <ModalBlurWrapper
      id="modal-blur-wrapper"
      onClick={handleClickoOutside}
      className="@container"
    >
      <ModalBlur
        sideBarSearch={sideBarSearch}
        topValue={top}
        hasSearch={hasSearch}
        topBar={topBar}
        id="modal-blur-component"
        onClick={handleClickoOutside}
      >
        <Container className="@xl:min-w-min @xl:w-fit w-11/12 min-w-0">
          {(title || closeButton) && (
            <ModalTitleBar>
              <ModalTitle>{title ?? ""}</ModalTitle>
              {closeButton && (
                <ModalCloseButton handleCloseModal={handleClose} />
              )}
            </ModalTitleBar>
          )}
          <Body
            id={id}
            searchData={searchData}
            closeModal={handleClose}
            {...rest}
          />
        </Container>
      </ModalBlur>
    </ModalBlurWrapper>
  );

  function handleClose() {
    closeModal(id);
  }

  function handleClickoOutside(e) {
    if (
      ["modal-blur-wrapper", "modal-blur-component"].includes(e.target.id) &&
      canClose
    )
      handleClose();
  }
}

function Modals({ modals, closeModal }) {
  if (typeof document !== "undefined") {
    if (modals?.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return modals.map((modal, index) => (
    <ModalComponent key={index} closeModal={closeModal} {...modal} />
  ));
}

const mapStateToProps = ({ modals }) => ({ modals });

const mapDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
