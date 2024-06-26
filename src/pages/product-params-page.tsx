import { Skeleton, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ContactComponent from "../components/contact";
import { getSummerProductsHome } from "../lib/api";
import { WinterProductHome } from "../lib/types/home";

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

  document.title = `${t(id as string)}`;

  const datas = summer.filter((el) => {
    return t(el.name) == t(id as string);
  });
  console.log(datas);
  console.log(summer);

  return (
    <div>
      {isLoading ? (
        <div className="grid gap-10 grid-cols-2 mt-16">
          {Array.from({ length: 2 }, (_, i) => i).map((_item, index) => (
            <Skeleton key={index} height={400} radius="md" />
          ))}
        </div>
      ) : (
        <>
          {datas.map((prod) => {
            return (
              <div className="grid gap-14 sm:grid-cols-1 md3:grid-cols-2 mt-16 items-center">
                <img src={prod.img} alt="" />

                <div className="sm:p-0 md3:pl-36">
                  <h1 className="text-3xl font-bold my-5">{t(prod.name)}</h1>
                  <Table
                    striped
                    highlightOnHover
                    withTableBorder
                    withColumnBorders
                    verticalSpacing="md"
                  >
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>Material:</Table.Td>
                        <Table.Td>100% cotton flannel</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Pillowcase:</Table.Td>
                        <Table.Td>50x70 cm (2 pcs.)</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Bed sheet:</Table.Td>
                        <Table.Td>260×280 cm (1 piece)</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Duvet cover:</Table.Td>
                        <Table.Td> 160x220 cm (2 pcs.)</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Size:</Table.Td>
                        <Table.Td>Special size</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Manufacturer:</Table.Td>
                        <Table.Td>Bukhara Natural Product</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                    <h1></h1>
                    <Table.Caption>
                      <h1 className="text-justify text-2xl">
                        Category :
                        <span className=" font-extralight text-2xl font-serif text-red-600 ml-1">
                          {`${
                            prod.path == "summer"
                              ? t("summercollectiontitle")
                              : t("qishcollectiontitle")
                          }`}
                        </span>
                      </h1>
                    </Table.Caption>
                  </Table>
                </div>
              </div>
            );
          })}
        </>
      )}

      <Tabs className="flex flex-col mt-16 justify-center items-center">
        <TabList>
          <Tab>{t("desc")}</Tab>
          <Tab>{t("reviews")}(0)</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-y-5  md:max-w-4xl m-[25px_auto]">
            <h1 className="text-2xl text-[#444444] font-serif font-semibold">
              {t("wintercollectioncardtavsif")}
            </h1>
            <h1 className="text-2xl text-[#444444] font-serif font-semibold">
              {t("paramstitle")}
            </h1>
            <h1 className="text-[#666666]">{t("paramsdescription")}</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-y-8 mt-16">
            <span className="text-gray-400">{t("revtitle")}</span>
            <span className="font-bold text-2xl">{t("revtitle2")}</span>
            <h1>{t("revdesc")}</h1>
            <div className="flex gap-2 items-center">
              <h1 className="font-bold">{t("mark")}</h1>{" "}
              <ReactStars count={5} size={24} color2={"#ffd700"} />
            </div>
          </div>
          <ContactComponent />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductParamsPage;
