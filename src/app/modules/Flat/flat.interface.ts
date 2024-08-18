
export interface IFlat{
  squareFeet: number;
  totalBedrooms: number;
  totalRooms: number;
  utilitiesDescription: string;
  location: string;
  description: string;
  rent: number;
  advanceAmount: number;
};

export type IFlatFilterData = {
  searchTerm?: string | undefined;
  availability?: string | undefined;
};

export type TOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
};