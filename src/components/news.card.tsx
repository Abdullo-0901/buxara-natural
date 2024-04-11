import { Image } from "@mantine/core";
import { TFunction } from "i18next";

export interface NewsProps {
  img: string;
  text: string;
  title: string;
  t: TFunction<"translation", undefined>;
}

const NewsCard = ({ img, text, t, title }: NewsProps) => {
  return (
    <div className="flex flex-col gap-y-4 ">
      <div className="rounded-[30px]">
        <Image
          radius={30}
          h={200}
          className="hover:shadow-xl"
          w="auto"
          fit="contain"
          src={img}
        />
      </div>
      <div className="flex items-center gap-2">
        <span>05.10.2019</span>
        <span>от admin</span>
      </div>
      <p className="text-[#000000] text-[18px] font-bold">{t(title)}</p>
      <h1 className="text-[#a4a4a4]">{t(text)}</h1>
    </div>
  );
};

export default NewsCard;
