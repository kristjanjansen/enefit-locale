import Header from "@/components/Header";
import NavLink from "@/components/NavLink";
import { Heading } from "enefit-design-system";

export async function generateStaticParams() {
  const locales = [{ locale: "et" }, { locale: "en" }];
  return locales;
}

const title: any = {
  et: "Esileht",
  en: "Frontpage",
};

export default function Index({ params }: { params: any }) {
  const { locale } = params;
  return (
    <>
      <Header locale={locale} slug="" />
      <div className="p-8 flex flex-col gap-4">
        <Heading variant="h1">{title[locale]}</Heading>
        <pre>{JSON.stringify(params)}</pre>
      </div>
    </>
  );
}
