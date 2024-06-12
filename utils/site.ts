const key = "lt_main";

import ee_main from "./pages/ee_main";
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
    //segments: { household: "", business: "ari" },
  },
  {
    key: "lv_main",
    locales: ["lv", "ru", "en"],
    defaultLocale: "lv",
    name: "enefit.lv",
    pages: lv_main,
    segments: { household: "", business: "biznesam" },
  },
  {
    key: "lt_main",
    locales: ["lt", "en"],
    defaultLocale: "lt",
    name: "enefit.lt",
    pages: lt_main,
    segments: { household: "", business: "verslui" },
  },
  {
    key: "pl_main",
    locales: ["pl"],
    defaultLocale: "pl",
    name: "enefit.pl",
    pages: pl_main,
    segments: { business: "" },
  },
  {
    key: "green_main",
    locales: ["et", "en", "ru", "lv", "lt"], // pl is for testing
    defaultLocale: "et",
    name: "enefitgreen.com",
    pages: green_main,
    segments: { corporate: "" },
  },
  {
    key: "volt_main",
    locales: ["et", "en", "ru"],
    defaultLocale: "et",
    name: "enefitvolt.ee",
    pages: volt_main,
    segments: { household: "" },
  },
];

export const site = sites.find((site) => site.key === key) || sites[0];
