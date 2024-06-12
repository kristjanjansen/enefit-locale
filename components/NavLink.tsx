"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  slug,
  locale,
  children,
  ...rest
}: {
  slug: string;
  locale: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <Link
      href={`/${locale}/${slug}`}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
      {...rest}
    >
      {children}
    </Link>
  );
}
