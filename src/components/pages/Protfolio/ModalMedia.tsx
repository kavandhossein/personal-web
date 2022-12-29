import styled from "@emotion/styled";
import React from "react";
import { MModalBodyContainer } from "../../modals/styled.modals";
import { AiOutlineClose, AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { dataTypeMedia } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const ContainerModal = styled(MModalBodyContainer)({
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  borderRadius: 0,
});

export const ModalMedia = ({ closeModal, variables }) => {
  const { item }: { item: dataTypeMedia[number] } = variables;

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="justify-end flex text-xl">
        {/* <div className="flex gap-2">
          <button className="bg-slate-700 px-3 py-3 pl-4 rounded-md flex ">
            <MdArrowBackIos />
          </button>
          <button className="bg-slate-700 px-3 py-3 pl-4 rounded-md flex ">
            <MdArrowForwardIos />
          </button>
        </div> */}
        <button
          onClick={closeModal}
          className="bg-slate-700 px-3 py-3  rounded-md flex ml-3"
        >
          <AiOutlineClose />
        </button>
      </div>
      <h2 className="text-center my-7 text-4xl">{item.title}</h2>
      <div className="flex">
        <div className="w-8/12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            speed={1000}
            className="items-stretch h-100"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {item.description?.images?.map((image, i) => (
              <SwiperSlide className="h-100 " key={i}>
                  <img
                    className="w-100 h-100 object-cover"
                    src={image}
                    alt="image"
                  />
              </SwiperSlide>
            ))}
          </Swiper>
          {item?.description?.video && (
            <div className="my-8">
              <video
                className="w-100 h-100"
                onContextMenu={(e) => e.preventDefault()}
                controlsList="nodownload"
                controls
              >
                <source src={item?.description?.video} />
              </video>
            </div>
          )}
          {item?.description?.photo && (
            <div className="my-8">
              <img
                className="w-100 h-100 object-cover"
                src={item?.description?.photo}
                alt="image"
              />
            </div>
          )}
        </div>
        <div className="w-4/12 pl-10">
          <h5 className="mb-3 text-2xl font-bold">Description</h5>
          <p className="flex items-center gap-2 my-2">
            <span className="text-red-500">
              <IoPersonSharp />
            </span>{" "}
            {item.description?.author}
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="text-red-500">
              <BiWorld />
            </span>{" "}
            <a
              className="text-red-500"
              target="_blank"
              href={item.description?.website?.link}
            >
              {item.description?.website?.title}
            </a>
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="text-red-500">
              <SlCalender />{" "}
            </span>
            {item.description?.date}
          </p>
          <p>{item.description?.detail}</p>
          <h5 className="mt-8 mb-3 text-2xl font-bold">Technology</h5>
          <div className="flex flex-wrap gap-2">
            {item?.description?.technologies?.map((tech, i) => (
              <div key={i} className="bg-slate-600 rounded-md px-2 py-1">
                {tech}
              </div>
            ))}
          </div>
          <h5 className="mt-8 mb-3 text-2xl font-bold">Share</h5>
          <div className="flex gap-1">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              className="hover:bg-red-500 border hover:border-red-500 text-slate-300 hover:text-white transition-all duration-500 border-slate-700 px-2 py-2 text-sm"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://twitter.com/share?url=${window.location.href}`}
              className="hover:bg-red-500 border hover:border-red-500 text-slate-300 hover:text-white transition-all duration-500 border-slate-700 px-2 py-2 text-sm"
              target="_blank"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href={`https://plus.google.com/share?url=${window.location.href}`}
              className="hover:bg-red-500 border hover:border-red-500 text-slate-300 hover:text-white transition-all duration-500 border-slate-700 px-2 py-2"
              target="_blank"
            >
              <AiOutlineGooglePlus />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
              className="hover:bg-red-500 border hover:border-red-500 text-slate-300 hover:text-white transition-all duration-500 border-slate-700 px-2 py-2 text-sm"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
