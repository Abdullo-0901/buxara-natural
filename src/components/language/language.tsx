import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  // Function to toggle language selection menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Setting initial language based on localStorage or defaulting to "en"
  const initialLanguage =
    typeof window !== 'undefined' ? localStorage.getItem('i18nextLngOne') || 'en' : 'uz';

  // State to hold the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  // Effect to update i18n language and localStorage when selected language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem('i18nextLngOne', selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  // Function to handle language change
  const onChangeLanguage = (value: any) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="custom-dropdown" onClick={toggleMenu}>
      <form className="mx-auto max-w-sm">
        <select
          id="countries"
          onChange={(e) => onChangeLanguage(e.target.value)}
          value={selectedLanguage}
          className=" inline-block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900  outline-none"
        >
          <option value="uz">Uz</option>
          <option value="en">En</option>
        </select>
      </form>
    </div>
  );
}

export default Language;
