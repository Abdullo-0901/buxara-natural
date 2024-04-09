import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <section className="bg-[#464342] sm:h-auto sm2:h-[30vh] mmd:h-[45vh]  sm3:h-[40vh] md:h-[65vh] lg:h-[90vh] pr-1 items-center flex justify-end  rounded-3xl w-full relative ">
        <img
          className="absolute right-0 w-full -left-[22%]"
          src="/home.png"
          alt=""
        />

        <div>
          <h1 className="  md3:text-[68px] sm3:text-[32px] sm:text-[22px]  text-white font-bold">
            {t("hometitle1")}
          </h1>
          <h1 className="md3:text-[108px] sm3:text-[42px] sm:text-[32px] text-white font-bold">
            {t("hometitle2")}
          </h1>
          <h1 className="md3:text-[118px] sm3:text-[5 tex2px] sm:text-[42px] text-white font-bold">
            {t("hometitle3")}
          </h1>
        </div>
      </section>
      <div>ljkhn</div>
    </div>
  );
};

export default Home;
