import ClientPage from "./clientPage.js";
import WhoAmI from "./whoAmI";

export default async function WhoAmIPage() {
  return (
    <ClientPage id={1}>
      <WhoAmI />
    </ClientPage>
  );
}
