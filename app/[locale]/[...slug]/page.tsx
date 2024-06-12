import Header from "@/components/Header";
import { pageTitles } from "@/utils/locale";
import { pages } from "@/utils/pages";
import { site } from "@/utils/site";
import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  const locales = site.locales.flatMap((locale) =>
    pages
      .filter((page: any) => page.slug)
      .map((page: any) => ({ locale, slug: page.slug.split("/") }))
  );
  console.log(locales);
  return locales;
}

export default function Page({ params }: { params: any }) {
  const { locale, slug } = params;
  console.log(slug);
  const page = pages.find((page: any) => page.slug === slug.join("/"));
  return (
    <>
      <Header locale={locale} slug={slug} segment={page.segment} />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{page.title[locale]}</Heading>
        <pre>{JSON.stringify({ params, page }, null, 2)}</pre>
      </div>
    </>
  );
}
