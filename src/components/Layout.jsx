import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useLang from "../hooks/useLang";
import Up from "./Up";

const Layout = () => {
  const { getTranslation, changeLang, lang } = useLang();

  const handleChangeLang = (newLang) => changeLang(newLang);

  return (
    <>
      <Navbar
        getTranslation={getTranslation}
        lang={lang}
        handleChangeLang={handleChangeLang}
      />
      <main className="container">
        <Outlet context={{ getTranslation, lang }} />
        <Up />
      </main>
      <Footer getTranslation={getTranslation} />
    </>
  );
};

export default Layout;
