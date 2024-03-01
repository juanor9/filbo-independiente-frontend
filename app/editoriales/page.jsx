import PublishersGrid from "../features/publishers/components/PublishersGrid/PublishersGrid";
import './PublishersPage.scss';

const PublishersPage = () => {
  const one = 'holi';
  console.log(one);
  return (
    <main className="publishers-page">
    <h2>Editoriales independientes en la feria</h2>
    <PublishersGrid />
    </main>
  )

};

export default PublishersPage;