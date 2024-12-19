import React from "react";
import { RequirementItem } from "@/types";
import Req from "@/components/bpa/Req";



interface ListProps {
  requirements: RequirementItem[];
}

const ReqList: React.FC<ListProps> = ({ requirements }) => {
  return (
    <main className="text-[14px] pb-48">
      <ol className="list-decimal space-y-2 font-bold pl-8 leading-none">
        {requirements.map((req) => (
          <Req key={req.id} requirement={req} />
        ))}
      </ol>
    </main>
  );
};

export default ReqList;
