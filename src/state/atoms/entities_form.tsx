import { atom } from "recoil";

export const selectedCreateMenuOption = atom<string>({
  key: "selectedCreateMenuOption",
  default: "",
});

export const entityFormDrawer = atom<boolean>({
  key: "entityFormDrawer",
  default: false,
});
