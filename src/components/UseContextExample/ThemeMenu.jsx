import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useUpdateLogger } from "../../hooks/useUpdateLogger";

const ThemeMenu = () => {
  const { theme, setDark, setLight } = useTheme();
  const [text, setText] = useState("");
  useUpdateLogger(text);
  return (
    <div className="theme-menu">
      <div className="theme-button">
        <button className="toggle-theme" onClick={() => (theme.backgroundColor === "white" ? setDark() : setLight())}>
          Toggle Theme
        </button>
      </div>
      <input type="text" className="input-field" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default ThemeMenu;
