import NavLink from "./NavLink";
import { site } from "../utils/site";
const pages = site.pages;

export default function Header(props: {
  locale: string;
  slug: string;
  segment: string;
}) {
  const { locale, slug, segment } = props;
  const frontpage = pages.find(
    (page: any) => page.frontpage && page.segment === segment
  );
  const segments = pages.filter((page: any) => page.frontpage);
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-1 md:gap-4">
          <NavLink
            locale={locale}
            slug={frontpage.slug}
            className="text-[green] !font-bold whitespace-nowrap"
          >
            {site.name} ({segment || frontpage.segment})
          </NavLink>
          {pages
            .filter((page: any) => page.segment === segment && !page.frontpage)
            .map((page: any, i: number) => (
              <NavLink key={i} locale={locale} slug={page.slug}>
                {page.title[locale]}
              </NavLink>
            ))}
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col md:flex-row gap-1 md:gap-4">
            {segments.length > 1 &&
              segments.map((page: any, i: number) => (
                <NavLink key={i} locale={locale} slug={page.slug}>
                  {page.title[locale]}
                </NavLink>
              ))}
          </div>
          <div className="flex gap-4">
            {site.locales.length > 1 &&
              site.locales.map((l: string, i: number) => (
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
