import React from 'react';
import { MdOutlineAddLocation } from 'react-icons/md';
import { FaSearchLocation } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './style.scss';

const FixedBarHome = ({ userId }) => {

  return (
    <div className='bar-fixed'>

        <Link to='/itineraires'>
          <FaSearchLocation className='bar-fixed-icon' />
        </Link>
        <div className='bar-icon'>
          <Link to={`profil/${userId}/nouveau-itineraire`}>
            <MdOutlineAddLocation className='icon-bar' />
          </Link>
        </div>
        <Link to={`profil/${userId}`}>
          <CgProfile className='bar-fixed-icon' />
        </Link>

    </div>
  )
}

export default FixedBarHome