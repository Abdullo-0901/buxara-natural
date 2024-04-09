import { Card, Image, Text } from "@mantine/core";
import { WinterProductHome } from "../lib/types/home";
import { TFunction } from "i18next";

interface CardComponentProps {
  data: WinterProductHome[];
  t: TFunction<"translation", undefined>;
}

const CardsComponent = ({ data, t }: CardComponentProps) => {
  return (
    <div className="grid grid-cols-5  items-center gap-5">
      {data.map((card) => {
        return (
          <Card
            shadow="sm"
            key={card.id}
            padding="lg"
            className="my-3"
            radius="md"
            withBorder
          >
            <Card.Section component="a" href="https://mantine.dev/">
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
        );
      })}
    </div>
  );
};

export default CardsComponent;
