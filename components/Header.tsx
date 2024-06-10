import NavLink from "./NavLink";

export default function Header(props: { locale: string; slug: string }) {
  const { locale, slug } = props;
  return (
    <div className="p-8">
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <NavLink locale={locale} slug="">
            frontpage
          </NavLink>
          <NavLink locale={locale} slug="first">
            first
          </NavLink>
          <NavLink locale={locale} slug="second">
            second
          </NavLink>
        </div>
        <div className="flex gap-4">
          <NavLink locale="et" slug={slug}>
            et
          </NavLink>
          <NavLink locale="en" slug={slug}>
            en
          </NavLink>
        </div>
      </div>
    </div>
  );
}
