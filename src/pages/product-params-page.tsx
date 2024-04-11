import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getSummerProductsHome } from "../lib/api";
import { SummerProductHome, WinterProductHome } from "../lib/types/home";

const ProductParamsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [summer, setSummer] = useState<WinterProductHome[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [fetchedSummerCard] = await Promise.all([
          getSummerProductsHome(),
        ]);

        setSummer(fetchedSummerCard);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const datas = summer.filter((el) => {
    return t(el.name) == id;
  });
  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {datas.map((prod) => {
            return (
              <div className="grid gap-14 grid-cols-2">
                <img src={prod.img} alt="" />
                <h1>{t(prod.name)}</h1>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ProductParamsPage;
