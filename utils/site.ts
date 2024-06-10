const key = "green";

const sites = [
  {
    key: "ee_main",
    locales: ["et", "en"],
    defaultLocale: "et",
    name: "Enefit Estonia",
    segments: { household: "", business: "ari" },
  },
  {
    key: "lv_main",
    locales: ["lv", "ru", "en"],
    defaultLocale: "lv",
    name: "Enefit Latvia",
    segments: { household: "", business: "biznesam" },
  },
  {
    key: "lt_main",
    locales: ["lt", "en"],
    defaultLocale: "lt",
    name: "Enefit Lietuva",
    segments: { household: "", business: "verslui" },
  },
  {
    key: "pl_main",
    locales: ["pl"],
    defaultLocale: "pl",
    name: "Enefit Poland",
    segments: { household: "" },
  },
  {
    key: "green",
    locales: ["et", "en", "ru", "lv", "lt"],
    defaultLocale: "et",
    name: "Enefit Green",
    segments: { household: "" },
  },
];

export const site = sites.find((site) => site.key === key) || sites[0];
