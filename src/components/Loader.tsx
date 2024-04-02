import React from "react";
import { Oval } from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#ffc000"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
