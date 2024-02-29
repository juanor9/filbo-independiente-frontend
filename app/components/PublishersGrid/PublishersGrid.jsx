import './PublishersGrid.scss';
import PublishersCard from '../PublishersCard/PublishersCard';

const PublishersGrid = () => {
  const one =  'Holi';
  console.log(one);
  return (
    <section className="publishers-grid">
      <PublishersCard />
      <PublishersCard />
    </section>
  )
};

export default PublishersGrid;