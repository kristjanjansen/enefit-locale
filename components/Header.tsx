import NavLink from "./NavLink";
import { site } from "../utils/site";
import { pages } from "@/utils/pages";

export default function Header(props: {
  locale: string;
  slug: string;
  segment: string;
}) {
  const { locale, slug, segment = "household" } = props;
  const frontpage = pages.find(
    (page: any) => page.frontpage && page.segment === segment
  );
  return (
    <div className="p-8">
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <NavLink
            locale={locale}
            slug={frontpage.slug}
            className="text-[green] !font-bold"
          >
            {site.name} ({segment})
          </NavLink>
          {pages
            .filter((page: any) => page.segment === segment && !page.frontpage)
            .map((page: any, i: number) => (
              <NavLink key={i} locale={locale} slug={page.slug}>
                {page.title[locale]}
              </NavLink>
            ))}
        </div>
        <div className="flex gap-8">
          <div className="flex gap-4">
            {pages
              .filter((page: any) => page.frontpage)
              .map((page: any, i: number) => (
                <NavLink key={i} locale={locale} slug={page.slug}>
                  {page.title[locale]}
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
    </div>
  );
}
