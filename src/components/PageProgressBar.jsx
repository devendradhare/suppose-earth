"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const PageProgressBar = () => {
  return (
    <ProgressBar
      height="1px"
      color="#fff"
      options={{ showSpinner: true }}
      stopDelay={500}
      shallowRouting={true}
    />
  );
};

export default PageProgressBar;
