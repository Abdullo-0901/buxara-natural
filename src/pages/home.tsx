import { useTranslation } from "react-i18next";
import {
  getHomeSection2,
  getSummerProductsHome,
  getWinterProductsHome,
} from "../lib/api";
import { useEffect, useState } from "react";
import { HomeSection, WinterProductHome } from "../lib/types/home";
import { Skeleton } from "@mantine/core";
import CardComponents from "../components/card";
import CardsComponent from "../components/cards";
import NewsCard from "../components/news.card";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeSection, setHomeSection] = useState<HomeSection[]>([]); // TODO: add state when API is ready.
  const [winter, setWinter] = useState<WinterProductHome[]>([]);
  const [summer, setSummer] = useState<WinterProductHome[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [fetchedHomeSection2, fetchedWinterCard, fetchedSummerCard] =
          await Promise.all([
            getHomeSection2(),
            getWinterProductsHome(),
            getSummerProductsHome(),
          ]);
        setHomeSection(fetchedHomeSection2);
        setWinter(fetchedWinterCard);
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
      {/* section 2 */}

      <section className="grid sm:grid-cols-1 sm3:grid-cols-2 gap-5 lg:grid-cols-4 mt-8">
        {isLoading ? (
          <div className="grid grid-cols-3 gap-5 my-5 col-span-4">
            <div>
              <Skeleton height={50} width={100} circle mb="xl" />

              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </div>
            <div>
              <Skeleton height={50} width={100} circle mb="xl" />

              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </div>
            <div>
              <Skeleton height={50} width={100} circle mb="xl" />

              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </div>
          </div>
        ) : (
          homeSection?.map((elem) => {
            return (
              <div key={elem.id} className="flex  items-center gap-5">
                <img src={`/section2_home/${elem.img}`} />
                <div>
                  <h1 className="font-bold text-[18px]">{t(elem.title)}</h1>
                  <h1 className="text-[#bcbcbc]">{t(elem.description)}</h1>
                </div>
              </div>
            );
          })
        )}
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

        <CardsComponent data={winter} t={t} />
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

        <CardsComponent data={summer} t={t} />
      </section>

      {/* section Cards */}

      <CardComponents color="307e7a" img="card4.png" />

      {/* News */}
      <section className="grid grid-cols-3 gap-40">
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
