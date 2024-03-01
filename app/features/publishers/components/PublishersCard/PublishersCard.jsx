import "./PublishersCard.scss";
import Image from "next/image";

const PublishersCard = ({ name, description, logoData }) => {
  const strapiPath = process.env.NEXT_PUBLIC_STRAPI_URL;
  console.log(logoData.width, logoData.height);
  return (
    <article className="publishers-card">
      <div>
      <Image
        src={`${strapiPath}${logoData.url}`}
        width={logoData.width}
        height={logoData.height}
        alt={`Logo de ${name}`}
        layout="responsive"
        className="publishers-card__logo"
      />

      <p className="publishers-card__name">
        <b>{name}</b>
      </p>
      <p>{description}</p>
      </div>
      
      <button type="button" className="publishers-card__button">
        Ver más de la editorial
      </button>
    </article>
  );
};

export default PublishersCard;
