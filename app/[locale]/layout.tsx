import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import NavLink from "@/components/NavLink";
import "enefit-design-system/styles.css";

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={inter.className}>
      <body>
        <div className="p-8">
          <div className="flex gap-4">
            <NavLink locale="et" slug="">
              et
            </NavLink>
            <NavLink locale="en" slug="">
              en
            </NavLink>
            <NavLink locale={locale} slug="first">
              first
            </NavLink>
            <NavLink locale={locale} slug="second">
              second
            </NavLink>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
