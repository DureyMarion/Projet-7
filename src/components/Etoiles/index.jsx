import React from 'react';

import Star from "../../assets/star-rate.svg"
import EmptyStar from "../../assets/emptyStar.svg"

import './Etoiles.scss';


export default function Etoiles(rate) {
    const range = [1, 2, 3, 4, 5];
 
    return range.map((rangeElem, key) =>
       rangeElem <= rate.rate ? (
          <img src={Star} alt="étoile pleine" key={key} />
       ) : (
          <img
             src={EmptyStar}
             alt="étoile vide"
             key={key}
             className="empty__star"
          />
       )
    );
 }