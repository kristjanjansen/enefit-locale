import { sites } from "@/utils/site";

export default function Demo() {
  return (
    <div className="fixed right-8 bottom-8 flex flex-col gap-1">
      {sites.map((site: any, i: number) => (
        <a key={i} href={`${site.demo}`}>
          {site.key}
        </a>
      ))}
    </div>
  );
}
