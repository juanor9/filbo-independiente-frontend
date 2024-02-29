import './HomePublishers.scss'
import HomePublisherCard from "../HomePublisherCard/HomePublisherCard";

const HomePublishers = () => {
  const one =  'Holi';
  console.log(one);
  return (
    <div className="publishers home__publishers-grid">
      <HomePublisherCard />
      <HomePublisherCard />
    </div>
  )
};

export default HomePublishers;
