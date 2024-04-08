import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <section className="bg-[#464342]  h-[90vh] pr-1 items-center flex justify-between  rounded-3xl w-full relative ">
        <img className="absolute right-0  " src="/home.png" alt="" />

        <div>
          <h1 className="text-[81px] text-white font-bold">
            {t("hometitle1")}
          </h1>
          <h1>{t("hometitle2")}</h1>
          <h1>{t("hometitle3")}</h1>
        </div>
      </section>
      <div>ljkhn</div>
    </div>
  );
};

export default Home;
