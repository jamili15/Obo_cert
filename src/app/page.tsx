"use client";

import BPA from "@/components/bpa/BPA";
import COA from "@/components/coa/COA";

import { useState } from "react";

export default function Home() {
  const [openbpa, setOpenbpa] = useState<boolean>(false);
  const [opencoa, setOpencoa] = useState<boolean>(false);

  const openBpa = () => {
    setOpenbpa(!openbpa);
    setOpencoa(false);
  };
  const openCoa = () => {
    setOpencoa(!opencoa);
    setOpenbpa(false);
  };

  return (
    <div className="bg-gray-100 pb-20">
      <button onClick={openBpa} className="border mr-3 rounded p-2">
        bpa
      </button>
      <button onClick={openCoa} className="border rounded p-2">
        coa
      </button>
      <div>
        {openbpa && <BPA />}
        {opencoa && <COA />}
      </div>
    </div>
  );
}
