"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

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

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

function getServerSnapshot() {
  return "--:--:-- --|12";
}

export function useISTClock() {
  const getClientSnapshot = useCallback(() => {
    return formatSnapshot();
  }, []);

  const snapshot = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return useMemo(() => {
    const [time, hour24] = snapshot.split("|");
    return { time, hour24: Number(hour24) };
  }, [snapshot]);
}
