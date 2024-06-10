import Header from "@/components/Header";
import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  const locales = ["et", "en"].flatMap((locale) => [
    { locale, slug: ["first"] },
    { locale, slug: ["second"] },
  ]);
  return locales;
}

const title: any = {
  first: { et: "Esimene leht", en: "First page" },
  second: { et: "Teine leht", en: "Second page" },
};

export default function Page(props: any) {
  const { locale, slug } = props.params;
  return (
    <>
      <Header locale={locale} slug={slug} />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{title[slug][locale]}</Heading>
        <pre>{JSON.stringify(props.params)}</pre>
      </div>
    </>
  );
}
