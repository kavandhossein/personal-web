import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const ContentLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 @container">
      <section className="rounded-2xl overflow-hidden">
        <div className="bg-red-500 bg-section-top p-12 relative overflow-visible flex items-center">
          <div className="flex-1 h-full text-center">
            <h2 className="text-blbg-black font-bold text-5xl">{title}</h2>
          </div>
        </div>
        <div className="p-12 relative flex bg-black  pt-14">{children}</div>
      </section>
    </div>
  );
};
