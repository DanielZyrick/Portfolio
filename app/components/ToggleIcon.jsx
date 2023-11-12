"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

export default function ToggleIcon() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);

  return (
    <div className="flex">
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-xl text-white"
        >
          <BsSun />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} className="text-xl text-black">
          <BsMoonFill />
        </button>
      )}
    </div>
  );
}
