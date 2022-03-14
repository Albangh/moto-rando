import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//style
import './itinerary.scss';

import {BiUserCircle} from 'react-icons/bi';

const Itinerary = ({id, map, title, description, user, kilometer, highway, hours, minutes, district}) => {

    return (

        <div className="card">
          <div className="card-header">
            <img className='card__img' src="http://localhost:3000/images/arcachon.jpg" alt={title} />
          </div>
          <div className="card-body">
            <h4>
              <Link to={`/itineraire/${id}`}>
                <div className='card__title'>{title}</div>
              </Link>
            </h4>
            <div className='card-body-tag'>
              {
                district && (
                  <span className="tag tag-green">{district}</span>
                )
              }
              <span className="tag tag-teal">Distance: {kilometer} km</span>
              <span className="tag tag-purple">Durée: {hours} heures {minutes} min</span>
              <span className="tag tag-pink">Autoroute: {highway === true ? 'Non'  : 'Oui'}</span>
            </div>
            <p>
              {description.length > 30 ? description.substring(0,100) + '...' : ''}
            </p>
            <Link className='link-itinerary' to={`/itineraire/${id}`}>Voir l'itineraire</Link>
            <div className="user">
              <span className='card__user'>
                <BiUserCircle className='icon' />
                {user}
              </span>
            </div>
          </div>
        </div>

    )
}

Itinerary.prototype = {
    title: PropTypes.string.isRequired,
    map: PropTypes.string,
    description: PropTypes.string
}

Itinerary.defaultProps = {
    map: 'https://fakeimg.pl/300',
    description: ''
}

export default React.memo(Itinerary);
