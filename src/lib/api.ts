import { home_section2 } from "./home/section2.data";
import { HomeSection } from "./types/home";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * 3000);
  });
};

export const getHomeSection2 = (): Promise<HomeSection[]> =>
  getAsync(home_section2);
