import './PublishersCard.scss'

const PublishersCard = () => {
  const one = "Holi";
  console.log(one);
  return (
    <article className="publishers-card">
      <div className="placeholder publishers-card__logo">logo editorial</div>
      <div>
        <p className="publishers-card__name">
          <b>Editorial</b>
        </p>
        <p>Descripción</p>
        <button type="button" className='publishers-card__button'>
          Ver más de la editorial
        </button>
      </div>
    </article>
  );
};

export default PublishersCard;
