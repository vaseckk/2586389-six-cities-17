import {memo} from 'react';

interface OfferGalleryProps {
  images: string[];
}

function OfferGallery(offerGalleryProps: OfferGalleryProps): JSX.Element {
  const {images} = offerGalleryProps;

  return(
    <div className="offer__gallery-container container" data-testid="gallery-container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div className="offer__image-wrapper" key={image} data-testid='offer-image-wrapper'>
            <img
              className="offer__image"
              src={image}
              alt="Photo studio"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(OfferGallery);
