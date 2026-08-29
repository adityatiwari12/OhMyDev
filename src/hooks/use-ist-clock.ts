"use client";

import { useSyncExternalStore } from "react";

function formatSnapshot() {
  const date = new Date();
  const time = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })
    .format(date)
    .toUpperCase();
  const hour24 = Number(
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      hour12: false,
    }).format(date),
  );
  return `${time}|${hour24}`;
}

const subscribe = (callback: () => void) => {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
};

const getClientSnapshot = () => formatSnapshot();

const getServerSnapshot = () => "--:--:-- --|12";

export function useISTClock() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const [time, hour24] = snapshot.split("|");
  return { time, hour24: Number(hour24) };
}
