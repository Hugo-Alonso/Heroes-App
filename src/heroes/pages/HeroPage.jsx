import React from 'react'

import { useParams } from 'react-router-dom';

export const HeroPage = () => {
    
    const { heroId } = useParams();

    // const { heroId, ...rest } = params;

    // console.log(heroId, rest);
    
    return (
      <h1>HeroPage</h1>
    )
}
