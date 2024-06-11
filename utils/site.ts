const key = "lv_main";

const sites = [
  {
    key: "lv_main",
    locales: ["lv", "ru", "en"],
    defaultLocale: "lv",
    name: "Enefit Latvia",
    segments: { household: "", business: "biznesam" },
    news: "majai/zinas",
  },
  {
    key: "lt_main",
    locales: ["lt", "en"],
    defaultLocale: "lt",
    name: "Enefit Lietuva",
    segments: { household: "", business: "verslui" },
    news: "privatiems/naujienos",
  },
  {
    key: "pl_main",
    locales: ["pl"],
    defaultLocale: "pl",
    name: "Enefit Polska",
    segments: { business: "" },
    news: "aktualnosci",
  },
  {
    key: "green",
    locales: ["et", "en", "ru", "lv", "lt"],
    defaultLocale: "et",
    name: "Enefit Green",
    segments: { corporate: "" },
    news: "uudised",
  },
  {
    key: "volt",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "Enefit Volt",
    segments: { household: "" },
    blog: "blogi",
  },
];

export const site = sites.find((site) => site.key === key) || sites[0];
