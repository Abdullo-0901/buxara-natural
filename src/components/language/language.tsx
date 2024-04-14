import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  // Function to toggle language selection menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Setting initial language based on localStorage or defaulting to "en"
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLngOne") || "tj"
      : "uz";

  // State to hold the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  // Effect to update i18n language and localStorage when selected language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("i18nextLngOne", selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  // Function to handle language change
  const onChangeLanguage = (value: any) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="custom-dropdown" onClick={toggleMenu}>
      {/* Language selection dropdown */}
      <form className="max-w-sm mx-auto">
        <select
          id="countries"
          onChange={(e) => onChangeLanguage(e.target.value)}
          value={selectedLanguage}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="tj">Точики</option>
          <option value={"uz"}>Uzbek</option>
          <option value="ru">Russia</option>
          <option value="en">English</option>
        </select>
      </form>
    </div>
  );
}

export default Language;
