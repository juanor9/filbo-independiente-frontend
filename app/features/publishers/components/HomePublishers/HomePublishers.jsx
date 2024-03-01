"use client";

import "./HomePublishers.scss";
import HomePublisherCard from "../HomePublisherCard/HomePublisherCard";
import getAllPublishers from "../../services/publishers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const HomePublishers = () => {
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
    <div className="publishers home__publishers-grid">
      {allPublishers.length > 0
        ? allPublishers.map((publisher) => {
            return <HomePublisherCard key={publisher.id}  
            name={publisher.attributes.nombre}
            logoData={publisher.attributes.logo.data.attributes}
            />;
          })
        : null}
    </div>
  );
};

export default HomePublishers;
