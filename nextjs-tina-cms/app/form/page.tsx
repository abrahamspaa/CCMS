import client from '@agent-tina-css/tina/__generated__/client'
import DyanmicForm from './form';

export default async function Home() {
  const formPageDetails = await client.queries.form({ relativePath: 'dyanmic_form.json'});
  
  return  <DyanmicForm {...formPageDetails} />;
}
