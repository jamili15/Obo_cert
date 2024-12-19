import { requirementsData } from "@/data";
import { BpaTypes } from "@/types";
import React from "react";

interface ReqListProps {
  requirements: BpaTypes[];
}

const ReqList: React.FC<ReqListProps> = ({ requirements }) => {
  const data = requirementsData;

  return (
    <main className="pb-48">
      <ol className="list-decimal space-y-4 font-bold pl-5">
        <li>
          <h1>{data[0].category}</h1>
          <ul className="list-disc pl-10 font-normal">
            <li>
              <h2 className="font-bold text-[14px]">
                {data[0].requirements[0].description}
              </h2>
              <div className="relative -left-4 text-sm leading-tight">
                <p className="text-justify">
                  - If the LOT/PROPERTY is not in the name of the applicant (any
                  of the following): Deed of Absolute Sale, Lease Purchase
                  Agreement, Deed of Assignment, Memorandum of Agreement,
                  Extrajudicial Settlement, Authority to Construct, Lease
                  Contract or Certification from the Lessor, Conditional Deed of
                  Sale or Contract of Sale.
                </p>
                <p className="text-justify">
                  - If Transfer Certificate of Title (TCT) is in the name of a
                  Corporation: Secretary’s Certificate or Board Resolution of
                  Authorized Signatory for the application.
                </p>
                <p className="text-justify">
                  - If a Representative is applying in behalf of the applicant:
                  Notarized Authorization letter to transact with OBO (with
                  Valid ID of applicant and representative).
                </p>
                <p className="text-justify">
                  - If a Representative is signing in behalf of the applicant:
                  Notarized Special Power of Attorney(SPA) with Valid ID of
                  applicant and representative.
                </p>
                <p className="text-justify">
                  - If NO INDIVIDUAL title: Approved Subdivision plan w/ Lot
                  Boundaries and Technical description.
                </p>
                <p className="text-justify">
                  - In the Absence of Approved Subdivision plan: Authority to
                  Construct.
                </p>
                <p className="text-justify">
                  - For Tower Crane Installation/ Firewall: Neighbor’s consent.
                </p>
              </div>
            </li>
          </ul>
        </li>

        <li className="font-bold">
          <h1>Other Clearances (1 original copy and 2 photocopies)</h1>
          <ul className="list-disc pl-10 font-normal leading-tight">
            <li>
              <h2 className="font-bold text-[14px]">
                For Towers: CAAP clearance (1 original copy and 2 photocopies)
              </h2>
              <div className="relative -left-4 text-sm">
                <p className="text-justify">
                  - If telecommunications Tower infrastructure is (1) in excess
                  of 50 meters height and in the direct flight plan within a
                  3-kilometer radius of an airport; or (ii) shall be constructed
                  within the 10-kilometer radius of communication-navigation
                  surveillance facilities located off-airport.
                </p>
                <p className="text-justify">
                  - Affidavit of Undertaking, certified by a Geodetic Engineer
                  conformed by the owner (notarized, 1 original copy and 2
                  photocopies)attesting that the proposed structure will be
                  built outside the CAAPcritical areas for towers within 50
                  meters height.
                </p>
              </div>
            </li>
            <li className="">
              <h2 className="font-bold text-[14px]">
                Affidavit of Undertaking Form (duly filled out and notarized)
              </h2>
              <div className="relative -left-4">
                <p className="text-justify text-[14px]">
                  - For other clearances to be submitted within 30 days after
                  the issuance of the Building
                </p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-bold">Technical Documents</h2>
          <ul className="list-disc pl-10 font-normal text-sm leading-tight">
            <li>
              <h2 className="font-bold ">
                One (1) photocopy of valid PRC ID & current PTR with seal and 3
                specimen signatures of the professional.
              </h2>
            </li>
            <li>
              <h2 className="font-bold">
                One (1) original and 2 photocopies of Sketch Plan (with clear
                landmarks) and Relocation Survey report.(Include Structural
                Survey Plan if the Structure is existing).
              </h2>
            </li>
            <li>
              <h2 className="font-bold ">
                Four (4) copies of system generated and notarized Unified
                Application Form for Building Permit with ancillary/accessory
                application forms (if applicable).
              </h2>
            </li>
          </ul>
          <ol className="list-upperAlpha pl-10 font-normal text-sm leading-tight">
            <li>Electrical Permit Forms</li>
            <li>Plumbing/Sanitary Permit Forms</li>
            <li>Electronics Permit Forms</li>
            <li>Mechanical Permit Forms</li>
            <li>Fencing Permit Forms (duly notarized)</li>
            <li>Demolition Permit Forms (duly notarized)</li>
            <li>Excavation Permit Forms</li>
            <li>Temporary Sidewalk Enclosure and Occupancy Permit Forms</li>
            <li>Sign Permit Forms</li>
            <li>
              Other ancillary/accessory permit forms (Rule III, Section 301,
              Item 2 of IRR of PD 1096)
            </li>
          </ol>
          <ul className="list-disc pl-10 font-normal text-sm ">
            <li>
              <h2 className="font-bold">
                Four (4) sets of Building Plans, design plans and other
                documents as follows:
              </h2>
            </li>
          </ul>
          <ol className="list-upperAlpha pl-10 font-normal space-y-4 text-sm leading-tight">
            <li>
              <h2>Architectural/ Building:</h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3">
                <li>
                  (BP 344 – Accessibility Law compliance for commercial,
                  institutional, industrial & public assembly buildings).
                  Details, in the form of plans, elevations/sections:
                </li>

                <ol className="list-lowerRoman pl-10 font-normal pt-3">
                  <li>PWD parking (3.70 x 5.00m)</li>
                  <li>PWD ramp (1:12 max. gradient)</li>
                  <li>
                    PWD toilet (1.70m x 1.80m clear width – refer to BP 344)
                  </li>
                </ol>
                <li>
                  Vicinity Map/Location Plan within a 2.00-kilometer radius for
                  commercial, industrial, and institutional complex and within a
                  half-kilometer radius for residential buildings, at any
                </li>
                <li>
                  Perspective drawn at a convenient scale and taken from a
                  vantage point (bird’s eye view or eye level).
                </li>
                <li>
                  Floor Plans drawn to scale of not less than 1:100 showing:
                  gridlines, complete identification of rooms or functional
                  spaces
                </li>
                <li>
                  Elevations, at least four (4), same scale as floor plans
                  showing: gridlines; natural ground to finish grade elevations;
                  floor to floor heights; door and window marks, type of
                  material and exterior finishes; adjoining existing
                  structure/s, if any, shown in single hatched lines.
                </li>
                <li>
                  Sections, at least two (2), showing: gridlines; natural ground
                  and finish levels; outline of cut and visible structural
                  parts; doors and windows properly labeled reflecting the
                  direction of opening; partitions; built-in cabinets, etc.;
                  identification of rooms and functional spaces cut by section
                  lines.
                </li>
                <li>
                  Schedule of Doors and Windows showing their types,
                  designations/marks, dimensions, materials, and number of sets.
                </li>
                <li>
                  Reflected ceiling plan showing: design, location, finishes and
                  specifications of materials, lighting fixtures, diffusers,
                  decorations, air conditioning exhaust and return grills,
                  sprinkler nozzles, if any, at scale of at least 1:100.
                </li>
                <li>
                  Layout plan of each floor indicating the fire evacuation route
                  to safe dispersal areas, standpipes with fire hose, fire
                  extinguishers, first aid kits/cabinets, fire alarm, fire
                  operations room, emergency lights, signs, etc.
                </li>
                <li>
                  Details of windows, fire exits with grilled windows and
                  ladders <br />
                  <span className="relative -left-5">
                    - For Interior Renovation Projects
                  </span>
                </li>
                <li>Key Plan</li>
                <li>
                  Front Elevation, same scale as floor plans showing: gridlines;
                </li>
                <li>Sections, at least two (2), showing: gridlines;</li>
              </ol>
            </li>
            <li>
              <h2>Structural</h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3 space-y-5">
                <li>
                  <h2>Structural Design Analysis</h2>
                  <ol className="list-lowerRoman pl-10 font-normal pt-3 space-y-5">
                    <li>
                      <h2>for 2 storeys</h2>
                      <ol className="list-lowerAlpha pl-10 font-normal pt-3">
                        <li>
                          <h2>
                            One (1) copy of Structural Design Analysis &
                            Computation
                          </h2>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h2>for 3-5 storeys</h2>
                      <ol className="list-lowerAlpha pl-10 font-normal pt-3">
                        <li>
                          <h2>One (1) copy of Load Test w/ photos</h2>
                        </li>
                        <li>
                          <h2>
                            One (1) copy of Structural Design Analysis &
                            Computation
                          </h2>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h2>If 6 storeys and up</h2>
                      <ol className="list-lowerAlpha pl-10 font-normal pt-3">
                        <li>
                          <h2>One (1) copy Soil exploration w/ photos</h2>
                        </li>
                        <li>
                          <h2>
                            One (1) copy of Structural Design Analysis &
                            Computation
                          </h2>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <h2>Structural Plans</h2>
                  <ol className="list-lowerRoman pl-10 font-normal pt-3">
                    <li>
                      Structural plans coincide with the structural analysis
                    </li>
                    <li>
                      Foundation Plans and Details at scale of not less than
                      1:100.
                    </li>
                    <li>
                      Floor/Roof Framing Plans and Details at scale of not less
                      than 1:100 Schedule of Column, Footings, Wall Footings and
                      Floor Slabs
                    </li>
                    <li>Schedule of Beams and Girders/Details</li>
                    <li>Schedule of Trusses (Truss Details)</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <h2>
                Electrical plans coincide with other plans of all sections
                signed and sealed
              </h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3">
                <li>Legend or Symbols</li>
                <li>General Notes and/or Specifications</li>
                <li>Electrical Layout</li>
                <li>Schedule of Beams and Girders/Details</li>
                <li>
                  Schedule of Loads, Transformers, Generating/UPS Units (Total
                  kVA for each of the preceding items shall be indicated in the
                  schedule)
                </li>
                <li>One line diagram</li>
              </ol>
            </li>
            <li>
              <h2>Plumbing/Sanitary</h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3">
                <li>
                  Plumbing plans coincide with other plans of all sections
                  signed and sealed
                </li>
                <li>
                  Plumbing Plans, Layouts and Details, of minimum scale 1:50
                </li>
                <li> Legend and General Notes</li>
                <li>
                  Isometric drawings of the systems (incorporate rain water
                  tank)
                </li>
                <li>Design analysis and technical specifications</li>
                <li>Rainwater tank blow up plans/details</li>
                <li>Water supply / line plan</li>
                <li>Drainage, waste and vent plan</li>
                <li>Storm water drainage plan (incorporate rainwater tank)</li>
                <li>
                  Septic tank, catch basin, grease trap, cistern tank, pressure
                  tank, overhead water tank, sump pit and pump details (if
                  applicable)
                </li>
                <li>
                  Sewage Treatment Plant (STP) (if applicable) Planned and
                  designed by only registered and licensed Sanitary Engineer
                  Design analysis and computation signed and sealed by SE
                </li>
              </ol>
            </li>
            <li>
              <h2>
                Geodetic (with Sketch Plan, Relocation Survey Report except for
                Subdivisions)
              </h2>
              <ol className="list-none pl-5 font-normal pt-3">
                <li>
                  - If the Building/ Structure is existing, Submit Structural
                  Survey plan
                </li>
                <li>
                  - If individual title is still for approval, Submit Narrative
                  Survey report
                </li>
                <ol className="list-upperRoman pl-14 font-normal pt-3">
                  <li>
                    Vicinity Map/Location Plan within a 2.00-kilometer radius
                    for commercial, industrial, and institutional complex and
                    within a half-kilometer radius for residential buildings, at
                    any convenient scale showing prominent landmarks or major
                    thoroughfares for easy reference.
                  </li>
                  <li>
                    Site Development Plan showing technical description,
                    boundaries, orientation and position of proposed
                    building/structure in relation to the lot, existing or
                    proposed access road and driveways and existing public
                    utilities/services. Existing buildings within and adjoining
                    the lot shall be hatched and distances between the proposed
                    and existing buildings shall be indicated.
                  </li>
                  <li>Lot Survey Plans, including but not limited to:</li>
                </ol>
                <ol className="list-lowerRoman pl-14 font-normal pt-3">
                  <li>Vicinity Map/ Location Plan</li>
                  <li>Lot Plan</li>
                  <li>Relocation Survey Plan and Repor</li>
                  <li> Line and Grade</li>
                  <li>
                    Detailed Topographic Plan of the site and immediate vicinity
                  </li>
                </ol>
              </ol>
            </li>
            <li>
              <h2>Electronics(if applicable)</h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3">
                <li>
                  Electronics plans coincide with other plans of all sections
                </li>
                <li>General layout plans with legends</li>
                <li>Single line diagram</li>
                <li>Riser diagram</li>
                <li>Isometry of the system</li>
                <li>Unit/Equipment specifications</li>
                <li>Design analysis, as applicable</li>
              </ol>
            </li>
            <li>
              <h2> Mechanical(if applicable)</h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3">
                <li>Location Plan and Key Plan</li>
                <li>
                  General Layout Plan for each floor, drawn to a scale of not
                  less than 1:100, indicating the equipment in heavier lines
                  than the building outline with names of machinery and
                  corresponding brake horsepower shall be indicated.
                </li>
                <li>
                  Plans drawn to scale of 1:100 indicating location of store
                  rooms, fuel tanks, fire extinguishing systems, fire doors,
                  fire escape ladders and other protective facilities
                </li>
                <li>
                  Detailed Plans of machinery foundations and supports drawn to
                  scale of at least 1:50
                </li>
                <li>
                  Detailed plans of fire suppression systems, location of
                  automatic and smoke detectors and alarm and initiating devices
                  used to monitor the conditions that are essential for the
                  proper operation including switches for the position of gate
                  valves as well as alert and evacuation signals; the detailed
                  layout of the entire safe area to be protected and the
                  heat/smoke ventilation system
                </li>
                <ol className="list-lowerRoman pl-10 font-normal pt-3">
                  <li>
                    Design Computation (Hydraulic calculation) of Fire
                    Suppression System as per National Fire Protection
                    Association (NFPA) standards
                  </li>
                  <li>
                    If additional massive machinery like elevators, escalators,
                    generator sets, boilers, etc.:
                  </li>
                </ol>
                <ol className="list-lowerAlpha pl-10 font-normal pt-3">
                  <li>
                    Certificate of Structural Stability (original copy/ signed &
                    sealed w/ PRC/PTR), stating the gross weight of the
                    machinery and the grid location of the structural members
                    that will support the machinery.
                  </li>
                  <li>
                    copy of approved Structural Analysis and Design Computation
                    copy of approved Structural Plans
                  </li>
                </ol>
              </ol>
            </li>
            <li>
              <h2>Fire Protection(if applicable)</h2>
              <ol className="list-upperRoman pl-10 font-normal pt-3">
                <li>
                  For Pylon/ Billboard
                  <div className="relative left-4">
                    <p className="text-justify p-3">
                      - One (1) copy of Structural Design Analysis & Computation
                    </p>
                  </div>
                </li>
                <li>
                  Three (3) sets Notarized Estimated Value of the Building/
                  Structure to be erected as declared by the owner/s (signed and
                  sealed by duly licensed professionals and signed by owner/s)
                </li>
                <li>
                  Two (2) Sets of Technical Specifications (signed and sealed by
                  duly licensed professionals and signed by owner/s)
                </li>
                <li>
                  One (1) Set of Construction Safety and Health Program. In
                  addition, provide picture if the building is existing.
                </li>
                <li>
                  One (1) copy of Structural Stability Certificate for existing
                  buildings at least 15 years old (See Annex 5)
                </li>
                <li>
                  <h2>One (1) Pc Long size folder with fastener:</h2>

                  <div className="relative left-4 px-3 py-5">
                    <p className="text-justify">
                      YELLOW FOLDER – Complex Applications
                    </p>
                    <p className="text-justify">
                      The process of securing a Building Permit, as required for
                      COMPLEX application comprising of:
                    </p>
                    <ol className="list-decimal pl-5 font-normal pt-3">
                      <li>
                        Interior Renovations covered by an appropriate Building
                        Permit
                      </li>
                      <li>
                        Conversion of existing building occupancy classification
                      </li>
                      <li>
                        Multiple unit residential houses (such as row houses,
                        townhouses, and the like)
                      </li>
                      <li>
                        Single detached residential house, not more than 7
                        storeys
                      </li>
                      <li>Commercial buildings not more than 9 storeys</li>
                      <li>Warehouses not more than 9 storeys</li>
                      <li>Market buildings not more than 9 storeys</li>
                      <li>
                        Demolition (any type of occupancy/ use with area of more
                        than three hundred (300) square meters)
                      </li>
                      <li>Billboard structures</li>
                      <li>
                        All other types of Occupancy not more than 9 storeys and
                        communication towers (based on JMC 1, s. 2020)
                      </li>
                    </ol>
                  </div>
                  <div className="relative left-4 px-3 pb-5">
                    <p className="text-justify">
                      RED FOLDER – Highly Technical Applications
                    </p>
                    <p className="text-justify">
                      HIGHLY TECHNICAL applications comprising of:
                    </p>
                    <ol className="list-decimal pl-5 font-normal pt-3">
                      <li>Commercial buildings exceeding 9 storeys</li>
                      <li>Market buildings exceeding 9 storeys</li>
                      <li>All applications belonging to Group D of NBCP</li>
                      <li>
                        All applications belonging to Group H and I of NBCP
                      </li>
                      <li>
                        All other types of occupancy of more than 9 storeys
                      </li>
                      <li>
                        Special structures such as but not limited to Aerodome
                        facilities, before construction work or operation can
                        commence in compliance with the National Building Code
                        of the Philippines (PD 1096), its IRR and Referral
                        Codes, other pertinent laws, and directives.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  For BUILDING PERMIT – Amendatory (AS-BUILT), attach Building
                  Permit and/or Occupancy Inspection Report and 1 complete set
                  of approved building plans.
                </li>
                <li>
                  For BUILDING PERMIT - ADDITIONAL/ REPAIR or Renovation, attach
                  Building permit and/or Certificate of Occupancy and 1 complete
                  set of approved building plans.
                </li>
                <div className="relative left-4 px-3 p-5">
                  <p className="text-justify">Notes:</p>

                  <ol className="list-decimal pl-14 font-normal pt-3">
                    <li>
                      GOVERNMENT BUILDINGS are exempted from Building Permit
                      fees only.
                    </li>
                    <li>
                      {" "}
                      The design should incorporate provisions of Philippine
                      Green Building Code (PGBC) with the required minimum Total
                      Gross Floor Area (TGFA).
                    </li>
                    <li>
                      – see Table 1, Section 8 of PGBC for minimum TGFA in Annex
                      4
                    </li>
                    <li>
                      Malls, Hospitals and other Public Buildings such as City
                      Hall, Sangguniang Panlungsod, Central Public Market,
                      Fishport Complex, Colleges and Universities, Public
                      Transportation Terminal, Camp Fermin Lira, and the
                      Philippine National Police XII Headquarters located within
                      the Territorial Jurisdiction of General Santos City to
                      Provide Prayer Rooms for Muslims as per Ordinance No. 19
                      Series of 2022. (See Annex 7)
                    </li>
                    <li>
                      The design should incorporate requirements for Earthquake
                      Recording Instrumentation (ERI), based on EO No. 1, s.
                      2020. See Annex 3
                    </li>
                  </ol>
                </div>
                <div className="relative left-2 px-3 pb-5">
                  <p className="text-justify">Reminders:</p>
                  <ol className="list-none pl-10 font-normal pt-3">
                    <li>
                      ALL NECESSARY DOCUMENTS MUST BE COMPLETE, SIGNED, AND
                      SEALED BY PROFESSIONALS
                    </li>
                  </ol>
                </div>
                <div className="relative left-2 px-3 ">
                  <p className="text-justify">
                    Segregate the following documents in a Brown Folder for
                    submission to CPDO: (1 copy each)
                  </p>
                  <ol className="list-decimal pl-14 font-normal pt-3">
                    <li>Lot Title / Any Form of Ownership</li>
                    <li>Sketch Plan</li>
                    <li>Site Development Plan</li>
                    <li>Architectural Plans</li>
                    <li>Notarized Cost Estimates</li>
                    <li>Unified Application Form</li>
                    <li>Approved Plan (for renovation/As Built)</li>
                  </ol>
                </div>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </main>
  );
};

export default ReqList;
