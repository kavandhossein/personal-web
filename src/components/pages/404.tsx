import React from "react";
import { Link } from "react-router-dom";
import { ContentLayout } from "../layout/ContentLayout";

export const Page404 = () => {
  return (
    <div className="mt-44">
      <ContentLayout title="404">
        <p className="text-center w-full">
          Please go back to{" "}
          <Link to="/" className="text-red-500">
            Home
          </Link>
        </p>
      </ContentLayout>
    </div>
  );
};
