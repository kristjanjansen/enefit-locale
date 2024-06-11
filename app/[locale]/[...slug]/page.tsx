import Header from "@/components/Header";
import { pageTitles } from "@/utils/locale";
import { pages } from "@/utils/pages";
import { site } from "@/utils/site";
import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  const locales = site.locales.flatMap((locale) =>
    pages
      .filter((page) => page.slug)
      .map((page: any) => ({ locale, slug: "electricity" }))
  );
  console.log("l", locales);
  return locales;
}

export default function Page(props: any) {
  const { locale, slug } = props.params;
  const page = pages.find((page: any) => page.slug === slug);
  return (
    <>
      <Header locale={locale} slug={slug} segment={page.segment} />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{page.title[locale]}</Heading>
        <pre>{JSON.stringify(props.params)}</pre>
      </div>
    </>
  );
}
