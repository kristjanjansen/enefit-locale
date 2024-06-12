const key = process.env.NEXT_PUBLIC_SITE || "ee_main";

import ee_main from "./pages/ee_main";
import ee_corporate from "./pages/ee_corporate";
import ee_industry from "./pages/ee_industry";
import lv_main from "./pages/lv_main";
import lt_main from "./pages/lt_main";
import pl_main from "./pages/pl_main";
import green_main from "./pages/green_main";
import volt_main from "./pages/volt_main";

const sites = [
  {
    key: "ee_main",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "enefit.ee",
    pages: ee_main,
  },
  {
    key: "ee_corporate",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "enefit.com",
    pages: ee_corporate,
  },
  {
    key: "ee_industry",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "industry.enefit.com",
    pages: ee_industry,
  },
  {
    key: "lv_main",
    locales: ["lv", "ru", "en"],
    defaultLocale: "lv",
    name: "enefit.lv",
    pages: lv_main,
  },
  {
    key: "lt_main",
    locales: ["lt", "en"],
    defaultLocale: "lt",
    name: "enefit.lt",
    pages: lt_main,
  },
  {
    key: "pl_main",
    locales: ["pl"],
    defaultLocale: "pl",
    name: "enefit.pl",
    pages: pl_main,
  },
  {
    key: "green_main",
    locales: ["et", "en", "ru", "lv", "lt"],
    defaultLocale: "et",
    name: "enefitgreen.com",
    pages: green_main,
  },
  {
    key: "volt_main",
    locales: ["et", "en", "ru", "lv", "lt"],
    defaultLocale: "et",
    name: "enefitvolt.ee",
    pages: volt_main,
  },
];

export const site = sites.find((site) => site.key === key) || sites[0];
