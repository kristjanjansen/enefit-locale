export async function generateStaticParams() {
  const locales = ["et", "en"].flatMap((locale) => [
    { locale, slug: "first" },
    { locale, slug: "second" },
  ]);
  return locales;
}

export default function Page(props) {
  return <div className="p-8">{JSON.stringify(props.params)}</div>;
}
