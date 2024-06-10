import { redirect } from "next/navigation";

import { site } from "../utils/site";

export default function Page() {
  redirect(`/${site.defaultLocale}`);
}
