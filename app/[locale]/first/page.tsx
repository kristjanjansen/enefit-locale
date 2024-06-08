export async function generateStaticParams() {
  const locales = [{ locale: "et" }, { locale: "en" }];
  return locales;
}

export default function Page() {
  return <div className="p-8">First</div>;
}
