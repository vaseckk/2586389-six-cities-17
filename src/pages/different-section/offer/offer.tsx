import { Helmet } from 'react-helmet-async';
import Header from '../../identical-section/header/header';
import OfferGallery from '../../identical-section/offer-components/offer-gallery/offer-gallery';
import OfferWrapper from '../../identical-section/offer-components/offer-wrapper/offer-wrapper';
import {Offers} from '../../../types/types.ts';
import CardOffer from '../../identical-section/card/card-offer/card-offer.tsx';

interface OfferProps {
  offers: Offers[];
}

function Offer ({offers}: OfferProps): JSX.Element {
  return(
    <div className="page">
      <Helmet>
        <title>6 sities: offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <OfferWrapper offers={offers}/>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offers.map((offer) => (
                <CardOffer key={offer.id} offers={offer} offersPremium={offers} cardType='near-places' />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
