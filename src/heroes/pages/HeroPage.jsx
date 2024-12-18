import React from 'react'

import { useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
    
    const { heroId } = useParams();

    // const { heroId, ...rest } = params;

    // console.log(heroId, rest);

    const hero = getHeroById( heroId );
    
    console.log(hero);
    
    return (
      <h1>HeroPage</h1>
    )
}
