import { Card, Image, Skeleton, Text } from "@mantine/core";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import { WinterProductHome } from "../lib/types/home";

interface CardComponentProps {
  data: WinterProductHome[];
  t: TFunction<"translation", undefined>;
  isLoading: boolean;
}

const CardsComponent = ({ data, t, isLoading }: CardComponentProps) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-1 sm3:grid-cols-2 md:grid-cols-3  items-center gap-5">
      {isLoading ? (
        Array.from({ length: 6 }, (_, i) => i).map((_item, index) => (
          <Skeleton key={index} height={200} radius="md" />
        ))
      ) : data?.length === 0 ? (
        <Text>{t("noData")}</Text>
      ) : (
        data.map((card) => {
          return (
            <Link key={card.id} to={`product/${t(card.name)}`}>
              <Card
                shadow="sm"
                padding="lg"
                className="my-3"
                radius="md"
                withBorder
              >
                <Card.Section component="a">
                  <Image src={`${card.img}`} height={160} alt="Norway" />
                </Card.Section>
                <Text
                  size="lg"
                  mt="md"
                  className="hover:cursor-pointer  transition-all duration-150 hover:scale-105 hover:text-[red]"
                >
                  {t(card.name)}
                </Text>
              </Card>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default CardsComponent;
