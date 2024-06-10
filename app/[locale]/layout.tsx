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
      <body>{children}</body>
    </html>
  );
}
