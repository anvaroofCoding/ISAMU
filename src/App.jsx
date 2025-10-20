import { Outlet } from "react-router-dom";
import { FloatingDockDemo } from "./shared/navbar";
import Card from "./shared/NavbarForModal";
import { useState } from "react";

export default function App() {
  const [showCard, setShowCard] = useState(false);
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="bg-gray-200 dark:bg-[#171717]">
      <div className="fixed bottom-0 mx-auto w-full mb-10 z-10 homemade">
        <FloatingDockDemo onSettingsClick={() => setShowCard(true)} />
      </div>
      {showCard && (
        <div className="absolute w-full h-full bg-black/40 flex justify-center items-center z-55">
          <Card onClose={() => setShowCard(false)} />
        </div>
      )}
      <Outlet />
    </div>
  );
}
