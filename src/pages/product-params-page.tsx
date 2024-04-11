import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getSummerProductsHome } from "../lib/api";
import { WinterProductHome } from "../lib/types/home";
import { Button, Skeleton, Table, Tabs } from "@mantine/core";

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
              <div className="grid gap-14 grid-cols-2 mt-16 items-center">
                <img src={prod.img} alt="" />

                <div className="pl-36">
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
      <Button></Button>

      <Tabs defaultValue="gallery" className="mt-32">
        <Tabs.List>
          <Tabs.Tab value="gallery">Description</Tabs.Tab>
          <Tabs.Tab value="messages">Reviews(0)</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default ProductParamsPage;
