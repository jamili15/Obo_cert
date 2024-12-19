export type RequirementItem = {
  id: number;
  list: string;
  items?: string[];
};

// export type BpaTypes = {
//   id: number;
//   list: string;
//   listItems?: {
//     item: string[];
//   }[];
// };

export type BpaTypes = {
  id?: number;
  list?: string[];
  listitems?: string[];
  items?: string[];
  item?: string[];
  subitem?: string[];
};
