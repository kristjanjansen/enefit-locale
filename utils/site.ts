const key = "green";

const sites = [
  {
    key: "ee_main",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "enefit.ee",
    segments: { household: "", business: "ari" },
  },
  {
    key: "lv_main",
    locales: ["lv", "ru", "en"],
    defaultLocale: "lv",
    name: "enefit.;v",
    segments: { household: "", business: "biznesam" },
  },
  {
    key: "lt_main",
    locales: ["lt", "en"],
    defaultLocale: "lt",
    name: "enefit.lt",
    segments: { household: "", business: "verslui" },
  },
  {
    key: "pl_main",
    locales: ["pl"],
    defaultLocale: "pl",
    name: "Enefit Polska",
    segments: { business: "" },
  },
  {
    key: "green",
    locales: ["et", "en", "ru", "lv", "lt"], // pl is for testing
    defaultLocale: "et",
    name: "Enefit Green",
    segments: { corporate: "" },
  },
  {
    key: "volt",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "Enefit Volt",
    segments: { household: "" },
  },
];

export const site = sites.find((site) => site.key === key) || sites[0];
