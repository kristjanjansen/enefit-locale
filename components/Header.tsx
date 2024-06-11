import NavLink from "./NavLink";
import { site } from "../utils/site";
import { links, pageTitles, segmentTitles } from "@/utils/locale";

export default function Header(props: {
  locale: string;
  slug: string;
  segment: string;
}) {
  const { locale, slug, segment = "household" } = props;
  const segments = Object.entries(site.segments);
  return (
    <div className="p-8">
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <NavLink locale={locale} slug="" className="text-[green] !font-bold">
            {site.name} ({segment})
          </NavLink>
          {Object.entries(links[segment]).map(
            ([key, value]: any[], i: number) => (
              <NavLink key={i} locale={locale} slug={""}>
                {value.title[locale]}
              </NavLink>
            )
          )}
        </div>
        <div className="flex gap-4">
          {segments.length > 1 &&
            segments.map(([key, path]: any[], i: number) => (
              <NavLink key={i} locale={locale} slug={["first", "second"][i]}>
                {segmentTitles[key][locale]}
              </NavLink>
            ))}
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
