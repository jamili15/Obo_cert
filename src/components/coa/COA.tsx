import React from "react";
import Header from "../Header";
import ReqList from "./ReqList";

const COA = () => {
  const requirements = [
    {
      id: 1,
      list: "One (1) Pc Long size folder with fastener:",
      items: [
        "Blue Folder - Floor Area is 1,500 sq. m & below",
        "Green Folder - above floor area of 1,500 square meters",
      ],
    },
    {
      id: 2,
      list: "If a Representative is applying in behalf of the applicant: Notarized Authorization letter to transact with OBO (with Valid ID of applicant and representative)",
      items: [],
    },
    {
      id: 3,
      list: "If a Representative is signing in behalf of the applicant: Notarized Special Power of Attorney (SPA) with Valid ID of applicant and representative",
      items: [],
    },
    {
      id: 4,
      list: "If a representative is sent to receive the certificate in behalf of the owner: Authorization of the owner (1 original copy) with Valid ID of client and representative. (1 photocopy)",
      items: [],
    },
    {
      id: 5,
      list: "If the signatory in the Certificate of Completion is not the same with what is in the building/ancillary permits: Notarized Waiver (1 original copy)",
      items: [],
    },
    {
      id: 6,
      list: "Three (3) copies of Filled-out Unified Application Form for Certificate of Occupancy and FSIC",
      items: [],
    },
    {
      id: 7,
      list: "Three (3) copies of duly notarized Certificate of Completion using the form in Annex H, signed by the Owner/Applicant and signed and sealed by the duly licensed Architect or Civil Engineer in-charge of construction. If the construction was undertaken through a contract, the Certificate of Completion shall be signed by the Contractor/Authorized Managing Officer",
      items: [],
    },
    {
      id: 8,
      list: "One (1) construction logbook signed and sealed by the Architect or Civil Engineer who undertook full-time inspection and supervision; conformed / sign by the owner",
      items: [],
    },
    {
      id: 9,
      list: "One (1) photocopy of the Valid Licenses of all involved Professionals (e.g. Professional Tax Receipt and the Professional Regulation Commission identification card)",
      items: [],
    },
    {
      id: 10,
      list: "Colored Photos of Site and Completed Building/Structure showing front, sides and rear areas",
      items: [],
    },
    {
      id: 11,
      list: "One (1) set (Original copy/photocopy (original size) of Approved Plans",
      items: [],
    },
    {
      id: 12,
      list: "One (1) set (photocopy) of Approved Building and Ancillary Permits",
      items: [],
    },
    {
      id: 13,
      list: "One (1) photocopy of Issued Fire Safety Evaluation Clearance (FSEC)",
      items: [],
    },
  ];

  return (
    <div className="pt-5 container mx-auto px-4 relative bg-white w-[640px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),_0px_1px_1px_0px_rgba(0,0,0,0.14),_0px_1px_3px_0px_rgba(0,0,0,0.12)] rounded">
      <div className="p-5">
        <Header
          certname="Certificate of Occupancy Application"
          lguLogo="/lgu-logo.png"
          province="province of bohol"
          city="City of Tagbilaran"
        />

        <ReqList requirements={requirements} />
      </div>
    </div>
  );
};

export default COA;
