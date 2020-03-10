import React from "react";
import { BannerFluidWrapper } from "./BannerFluid.style";

interface BannerFluidProps {
  children?: any;
}

const BannerFluid = (props: BannerFluidProps) => {
  return <BannerFluidWrapper>{props.children}</BannerFluidWrapper>;
};

export default BannerFluid;
