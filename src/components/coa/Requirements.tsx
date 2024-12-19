import React from "react";
import { RequirementItem } from "@/types";

const Requirements: React.FC<{ requirement: RequirementItem }> = ({
  requirement,
}) => {
  return (
    <li>
      <h1 className="font-semibold">{requirement.list}</h1>
      {requirement.items && requirement.items.length > 0 && (
        <ul className="list-disc ml-5 mt-2">
          {requirement.items.map((item, index) => (
            <li key={index} className="font-normal">
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Requirements;
