import React from 'react'

import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
    
    const { heroId } = useParams();

    // const { heroId, ...rest } = params;

    // console.log(heroId, rest);

    const hero = getHeroById( heroId );
    
    if (!hero) {
      return <Navigate to="/marvel" />
    }
    
    return (
      <>
        <h1>{ hero.superhero }</h1>
      </>
    )
}
