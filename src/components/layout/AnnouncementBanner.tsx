"use client";

import { useEffect, useState } from "react";

const announcement = [
  "New collection just dropped - shop now 🔥",
  "Free shipping on orders over ₦50,000 🚢",
  "Get 20% off selected items this week 🎉",
  "Pay securely with card or bank transfer 💳",
];

const AnnouncementBanner = () => {
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % announcement.length);

        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <aside
      aria-label="Announcement"
      className="w-svw text-center py-2 bg-foreground text-background font-light uppercase text-[10px] tracking-widest"
    >
      <p
        className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {announcement[index]}
      </p>
    </aside>
  );
};

export default AnnouncementBanner;
