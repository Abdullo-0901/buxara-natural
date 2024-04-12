import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface CardComponentsProps {
  img: string;
  color: string;
}

const CardComponents = ({ color, img }: CardComponentsProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full my-14 mb-28 sm:mt-[33%] md3:mt-[20%] transition-all duration-1000 hover:shadow-2xl">
      {/* Image */}
      <img
        src={`/${img}`}
        className="absolute sm:w-[100%]  md3:w-[60%] img sm:-top-[0%] md3:top-[40%]"
        alt="Image"
        style={{ zIndex: 1 }}
      />

      {/* Background container with color */}
      <div
        className="rounded-2xl max-w-full  flex sm:flex-col md3:flex-row justify-between sm:h-auto md3:h-[320px] sm:p-3 md3:p-11"
        style={{ backgroundColor: `#${color}`, zIndex: 0 }}
      >
        {/* Content */}
        <div className="flex sm:mt-[110px] mmd:mt-[185px] md3:mt-0 flex-col sm:items-center   lg:items-start">
          <span className="sm:text-[40px] md:text-[120px] font-serif text-white font-bold">
            100%
          </span>
          <span
            className="text-white font-serif font-400"
            style={{ letterSpacing: "2px" }}
          >
            {t("mahsulotsifat")}
          </span>
        </div>

        {/* Description */}
        <div className="sm:w-full   md3:w-[327px]  lg2:w-[427px] flex flex-col justify-center items-center gap-y-2">
          <h1 className="text-white sm:text-xl md3:text-2xl lg2::text-3xl font-serif font-semibold">
            {t("mahsulotabout")}
          </h1>
          <h1 className="text-white sm:text-center">{t("mahsulotdes")}</h1>
          <Button>{t("mahsulotbtn")}</Button>
        </div>
      </div>
    </section>
  );
};

export default CardComponents;
