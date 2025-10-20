import styled from "styled-components";
import { IconMoon, IconSun, IconLanguage } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Card = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [language, setLanguage] = useState("uz");

  const languages = [
    { code: "uz", label: "O'zbek" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "tr", label: "Türkçe" },
    { code: "jp", label: "日本語" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []); // <--- Bu sahifa yuklanganda faqat bir marta ishga tushadi

  // darkMode o‘zgarganda yangilash
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <StyledWrapper className={darkMode ? "dark" : ""}>
      <div className="settings-card">
        <p className="heading">Til va tasvir</p>

        <button className="exit-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 162 162"
            className="svgIconCross"
          >
            <path
              strokeLinecap="round"
              strokeWidth={17}
              stroke={darkMode ? "white" : "black"}
              d="M9.01074 8.98926L153.021 153"
            />
            <path
              strokeLinecap="round"
              strokeWidth={17}
              stroke={darkMode ? "white" : "black"}
              d="M9.01074 153L153.021 8.98926"
            />
          </svg>
        </button>

        <div className="content">
          {/* === Til tanlash === */}
          <div className="setting-item">
            <div className="left">
              <IconLanguage size={22} className="icon" />
              <span>Tilni tanlash</span>
            </div>

            <select
              className="select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* === Dark Mode === */}
          <div className="setting-item">
            <div className="left">
              {darkMode ? (
                <IconMoon size={22} className="icon" />
              ) : (
                <IconSun size={22} className="icon" />
              )}
              <span>Dark rejim</span>
            </div>

            <div
              className={`switch ${darkMode ? "active" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .settings-card {
    width: 320px;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #ddd;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    padding: 22px;
    font-family: "Inter", sans-serif;
    position: relative;
    transition: all 0.3s ease;
  }

  &.dark .settings-card {
    background-color: #111;
    border-color: #333;
    color: #f1f1f1;
  }

  .heading {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .exit-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 4px;
    transition: background 0.2s ease;
  }

  .exit-button:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.dark .exit-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .svgIconCross {
    height: 12px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 10px;
  }

  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  &.dark .setting-item {
    border-bottom-color: #333;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    color: #444;
  }

  &.dark .icon {
    color: #ddd;
  }

  .select {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 13px;
    background: #f9f9f9;
    cursor: pointer;
    font-weight: 500;
  }

  .select:hover {
    background: #f0f0f0;
  }

  &.dark .select {
    background: #1b1b1b;
    border-color: #333;
    color: #f5f5f5;
  }

  .switch {
    width: 38px;
    height: 20px;
    border-radius: 999px;
    background-color: #d1d1d1;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .switch.active {
    background-color: #4f46e5;
  }

  .dot {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .switch.active .dot {
    transform: translateX(18px);
  }
`;

export default Card;
