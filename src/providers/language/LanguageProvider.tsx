import { ReactNode, useState } from "react";

import LanguageContext from "./LanguageContext";
import en from "./data/en.json";
import es from "./data/es.json";
import { Language } from "./type";

interface Props {
  language: Language;
  children: ReactNode;
}

export function LanguageProvider({ language, children }: Props) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  const changeLanguage = (language: Language) => setCurrentLanguage(language);

  const labelsDictionary: { [key: string]: { [key: string]: string } } = {
    en,
    es,
  };

  const getLabel = (labelId: string) => {
    const label = labelsDictionary[currentLanguage][labelId];
    if (!label)
      throw new Error(
        `LabelID ${labelId} not found in ${currentLanguage}.json`
      );
    return label;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, getLabel }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
