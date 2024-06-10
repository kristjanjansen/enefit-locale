import NavLink from "./NavLink";
import { site } from "../utils/site";
import { frontpageTitles, pageTitles } from "@/utils/locale";

export default function Header(props: { locale: string; slug: string }) {
  const { locale, slug } = props;
  return (
    <div className="p-8">
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <NavLink locale={locale} slug="" className="text-[green] !font-bold">
            {site.name}
          </NavLink>
          <NavLink locale={locale} slug="first">
            {pageTitles.first[locale]}
          </NavLink>
          <NavLink locale={locale} slug="second">
            {pageTitles.second[locale]}
          </NavLink>
        </div>
        <div className="flex gap-4">
          {site.locales.map((l: string, i: number) => (
            <NavLink key={i} locale={l} slug={slug}>
              {l}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
