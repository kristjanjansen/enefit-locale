"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  slug,
  locale,
  children,
}: {
  slug: string;
  locale: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  console.log(segment);

  return (
    <Link
      href={`/${locale}/${slug}`}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
