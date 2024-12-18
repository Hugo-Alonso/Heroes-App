
import React, { useMemo } from 'react'
import { getHeroesByPublisher} from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroesList = useMemo( () => getHeroesByPublisher(publisher), [publisher]);
    return (
        // <pre>
        //     {
        //         JSON.stringify(heroesList, null, 3)
        //     }
        // </pre>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            { 
                heroesList.map( heroe => (
                    <HeroCard key={heroe.id} heroe={heroe} />
                ))
            }
        </div>
    )
}
