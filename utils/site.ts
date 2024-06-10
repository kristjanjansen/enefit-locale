const key = "pl_main";

const sites = [
  {
    key: "ee_main",
    locales: ["et", "en"],
    defaultLocale: "et",
    name: "Enefit Estonia",
  },
  {
    key: "lv_main",
    locales: ["lv", "en"],
    defaultLocale: "lv",
    name: "Enefit Latvia",
  },
  {
    key: "pl_main",
    locales: ["pl"],
    defaultLocale: "pl",
    name: "Enefit Poland",
  },
];

export const site = sites.find((site) => site.key === key) || sites[0];
