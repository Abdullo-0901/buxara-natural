import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  document.title = "About";
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 my-16 items-center">
      <img
        className="rounded-3xl sm:block md:hidden "
        src="/aboutme.png"
        alt=""
      />
      <div className="flex flex-col gap-y-1">
        <h1 className="font-bold text-4xl">{t("aboutmetitle")}</h1>
        <h1>{t("aboutmetitle1")}</h1>
        <h1 className="">{t("aboutmdesec1")}</h1>
        <h1 className=" sm3:hidden lg:block">{t("aboutmdesec2")}</h1>
        <h1 className=" sm3:hidden lg:block">{t("aboutmdesec3")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec4")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec5")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec6")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec7")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec8")}</h1>
        <h1 className="sm3:hidden lg:block">{t("aboutmdesec9")}</h1>
      </div>
      <img
        className="rounded-3xl sm:hidden md:block  "
        src="/aboutme.png"
        alt=""
      />
    </div>
  );
};

export default About;
