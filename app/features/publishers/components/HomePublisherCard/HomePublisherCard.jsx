import './HomePublisherCard.scss'
import Image from 'next/image'

const HomePublisherCard = ({name, logoData}) => {
  const strapiPath = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <div className='publisher-card'>
       <Image
      src={`${strapiPath}${logoData.url}`}
      width={logoData.width}
      height={logoData.height}
      alt={`Logo de ${name}`}
      className="publisher-card__logo"
    />
      <p className='publisher-card__name'>{name}</p>
    </div>
  )
};

export default HomePublisherCard;