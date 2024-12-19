import React from "react";
import Header from "../Header";
import ReqList from "./ReqList";

const BPA = () => {
  const requirements = [
    {
      id: 1,
      list: "Four (4) copies of duly accomplished and notarized Application Form for Building Permit and the following Ancillary Permit Forms",
      items: [],
    },
    {
      id: 2,
      list: "Four (4) sets of Survey Plans, Design Plans/Drawings, Specifications and other documents prepared, signed and sealed over the printed name of the respective duly licensed and registered design professionals, and approved by the owner/applicant",
      items: [
        "Architectural Documents (Architect)",
        "Civil/Structural Documents (Civil/Structural Engineer)",
        "Electrical Documents (Professional Electrical Engineer)",
        "Mechanical Documents (Professional Mechanical Engineer",
        "Sanitary Documents (Sanitary Engineer)",
        "Plumbing Documents (Master Plumber)",
        "Electronics Documents (Electronics Engineer)",
        "Geodetic Documents (Geodetic Engineer)",
        "Others",
      ],
    },
    {
      id: 3,
      list: "Certification from a duly licensed and registered Geodetic Engineer that the proposed construction, renovation, alteration, repair or addition shall be within the property of the owner/applicant and will not encroach any adjoining property (incorporated in the first page of Architectural Design Plans)",
      items: [],
    },
    {
      id: 4,
      list: "Three (3) sets of Structural Analysis and Design, signed and sealed over the printed name of the duly licensed and registered Civil/ Structural Engineer (Applicable for all buildings/structures except for one storey and single detached building/structure with a total floor area of 20.00 sq. meters or less)",
      items: [],
    },
    {
      id: 5,
      list: "Boring and Load Test (Applicable for buildings/structures of three (3) storeys and higher, lower building structures for areas with potential geological/geotechnical hazards, or if necessary in accordance with the provisions of the National Structural Code of the Philippines-NSCP)",
      items: [],
    },
    {
      id: 6,
      list: "Three (3) sets of Electrical Analysis and Design, signed and sealed over the printed name of the duly licensed and registered Professional Electrical Engineer",
      items: [],
    },
    {
      id: 7,
      list: "One (1) photocopy of latest PRC Identification Card and Professional Tax Receipt, signed (three specimen signatures) and sealed by the respective professionals",
      items: [],
    },
    {
      id: 8,
      list: "Four (4) sets of duly notarized Bill of Materials/Cost Estimate of the building or structure to be erected, signed and sealed over the printed name by a duly licensed and registered Architect or Civil Engineer, and approved by the owner/applicant",
      items: [],
    },
    {
      id: 9,
      list: "One (1) Construction Logbook, signed and sealed over the printed name of the duly licensed and registered Civil Engineer or Architect- In-Charge of construction, and signed by the owner/applicant",
      items: [],
    },
    {
      id: 10,
      list: "Certificate of Approval of Construction Safety and Health Program (CSHP) (Department of Labor and Employment)",
      items: [],
    },
    {
      id: 11,
      list: "Affidavit of Undertaking (for clearances from National Government Agencies which can be submitted 30 days or less after the issuance of the Building Permit per JMC No. 2018-01, applicable for Simple Structures only)",
      items: [],
    },
    {
      id: 12,
      list: "Special Power of Attorney (for individuals) or Board Resolution/Secretary's Certificate (for corporations) for the authorized representative/signatory in behalf of the owner/applicant",
      items: [],
    },
    {
      id: 13,
      list: "Other Zoning requirements, if necessary/applicable:",
      items: [
        "Affidavit of Non-Objection",
        "Affidavit of Undertaking on Lot Occupancy",
        "Barangay Resolution/Endorsement",
        "Manifestation",
        "Simple Subdivision Approval/Copy of Approved Subdivision Plan",
        "Other pertinent documents",
      ],
    },
    {
      id: 14,
      list: "Proof of lot/property ownership",
      items: [
        " In case the applicant is the registered owner of the lot, one (1) certified true copy of latest Original Certificate of Title (OCT)/ Transfer Certficate of Title (TCT), on file with the Registry of Deeds",
        "In case the applicant is not the registered owner of the lot, in addition to the certified true copy of latest Original Certificate of Title (OCT)/ Transfer Certficate of Title (TCT), duly notarized copy of the Contract of Lease, Award Notice, Deed of Absolute Sale, Contract to Sell, Extra-Judicial Settlement or Authority from the registered ownery",
      ],
    },
  ];

  return (
    <div className="pt-5 container mx-auto px-4 relative bg-white w-[640px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),_0px_1px_1px_0px_rgba(0,0,0,0.14),_0px_1px_3px_0px_rgba(0,0,0,0.12)] rounded">
      <div className="p-5">
        <Header
          certname="Building Permit Application"
          lguLogo="/lgu-logo.png"
          province="province of bohol"
          city="City of Tagbilaran"
        />

        <ReqList requirements={requirements} />
      </div>
    </div>
  );
};

export default BPA;
