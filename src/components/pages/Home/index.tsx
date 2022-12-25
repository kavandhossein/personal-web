import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="rounded-2xl overflow-hidden @container bg-black">
        <div className="bg-red-500 bg-section-top p-12 relative overflow-visible @xl:flex items-center">
          <div className="@xl:w-72 border ml-4 border-blbg-black bg-black shadow @xl:-mb-20 z-10">
            <img src="/images/person-1.jpg" alt="Hossein Kavand" />
          </div>
          <div className="flex-1 mt-10 @xl:m-0 @xl:pl-12 h-full text-center">
            <h2 className="text-blbg-black font-bold text-2xl @xl:text-3xl @3xl:text-4xl @4xl:text-5xl">
              Hossein Kavand
            </h2>
            <p className="text-blbg-black text-lg my-5">Frontend-developer</p>
            <div className="flex justify-center ">
              <a className="custom-social-btn w-10 h-10 @4xl:w-12 @4xl:h-12" href="#">
                <i className="text-xl @4xl:text-2xl">
                  <AiOutlineTwitter />
                </i>
              </a>
              <a className="custom-social-btn w-10 h-10 @4xl:w-12 @4xl:h-12" href="#">
                <i className="text-xl @4xl:text-2xl">
                  <AiOutlineInstagram />
                </i>
              </a>
              <a className="custom-social-btn w-10 h-10 @4xl:w-12 @4xl:h-12" href="#">
                <i className="text-xl @4xl:text-2xl">
                  <FaTelegramPlane />
                </i>
              </a>
              <a className="custom-social-btn w-10 h-10 @4xl:w-12 @4xl:h-12" href="#">
                <i className="text-xl @4xl:text-2xl">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="p-12 pb-0 elative flex gap-12 pt-14">
          <div className="w-1/2">
            <h4 className="font-bold text-2xl ">
              About <span className="text-red-500">Me</span>
            </h4>
            <p className="my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              temporibus quis aspernatur animi iste ab, quisquam perspiciatis
              delectus non odit natus? Nobis modi consequuntur libero totam
              delectus quibusdam atque expedita.
            </p>
           
          </div>
          <div className="ml-10 gap-10 flex">
            <div className="flex flex-col gap-2">
              <p>Age</p>
              <p>Residence</p>
              <p>Address</p>
              <p>e-mail</p>
              <p>Phone</p>
              <p>Freelance</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-slate-400">22</p>
              <p className="text-slate-400">IRAN</p>
              <p className="text-slate-400">Tehran</p>
              <p className="text-slate-400">
                <a
                  className="text-red-500"
                  href="mailto:hskavand@gmail.com"
                  target="_blank"
                >
                  hskavand@gmail.com
                </a>
              </p>
              <p className="text-slate-400">
                <a href="tel:+989034354304">+98 903 435 4304</a>
              </p>
              <p className="text-slate-400">Available</p>
            </div>
          </div>
        </div>
          <div className="w-full pb-12 pt-4 px-12 text-center @4xl:text-left @4xl:pt-0  @4xl:-mt-8">
          <button className="shadow active:scale-95 shadow-white border hover:shadow-lg transition-all mt-4 bg-black py-2 px-4 rounded-md">
              DOWNLOAD RESUME
            </button>
          </div>
      </section>
    </div>
  );
};
