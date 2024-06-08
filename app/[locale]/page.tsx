import NavLink from "@/components/NavLink";

export async function generateStaticParams() {
  const locales = [{ locale: "et" }, { locale: "en" }];
  return locales;
}

export default function Index({ params }: { params: any }) {
  const { locale } = params;
  return <div className="text-xl font-bold">Locale: {locale}</div>;
}
