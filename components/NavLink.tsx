"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// This *client* component will be imported into a blog layout
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
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
