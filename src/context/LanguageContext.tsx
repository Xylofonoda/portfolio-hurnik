import React from "react";

export type Language = "en" | "cs";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = React.createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => { },
});

export const LanguageProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = React.useState<Language>(() => {
    return (localStorage.getItem("language") as Language) ?? "en";
  });

  React.useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
