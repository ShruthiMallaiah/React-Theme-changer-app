import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <h1>{`Toggle the switch to change the theme to ${theme.toUpperCase()}`}</h1>
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider blue" id="round"></span>
      </label>
    </div>
  );
}
