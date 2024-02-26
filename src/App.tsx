import React from "react";
import { IoMdMenu } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const [toggleDrawer, setToggleDrawer] = React.useState<boolean>(true);
  const [theme, setTheme] = React.useState<boolean>(true);
  const { t, i18n } = useTranslation();
  const handleShowToggleDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  const handlelngValue = (e: any) => {
    i18n.changeLanguage(e.target.value);
  };
  React.useEffect(() => {
    if (theme) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <div className="container">
      {/* <h3 onClick={() => handleShowToggleDrawer()}>setting</h3> */}
      <div className={`${toggleDrawer ? "section-left" : "animate-drawer"} `}>
        <h3>setting</h3>

        <button onClick={() => setTheme(!theme)}>isDark</button>
      </div>
      <div
        className={`${toggleDrawer ? "section-right" : "animate-drawerRight"}`}
      >
        <IoMdMenu onClick={() => handleShowToggleDrawer()} size={"50px"} />
        <select
          onChange={(e) => handlelngValue(e)}
          value={localStorage.getItem("i18nextLng") as string}
        >
          <option value="fr">fr</option>
          <option value="en">en</option>
        </select>
        <p>{t("hello")}</p>
      </div>
    </div>
  );
};

export default App;
