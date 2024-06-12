import Demo from "@/components/Demo";
import Header from "@/components/Header";
import { site } from "@/utils/site";
import { Heading } from "enefit-design-system";

const pages = site.pages;

export async function generateStaticParams() {
  return site.locales.map((locale) => ({ locale }));
}

export default function Page({ params }: { params: any }) {
  const { locale } = params;
  const page = pages.find((page: any) => page.frontpage);
  return (
    <>
      <Header locale={locale} slug="" segment={page.segment} />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{page.title[locale]}</Heading>
        <pre className="opacity-25">
          {JSON.stringify({ params, page }, null, 2)}
        </pre>
      </div>
      <Demo />
    </>
  );
}
