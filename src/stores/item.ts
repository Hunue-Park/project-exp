import { atom } from "jotai";

const randomPlace = atom<any>("");
export const updateRandomPlace = atom(
  (get) => get(randomPlace),
  (get, set, placeInfo) => set(randomPlace, placeInfo)
);
