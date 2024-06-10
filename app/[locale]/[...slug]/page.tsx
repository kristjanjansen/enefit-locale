import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  const locales = ["et", "en"].flatMap((locale) => [
    { locale, slug: ["first"] },
    { locale, slug: ["second"] },
  ]);
  return locales;
}

const title: any = { et: "Leht", en: "Page" };

export default function Page(props: any) {
  const { locale, slug } = props.params;
  return (
    <div className="p-8">
      <Heading variant="h1">{title[locale]}</Heading>
      <pre>{JSON.stringify(props.params)}</pre>
    </div>
  );
}
