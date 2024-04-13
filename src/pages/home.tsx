import { useTranslation } from "react-i18next";
import { getHomeSection2, getSummerProductsHome } from "../lib/api";
import { useEffect, useState } from "react";
import { HomeSection, WinterProductHome } from "../lib/types/home";
import { Skeleton } from "@mantine/core";
import CardComponents from "../components/card";
import CardsComponent from "../components/cards";
import NewsCard from "../components/news.card";

const Home = () => {
  document.title = "Home";
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeSection, setHomeSection] = useState<HomeSection[]>([]); // TODO: add state when API is ready.
  const [summer, setSummer] = useState<WinterProductHome[]>([]);

  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [fetchedHomeSection2, fetchedSummerCard] = await Promise.all([
          getHomeSection2(),
          getSummerProductsHome(),
        ]);
        setHomeSection(fetchedHomeSection2);
        setSummer(fetchedSummerCard);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <section className="bg-[#464342]  sm:h-auto sm2:h-[30vh] mmd:h-[45vh]  sm3:h-[40vh] md:h-[65vh] lg:min-h-[90vh] pr-1 items-center flex justify-end  rounded-3xl w-full relative ">
        <img
          className="absolute right-0 w-full -left-[22%]"
          src="/home.png"
          alt=""
        />

        <div>
          <h1 className="  md3:text-[68px] sm3:text-[32px] sm:text-[18px]  text-white font-bold">
            {t("hometitle1")}
          </h1>
          <h1 className="md3:text-[108px] sm3:text-[42px] sm:text-[28px] text-white font-bold">
            {t("hometitle2")}
          </h1>
          <h1 className="md3:text-[118px] sm3:text-[5 tex2px] sm:text-[32px] text-white font-bold">
            {t("hometitle3")}
          </h1>
        </div>
      </section>
      {/* section 2 */}

      <section className="grid sm:grid-cols-2 sm3:grid-cols-2 gap-5 lg:grid-cols-4 mt-8">
        {isLoading
          ? Array.from({ length: 4 }, (_, i) => i).map((_item, index) => (
              <Skeleton key={index} height={100} radius="md" />
            ))
          : homeSection?.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="flex sm:flex-col lg:flex-row justify-start  items-center gap-5"
                >
                  <img src={`/section2_home/${elem.img}`} />
                  <div>
                    <h1 className="font-bold sm:text-[14px] md:text-[18px]">
                      {t(elem.title)}
                    </h1>
                    <h1 className="text-[#bcbcbc] sm:text-[12px] ">
                      {t(elem.description)}
                    </h1>
                  </div>
                </div>
              );
            })}
      </section>

      {/* section 3 */}
      <CardComponents color="616884" img="card2.png" />

      {/* section  4 */}

      <section>
        <main className="flex justify-center flex-col items-center">
          <h1 className="text-5xl font-serif font-bold">
            {t("qishcollectiontitle")}
          </h1>
          <p className="text-[#bcbcbc] text-lg xl mt-3 font-serif">
            {t("wintercollectiondescription")}
          </p>
        </main>

        <CardsComponent
          isLoading={isLoading}
          data={summer.filter((el) => el.path == "winter")}
          t={t}
        />
      </section>

      <CardComponents color="504570" img="card3.png" />

      <section>
        <main className="flex justify-center flex-col items-center">
          <h1 className="text-5xl font-serif font-bold">
            {t("qishcollectiontitle")}
          </h1>
          <p className="text-[#bcbcbc] text-lg xl mt-3 font-serif">
            {t("summercollectiontitle")}
          </p>
        </main>

        <CardsComponent
          isLoading={isLoading}
          data={summer.filter((el) => el.path == "summer")}
          t={t}
        />
      </section>

      {/* section Cards */}

      <CardComponents color="307e7a" img="card4.png" />

      {/* News */}
      <section className="grid sm:grid-cols-1 mmd2:grid-cols-2 lg:grid-cols-3 sm:justify-center items-center gap-40">
        <NewsCard
          text="newscard1aboout"
          t={t}
          img="/news/news1.jpg"
          title="newscard1title"
        />
        <NewsCard
          text="newscard2aboout"
          t={t}
          img="/news/news2.jpg"
          title="newscard1title"
        />
        <NewsCard
          text="newscard3aboout"
          t={t}
          img="/news/news3.jpg"
          title="newscard1title"
        />
      </section>
    </div>
  );
};

export default Home;
