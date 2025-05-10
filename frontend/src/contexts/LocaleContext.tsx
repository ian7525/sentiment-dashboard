import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LocaleContextType {
  currentLocale: string;
  changeLocale: (locale: string) => void;
  availableLocales: { code: string; name: string }[];
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState(i18n.language || "en");

  const availableLocales = [
    { code: "en", name: "English" },
    { code: "zh", name: "繁體中文" },
  ];

  const changeLocale = (locale: string) => {
    console.log("changeLocale=", locale);
    i18n.changeLanguage(locale);
  };

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLocale(lng);
      document.documentElement.lang = lng;
      localStorage.setItem("i18nextLng", lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <LocaleContext.Provider
      value={{ currentLocale, changeLocale, availableLocales }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
