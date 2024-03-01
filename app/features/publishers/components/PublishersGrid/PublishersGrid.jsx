"use client";

import './PublishersGrid.scss';
import PublishersCard from '../PublishersCard/PublishersCard';
import getAllPublishers from "../../services/publishers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PublishersGrid = () => {
  const dispatch = useDispatch();
  const { publishers } = useSelector((state) => state.publishers);
  const [allPublishers, setAllPublishers] = useState([]);

  useEffect(() => {
    if (publishers.length === 0) {
      dispatch(getAllPublishers());
    } else {
      setAllPublishers(publishers.data);
    }
  }, [publishers]);

  return (
    <section className="publishers-grid">
      {allPublishers.length > 0
        ? allPublishers.map((publisher) => {
            return <PublishersCard key={publisher.id}  
            name={publisher.attributes.nombre}
            description={publisher.attributes.descripcion}
            logoData={publisher.attributes.logo.data.attributes}
            />;
          })
        : null}
    </section>
  )
};

export default PublishersGrid;