import React from 'react'

import { useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
    
    const { heroId } = useParams();

    // const { heroId, ...rest } = params;

    // console.log(heroId, rest);

    const hero = getHeroById( heroId );
    
    if (!hero) {
      return <h1> 404 - Not Found </h1>; 
    }
    
    return (
      <>
        <h1>{ hero.superhero }</h1>
      </>
    )
}
