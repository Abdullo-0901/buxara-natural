import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface CardComponentsProps {
  img: string;
  color: string;
}

const CardComponents = ({ color, img }: CardComponentsProps) => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full my-14 mb-28 mt-48 transition-all duration-1000 hover:shadow-2xl ">
      <img src={`/${img}`} className="absolute w-[60%] img" alt="wedwe" />
      <div
        className={`bg-[${color}] rounded-2xl max-w-full flex justify-between h-[320px] p-11 `}
      >
        <div className="flex  flex-col items-start">
          <span className="text-[120px] font-serif text-white font-bold">
            100%
          </span>
          <span
            style={{ letterSpacing: "2px" }}
            className="text-[white] font-serif font-[400] tracking-normal "
          >
            {t("mahsulotsifat")}
          </span>
        </div>
        <div className="w-[427px] flex flex-col justify-center items-start gap-y-2">
          <h1 className="text-white text-3xl font-serif font-semibold">
            {t("mahsulotabout")}
          </h1>
          <h1 className="text-white">{t("mahsulotdes")}</h1>
          <Button>{t("mahsulotbtn")}</Button>
        </div>
      </div>
    </section>
  );
};

export default CardComponents;
