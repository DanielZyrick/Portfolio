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

  const currentTHeme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex">
      {currentTHeme === "dark" ? (
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
