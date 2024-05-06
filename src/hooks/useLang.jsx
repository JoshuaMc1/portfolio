import { useEffect, useState } from "react";
import translations from "../lang/translations.json";

const useLang = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [trans, setTrans] = useState(translations.en);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    document.querySelector("meta[name=description]").content =
      translations[newLang].meta_description;
  };

  useEffect(() => {
    setTrans(translations[lang]);

    document.documentElement.lang = lang;
    document.querySelector("meta[name=description]").content =
      translations[lang].meta_description;
    document.querySelector("meta[property='og:description']").content =
      translations[lang].meta_description;
  }, [lang]);

  const getTranslation = (key) => {
    return trans[key] || "";
  };

  return {
    lang,
    changeLang,
    getTranslation,
  };
};

export default useLang;
