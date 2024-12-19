import React from "react";
import Header from "../Header";
import ReqList from "./ReqList";

const BPA = () => {
  return (
    <div className="pt-5 container mx-auto px-4 relative bg-white w-[640px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),_0px_1px_1px_0px_rgba(0,0,0,0.14),_0px_1px_3px_0px_rgba(0,0,0,0.12)] rounded">
      <div className="p-5">
        <Header
          certname="Building Permit Application"
          lguLogo="/lgu-logo.png"
          province="province of bohol"
          city="City of Tagbilaran"
        />
        <ReqList requirements={[]} />
      </div>
    </div>
  );
};

export default BPA;
