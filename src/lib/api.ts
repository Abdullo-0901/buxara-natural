import { home_section2 } from "./home/section2.data";
import { winter_card_data } from "./home/winter-card.home.data";
import { HomeSection, WinterProductHome } from "./types/home";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * 3000);
  });
};

export const getHomeSection2 = (): Promise<HomeSection[]> =>
  getAsync(home_section2);

export const getWinterProductsHome = (): Promise<WinterProductHome[]> =>
  getAsync(winter_card_data);
