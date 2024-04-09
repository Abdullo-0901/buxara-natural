import { useTranslation } from "react-i18next";
import { getHomeSection2 } from "../lib/api";
import { useEffect, useState } from "react";
import { HomeSection } from "../lib/types/home";
import { Skeleton } from "@mantine/core";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeSection, setHomeSection] = useState<HomeSection[]>([]); // TODO: add state when API is ready.

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [fetchedHomeSection2] = await Promise.all([
          getHomeSection2(), // Get the first three users for now
        ]);
        setHomeSection(fetchedHomeSection2);
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
    </div>
  );
};

export default Home;
