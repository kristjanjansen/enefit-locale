import Header from "@/components/Header";
import NavLink from "@/components/NavLink";
import { frontpageTitles } from "@/utils/locale";
import { site } from "@/utils/site";
import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  return site.locales.map((locale) => ({ locale }));
}

export default function Index({ params }: { params: any }) {
  const { locale } = params;
  return (
    <>
      <Header locale={locale} slug="" />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{frontpageTitles[locale]}</Heading>
        <pre>{JSON.stringify(params)}</pre>
      </div>
    </>
  );
}
