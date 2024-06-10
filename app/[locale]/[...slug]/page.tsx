import Header from "@/components/Header";
import { pageTitles } from "@/utils/locale";
import { site } from "@/utils/site";
import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  const locales = site.locales.flatMap((locale) => [
    { locale, slug: ["first"] },
    { locale, slug: ["second"] },
  ]);
  return locales;
}

export default function Page(props: any) {
  const { locale, slug } = props.params;
  return (
    <>
      <Header locale={locale} slug={slug} />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{pageTitles[slug][locale]}</Heading>
        <pre>{JSON.stringify(props.params)}</pre>
      </div>
    </>
  );
}
