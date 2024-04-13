import { Card, Image, Notification, Skeleton, Text, rem } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getSummerProductsHome } from "../lib/api";
import { WinterProductHome } from "../lib/types/home";

const Colection: React.FC = () => {
  document.title = "Collection";

  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("winter");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [summerProducts, setSummerProducts] = useState<WinterProductHome[]>([]);

  // Function to handle language change
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  // Fetch summer products on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const products = await getSummerProductsHome();
        setSummerProducts(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoize filtered summer products based on the selected language
  const filteredProducts = useMemo(() => {
    return summerProducts.filter(
      (product) => product.path === selectedLanguage
    );
  }, [summerProducts, selectedLanguage]);
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  return (
    <section>
      <header className="grid  sm:grid-cols-1  mt-12 my-7 md:grid-cols-2 items-center">
        <h1 className="text-4xl font-bold">{t("navlink2")}</h1>
        <div className="flex justify-end">
          <select
            id="countries"
            onChange={handleLanguageChange}
            value={selectedLanguage}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="winter">{t("Winter Collection")}</option>
            <option value="authm">{t("Autumn Collection")}</option>
            <option value="summer">{t("Summer Collection")}</option>
            <option value="kuz">{t("Fall Collection")}</option>
          </select>
        </div>
      </header>
      <main>
        <div className="grid lg:grid-cols-5 sm:grid-cols-1 sm3:grid-cols-2 md:grid-cols-3 items-center gap-5">
          {isLoading ? (
            // Display skeleton loaders while loading
            Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} height={200} radius="md" />
            ))
          ) : filteredProducts.length === 0 ? (
            // Display message if no products are found
            <Notification
              className="w-full col-span-5 shadow-2xl"
              icon={xIcon}
              color="red"
              title="Bummer!"
            >
              No products were found matching your request.
            </Notification>
          ) : (
            // Map and display filtered products
            filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.name}`}>
                <Card
                  shadow="sm"
                  padding="lg"
                  className="my-3"
                  radius="md"
                  withBorder
                >
                  <Card.Section component="a">
                    <Image src={product.img} height={160} alt={product.name} />
                  </Card.Section>
                  <Text
                    size="lg"
                    mt="md"
                    className="hover:cursor-pointer transition-all duration-150 hover:scale-105 hover:text-red"
                  >
                    {t(product.name)}
                  </Text>
                </Card>
              </Link>
            ))
          )}
        </div>
      </main>
    </section>
  );
};

export default Colection;
