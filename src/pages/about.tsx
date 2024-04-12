import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-10 my-16 items-center">
      <div className="flex flex-col gap-y-8">
        <h1 className="font-bold text-4xl">{t("aboutmetitle")}</h1>
        <h1>{t("aboutmetitle1")}</h1>
        <h1>{t("aboutmdesec")}</h1>
        <h1>{t("aboutmdesec1")}</h1>
        <h1>{t("aboutmdesec2")}</h1>
        <h1>{t("aboutmdesec3")}</h1>
        <h1>{t("aboutmdesec4")}</h1>
        <h1>{t("aboutmdesec5")}</h1>
        <h1>{t("aboutmdesec6")}</h1>
        <h1>{t("aboutmdesec7")}</h1>
        <h1>{t("aboutmdesec8")}</h1>
        <h1>{t("aboutmdesec9")}</h1>
      </div>
      <img src="/aboutme.png" alt="" />
    </div>
  );
};

export default About;
