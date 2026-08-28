"use client";

import { useEffect, useState } from "react";

type AnnouncementBannerProps = {
  announcement: string[];
}

const AnnouncementBanner = ({announcement}: AnnouncementBannerProps) => {
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
      className="w-full text-center py-2 bg-accent text-background font-light uppercase text-[10px] tracking-widest"
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
