export interface HomeSection {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface WinterProductHome {
  id: number;
  name: string;
  img: string;
  path: string;
}

export interface SummerProductHome extends WinterProductHome {}
