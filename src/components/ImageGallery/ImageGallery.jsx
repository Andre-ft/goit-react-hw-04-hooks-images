import React, { useState, useEffect } from 'react';
import galleryAPI from '../../services/gallery-api';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import ErrorQuery from '../ErrorQuery';
import Button from '../Button';
import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery({ query, getImageURL }) {
  
  const [gallery, setGallery] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [pageNumber, setPagenumber] = useState(1);

  
  useEffect(() => {
    if (query !== '') {
      setStatus(Status.PENDING);
      setPagenumber(1);

      galleryAPI
        .fetchGallery(query, 1)
        .then(gallery => {
          setGallery(gallery);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [query]);

  useEffect(() => {
    if (pageNumber !== 1) {
      galleryAPI
        .fetchGallery(query, pageNumber)
        .then(newGallery => {
          setGallery([...gallery, ...newGallery]);
          setStatus(Status.RESOLVED)
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [pageNumber]);


  const getActiveImageURL = imageURL => {
    getImageURL(imageURL);
  };

  const loadMoreImages = () => {
    setPagenumber( pageNumber + 1 );
  };

    if (status === 'idle') {
      return <div>Input query.</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorQuery message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            {gallery.map(item => (
              <ImageGalleryItem
                item={item}
                key={item.id}
                onClick={getActiveImageURL}
              />
            ))}
          </ul>

          <Button onClick={loadMoreImages} aria-label="Load more images" />
        </>
      );
    }
  // }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  getImageURL: PropTypes.func.isRequired,
};
