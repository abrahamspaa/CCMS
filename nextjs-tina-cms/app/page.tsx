import client from '@agent-tina-css/tina/__generated__/client'
import Landing from '@agent-tina-css/app/Pages/Landing';

export default async function Home() {
  const landingPage = await client.queries.page({ relativePath: 'home.json'});

  return  <Landing {...landingPage} />;
}
